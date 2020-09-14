class TweetsController < ApplicationController
  include CurrentUserConcern

  before_action :validate_user

  def create
    tweet = Tweet.create!(
      message: params['message'],
      user_id: @current_user.id
    )

    if tweet
      render json: {
        status: :created,
        tweet: tweet
      }
    else
      render json: { status: 500 }
    end
  end

  def destroy
    tweet = Tweet.find_by(id: params[:id])

    return render json: { status: 401 } unless tweet.user_id == @current_user.id

    if tweet.destroy
      render json: { status: :deleted }
    else
      render json: { status: 500 }
    end
  end

  private

  def validate_user
    return render json: { status: 401 } unless @current_user
  end
end
