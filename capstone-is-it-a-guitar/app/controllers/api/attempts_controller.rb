module Api
  class AttemptsController < ApplicationController

    def create
      return render json: { error: 'user not logged in' }, status: :unauthorized unless find_session

      attempt_success = attempt_params.fetch(:success)
      parsed_params = attempt_params.merge(:success => parse_boolean(attempt_success))
      
      @attempt = Attempt.new(attempt_params)

      if @attempt.save
        render 'api/attempts/show'
      else
        render json: @attempt.errors, status: :bad_request 
      end
    end

    def index
      # return count of attempts and average success
      # per user

      @response_data = User
                        .joins(:attempts)
                        .select('users.id, users.username, count(*) as all_attempts_count, (count(*) filter(where success) / (count(*) * 1.0) * 100) as average_success')
                        .group('users.id, users.username')
        
      render 'api/attempts/index'
    end

    def show_per_user
      # return average success
      # and attempts
      # for one user

      return render json: { error: 'user not logged in' }, status: :unauthorized unless find_session

      user = User.find_by(id: find_session.user.id)

      user_attempts = Attempt.where(user_id: user.id)
      user_average = calculate_user_average(
                                              user_attempts.length, 
                                              user_attempts.where(success: true).length
                                            )

      @user_stats = {:average => user_average, :attempts => user_attempts}
      
      render 'api/attempts/show_per_user'
    end
    

    private

    def attempt_params
      params.require(:attempt).permit(:user_id, :image_url, :success)
    end

    def find_session
      token = cookies.signed[:guitar_session_token]
      session = Session.find_by(token: token)
    end

    def parse_boolean(value)
      ActiveRecord::Type::Boolean.new.deserialize(value)
    end

    end
  end
end