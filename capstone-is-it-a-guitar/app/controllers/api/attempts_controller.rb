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

    private

    def attempt_params
      params.require(:attempt).permit(:user_id, :image_url, :success)
    end

    def parse_boolean(value)
      ActiveRecord::Type::Boolean.new.deserialize(value)
    end
  end
end