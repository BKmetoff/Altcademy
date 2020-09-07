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

    @tweets = Tweet.all
    render 'index', status: :ok
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

    @tweet = Tweet.new(new_tweet)
    return render json: { error: 'Error. Could not save tweet.' } unless @tweet.save

    render 'show', status: :ok
  end

  # retrieve current user, delete tweet by id
  def destroy
    token = cookies.signed[:twitter_session_token]
    session = Session.find_by(token: token)

    unless session
      return render json: {
        error: 'invalid request. user session not found.'
      }
    end

    user = session.user

    @tweet = Tweet.find_by(id: params[:id])

    if @tweet && (@tweet.user_id == user.id)
      @tweet.destroy
      render json: {
        tweet: {
          state: 'tweet deleted',
          user: user.id
        }
      }
    else
      render json: { tweet: { state: 'error: failed to delete tweet' } }
    end
  end

  # get all tweets of current user
  def index_by_user
    token = cookies.signed[:twitter_session_token]
    session = Session.find_by(token: token)

    unless session
      return render json: {
        error: 'invalid request. user session not found.'
      }
    end

    user = User.find_by(username: params[:username])
    return render json: { error: 'Error. Could not find user.' } unless user

    @tweets = Tweet.where(user_id: user.id)
    render 'index', status: :ok
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
