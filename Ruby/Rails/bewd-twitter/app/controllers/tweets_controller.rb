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

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
