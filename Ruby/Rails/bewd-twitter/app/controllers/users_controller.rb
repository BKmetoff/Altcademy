# frozen_string_literal: true

class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)

    if @user.save
      render json: {
        user: {
          username: @user.username,
          email: @user.email
        }
      }
    else
      render json: { success: false }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
