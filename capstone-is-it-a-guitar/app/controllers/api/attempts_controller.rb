module Api
  class AttemptsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
      @user = User.where(id: attempt_params.attempt.user_id).first

      unless @user
        render json: { success: false }, status: :not_found
      end

      @attempt = Attempt.new(attempt_params)

      if @attempt.save
        render 'api/attempts/create'
      else
        render json: { success: false }, status: :bad_request
      end
    end

    private

    def attempt_params
      params.require(:attempt).permit(:user_id, :image_url, :success)
    end
  end
end