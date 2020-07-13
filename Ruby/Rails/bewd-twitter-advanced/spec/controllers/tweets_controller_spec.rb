require 'rails_helper'

RSpec.describe TweetsController, type: :controller do
  render_views

  describe 'POST /tweets' do
    it 'renders new tweet object' do
      user = FactoryBot.create(:user)
      session = user.sessions.create
      @request.cookie_jar.signed['twitter_session_token'] = session.token

      post :create, params: {
        tweet: {
          message: 'Test Message'
        }
      }

      expect(response.body).to eq({
        tweet: {
          username: user.username,
          message: 'Test Message'
        }
      }.to_json)

      expect(JSON.parse(response.body)['tweet']['message']).to eq('Test Message')
      expect(JSON.parse(response.body)['tweet']['image']).to eq(nil)
    end

    it 'OK with image attachments' do
      user = FactoryBot.create(:user)
      session = user.sessions.create
      @request.cookie_jar.signed['twitter_session_token'] = session.token

      post :create, params: {
        tweet: {
          message: 'Test Message',
          image: fixture_file_upload('files/test.png')
        }
      }

      expect(JSON.parse(response.body)['tweet']['message']).to eq('Test Message')
      expect(JSON.parse(response.body)['tweet']['image']).to include('test.png')
    end
  end

  describe 'GET /tweets' do
    it 'renders all tweets object' do
      user = FactoryBot.create(:user)
      FactoryBot.create(:tweet, user: user)
      FactoryBot.create(:tweet, user: user)

      get :index

      expect(response.body).to eq({
        tweets: [
          {
            id: Tweet.order(created_at: :desc)[0].id,
            username: user.username,
            message: 'Test Message',
            image: nil
          }, {
            id: Tweet.order(created_at: :desc)[1].id,
            username: user.username,
            message: 'Test Message',
            image: nil
          }
        ]
      }.to_json)
    end
  end

  describe 'DELETE /tweets/:id' do
    it 'renders success' do
      user = FactoryBot.create(:user)
      session = user.sessions.create
      @request.cookie_jar.signed['twitter_session_token'] = session.token

      tweet = FactoryBot.create(:tweet, user: user)

      delete :destroy, params: { id: tweet.id }

      expect(response.body).to eq({ success: true }.to_json)
      expect(user.tweets.count).to eq(0)
    end

    it 'renders fails if not logged in' do
      user = FactoryBot.create(:user)
      tweet = FactoryBot.create(:tweet, user: user)

      delete :destroy, params: { id: tweet.id }

      expect(response.body).to eq({ success: false }.to_json)
      expect(user.tweets.count).to eq(1)
    end
  end

  describe 'GET /users/:username/tweets' do
    it 'renders tweets by username' do
      user_1 = FactoryBot.create(:user, username: 'user_1', email: 'user_1@user.com')
      user_2 = FactoryBot.create(:user, username: 'user_2', email: 'user_2@user.com')

      tweet_1 = FactoryBot.create(:tweet, user: user_1)
      tweet_2 = FactoryBot.create(:tweet, user: user_2)

      get :index_by_user, params: { username: user_1.username }

      expect(response.body).to eq({
        tweets: [
          {
            id: tweet_1.id,
            username: user_1.username,
            message: 'Test Message',
            image: nil
          }
        ]
      }.to_json)
    end

    it 'renders tweets with images by username' do
      user_1 = FactoryBot.create(:user, username: 'user_1', email: 'user_1@user.com')
      user_2 = FactoryBot.create(:user, username: 'user_2', email: 'user_2@user.com')

      tweet_1 = FactoryBot.create(:tweet, user: user_1, image: fixture_file_upload('files/test.png'))
      tweet_2 = FactoryBot.create(:tweet, user: user_2, image: fixture_file_upload('files/test.png'))

      get :index_by_user, params: { username: user_1.username }

      expect(JSON.parse(response.body)['tweets'].first['image']).to include('test.png')
    end
  end
end
