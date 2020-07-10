# frozen_string_literal: true

class TweetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    token = cookies.signed[:twitter_session_token]
    session = Session.find_by(token: token)

    if session
      user = session.user
      @tweet = user.tweets.new(tweet_params)

      if @tweet.save
        render json: {
          tweet: {
            username: user.username,
            message: @tweet.message
          }
        }
      else
        render json: { success: false }
      end
    else
      render json: { session: false }
    end
  end

  def index
    @tweets = Tweet.all.order(created_at: :desc)

    render json: {
      tweets: [
        {
          id: @tweets.ids
        }
      ]
    }
  end

  def index_by_user
    @user = User.find_by(username: params[:username])
    @tweets = Tweet.where(user_id: @user.id)

    if @user && @tweets
      all_user_tweets = @tweets.map do |tweet|
        {
          id: tweet.id,
          username: @user.username,
          message: tweet.message
        }
      end

      render json: {
        tweets: all_user_tweets
      }
    else
      render json: {
        success: false
      }
    end
  end

  def destroy
    token = cookies.signed[:twitter_session_token]
    session = Session.find_by(token: token)

    if session
      user = session.user
      @tweet = Tweet.find_by_id(params[:id])

      if @tweet && (@tweet.user_id == user.id)
        @tweet.destroy
        render json: {
          success: true
        }
      else
        render json: {
          success: false
        }
      end
    else
      render json: {
        session: false
      }
    end
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
