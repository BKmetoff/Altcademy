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


    def authenticated
      token = cookies.signed[:guitar_session_token]
      session = Session.find_by(token: token)

      if session
        @user = session.user
        render 'api/sessions/authenticated', status: :created
      else
        render json: { authenticated: false }, status: :ok
      end
    end
    

    def destroy
      token = cookies.permanent.signed[:guitar_session_token]
      session = Session.find_by(token: token)

      if session&.destroy
       render json: { success: true }, status: :ok
      else
       render json: { success: false }, status: :bad_request
      end
    end
  end
end