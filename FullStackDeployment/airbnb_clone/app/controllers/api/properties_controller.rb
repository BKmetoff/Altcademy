# frozen_string_literal: true

module Api
  class PropertiesController < ApplicationController
    def index
      @properties = Property.order(created_at: :desc).page(params[:page]).per(6)
      return render json: { error: 'not_found' }, status: :not_found unless @properties

      render 'api/properties/index', status: :ok
    end

    def show
      @property = Property.find_by(id: params[:id])
      return render json: { error: 'not_found' }, status: :not_found unless @property

      render 'api/properties/show', status: :ok
    end

    def show_by_user
      user = User.find_by(id: params[:id])

      return render json: { error: 'not_found' }, status: :not_found unless user

      @user_properties = Property.where(user_id: user.id).includes(:bookings)
      render 'api/properties/show_by_user', status: :ok
    end

    def update
      @property = Property.find_by(id: params[:id])

      return render json: { error: 'not_found' }, status: :not_found unless @property

      render 'api/properties/show', status: :ok if @property.update(property_params)
    end

    private

    def property_params
      params.require(:property).permit(:title, :description, :city, :country, :property_type, :price_per_night, :max_guests, :bedrooms, :beds, :baths, :user)
    end
  end
end
