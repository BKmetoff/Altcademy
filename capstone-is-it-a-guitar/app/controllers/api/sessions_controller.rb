module Api
  class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      @user = User.find_by(email: params[:user][:email])

      if @user && (BCrypt::Password.new(@user.password) == params[:user][:password])
       session = @user.sessions.create 
       cookies.permanent.signed[:guitar_session_token] = {
         value: session.token,
         httponly: true
       }

       render 'api/sessions/create', status: :created
      else
       render json: { success: false }, status: :bad_request
      end
    end
  end
end