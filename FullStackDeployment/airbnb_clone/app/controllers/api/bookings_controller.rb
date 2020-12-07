# frozen_string_literal: true

module Api
  class BookingsController < ApplicationController
    def create
      token = cookies.signed[:airbnb_session_token]
      session = Session.find_by(token: token)
      return render json: { error: 'user not logged in' }, status: :unauthorized unless session

      property = Property.find_by(id: params[:booking][:property_id])
      return render json: { error: 'cannot find property' }, status: :not_found unless property

      begin
        @booking = Booking.create({
                                    user_id: session.user.id,
                                    property_id: property.id,
                                    start_date: params[:booking][:start_date],
                                    end_date: params[:booking][:end_date]
                                  })
        render 'api/bookings/create', status: :created
      rescue ArgumentError => e
        render json: { error: e.message }, status: :bad_request
      end
    end

    def property_bookings
      property = Property.find_by(id: params[:id])
      return render json: { error: 'cannot find property' }, status: :not_found unless property

      @bookings = property.bookings.includes(:charges, :user)
      
      render 'api/bookings/index'
    end

    def show_by_user
      user = User.find_by(id: params[:id])

      if user
        @user_bookings = Booking.where(user_id: user.id).includes(:charges, :property)
        render 'api/bookings/show_by_user'
      end
    end

    def show
      @booking_to_show = Booking.find_by(id: params[:id])
      @booking_charges = Charge.where(booking_id: @booking_to_show.id)
      @booking_expired = @booking_to_show.end_date < Date.today

      return render json: { error: 'cannot find booking' }, status: :not_found unless @booking_to_show

      render 'api/bookings/show'
    end

    private

    def booking_params
      params.require(:booking).permit(:property_id, :start_date, :end_date)
    end
  end
end
