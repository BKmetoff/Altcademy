module Api
  class PropertiesController < ApplicationController
    def index
      @properties = Property.order(created_at: :desc).page(params[:page]).per(6)
      unless @properties
        return render json: { error: 'not_found' }, status: :not_found
      end

      render 'api/properties/index', status: :ok
    end

    def show
      @property = Property.find_by(id: params[:id])
      unless @property
        return render json: { error: 'not_found' }, status: :not_found
      end

      render 'api/properties/show', status: :ok
    end

    def show_by_user
      user = User.find_by(id: params[:id])

      if user
        @user_properties = Property.where(user_id: user.id).includes(:bookings)
        render 'api/properties/show_by_user'
      end
    end
  end
end
