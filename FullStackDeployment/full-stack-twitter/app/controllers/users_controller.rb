# frozen_string_literal: true

class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    # render json: params

    @user = User.new(user_params)

    if @user.save
      render json: {
        user: {
          username: @user.username
        }
      }
    else
      render json: {
        error: 'could not create user'
      }
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :username)
  end
end
