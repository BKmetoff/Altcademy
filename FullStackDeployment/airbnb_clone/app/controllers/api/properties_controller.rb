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

    def show_property_bookings
      property = Property.find_by(id: params[:id])

      return render json: { error: 'not_found' }, status: :not_found unless property

      @property_bookings = Booking.where(property_id: property.id)
      render 'api/properties/show_property_bookings'
    end
  end
end
