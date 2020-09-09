class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  #  new session, set session token
  #  compare input PW to DB PW
  def create
    @user = User.find_by(email: params[:user][:email])

    if @user && (@user.password == params[:user][:password])
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
      }
    else
      render json: {
        session: {
          state: 'login unsuccessful'
        }
      }
    end
  end

  # retrieve cookie, find cookie in session table
  def authenticated
    token = cookies.signed[:twitter_session_token]
    session = Session.find_by(token: token)

    if session
      user = session.user

      render json: {
        authentication: {
          state: 'successfully authenticated',
          user: user.email
        }
      }
    else
      render json: {
        authentication: {
          state: 'authentication failed'
        }
      }
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
      }
    end
  end
end
