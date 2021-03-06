# frozen_string_literal: true

module Api
  class PropertiesController < ApplicationController
    # skip_before_action :verify_authenticity_token

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

    def create
      token = cookies.signed[:airbnb_session_token]
      session = Session.find_by(token: token)
      return render json: { error: 'user not logged in' }, status: :unauthorized unless session

      @property = Property.create(property_params)

      render json: { error: 'could not create property' }, status: :bad_request unless @property
      render 'api/properties/show', status: :created
    end

    private

    def property_params
      params.require(:property).permit(:title, :description, :city, :country, :property_type, :price_per_night, :max_guests, :bedrooms, :beds, :baths, :user_id, :image_url)
    end
  end
end
