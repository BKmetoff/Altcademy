module Api
  class AttemptsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      token = cookies.signed[:guitar_session_token]
      session = Session.find_by(token: token)
      return render json: { error: 'user not logged in' }, status: :unauthorized unless session

      attempt_success = attempt_params.fetch(:success)
      parsed_params = attempt_params.merge(:success => parse_boolean(attempt_success))
      
      @attempt = Attempt.new(attempt_params)

      if @attempt.save
        render 'api/attempts/show'
      else
        render json: @attempt.errors, status: :bad_request 
      end
    end

    # return count of attempts per user
    # and average success rate
    def index

      users_with_attempts = []
      User.all.each do |user|
        if user.attempts.count != 0 
          users_with_attempts.push (user) 
        end
      end

      @response_data = []
      
      users_with_attempts.each do |user|
        @response_data.push({
          :user => user.username,
          :attempts => user.attempts.count,
          :average_success_rate => calculate_user_average(
            user.attempts.count,
            user.attempts.where(success: true).count
          ).round(1)
        })
      end

      render json: @response_data
    end

    private

    def attempt_params
      params.require(:attempt).permit(:user_id, :image_url, :success)
    end

    def parse_boolean(value)
      ActiveRecord::Type::Boolean.new.deserialize(value)
    end

    def calculate_user_average(attempts_count, successful_attempts)
      (successful_attempts / attempts_count.to_f) * 100
    end
  end
end