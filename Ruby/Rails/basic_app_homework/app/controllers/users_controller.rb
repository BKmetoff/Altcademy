# frozen_string_literal: true

class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    @user = User.create(
      username: params[:username],
      email: params[:email],
      first_name: params[:first_name],
      last_name: params[:last_name]
    )

    render '/users/create.jbuilder'
  end
end
