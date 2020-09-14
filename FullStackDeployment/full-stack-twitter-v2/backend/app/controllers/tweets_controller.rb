class TweetsController < ApplicationController
  include CurrentUserConcern

  def create
    if @current_user
      tweet = Tweet.create!(
        message: params['message'],
        user_id: @current_user.id
      )

      render json: {
        status: :created,
        tweet: tweet
      }
    else
      render json: { status: 401 }
    end
  end
end
