# frozen_string_literal: true

class TweetsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # list all tweets if user is logged in
  def index_all
    token = cookies.signed[:twitter_session_token]
    session = Session.find_by(token: token)

    unless session
      return render json: {
        error: 'invalid request. user session not found.'
      }
    end

    @all_tweets = Tweet.all

    render json: {
      all_tweets: @all_tweets
    }
  end

  # find current user, create tweet
  def create
    token = cookies.signed[:twitter_session_token]
    session = Session.find_by(token: token)

    if session
      user = session.user
    else
      return render json: {
        error: 'invalid request. user session not found.'
      }
    end

    new_tweet = tweet_params
    new_tweet[:user_id] = user.id

    puts '-' * 100
    puts new_tweet.inspect.to_s
    puts '-' * 100

    @tweet = Tweet.new(new_tweet)
    if @tweet.save
      render json: {
        tweet: {
          state: 'tweet saved',
          tweet: @tweet.message,
          user_id: @tweet.user_id
        }
      }
    else
      render json: {
        tweet: {
          state: 'failed to save tweet.'
        }
      }
    end
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
