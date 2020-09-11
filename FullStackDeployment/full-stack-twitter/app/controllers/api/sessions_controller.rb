module Api
  class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    #  new session, set session token
    #  compare input PW to DB PW
    def create
      puts '-' * 50
      puts params.to_s
      puts '-' * 50
      @user = User.find_by(email: params[:email])

      if @user && (@user.password == params[:password])
        session = @user.sessions.create
        cookies.permanent.signed[:twitter_session_token] = {
          value: session.token,
          httponly: true
        }

        render json: {
          session: {
            state: 'login successful',
            user: @user.email
          }
        }, status: :ok
      else
        render json: {
          session: {
            state: 'login unsuccessful'
          }
        }, status: :not_found
      end
    end

    # retrieve cookie, find cookie in session table
    def authenticated
      token = cookies.signed[:twitter_session_token]
      session = Session.find_by(token: token)

      if session
        user = session.user

        render json: {
          logged_in: true,
          user: {
            email: user.email,
            username: user.username
          }
        }, status: :ok
      else
        render json: {
          logged_in: false
        }, status: :not_found
      end
    end

    # find token in sessions table, delete session if found
    def destroy
      token = cookies.signed[:twitter_session_token]
      session = Session.find_by(token: token)

      if session&.destroy

        render json: {
          session: {
            state: 'successfully destroyed session'
          }
        }, status: :ok
      end
    end
  end
end
