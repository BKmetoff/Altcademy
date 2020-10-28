module Api
  class BookingsController < ApplicationController
    
    def create
      token = cookies.signed[:airbnb_session_token]
      session = Session.find_by(token: token)
      unless session
        return render json: { error: 'user not logged in' }, status: :unauthorized 
      end

      property = Property.find_by(id: params[:booking][:property_id])
      unless property
        return render json: { error: 'cannot find property' }, status: :not_found
      end

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

    def get_property_bookings
      property = Property.find_by(id: params[:id])
      unless property
        return render json: { error: 'cannot find property' }, status: :not_found
      end

      @bookings = property.bookings.where('end_date > ? ', Date.today)
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

      unless @booking_to_show
        return render json: { error: 'cannot find booking' }, status: :not_found
      end

      render 'api/bookings/show'
    end

    private

    def booking_params
      params.require(:booking).permit(:property_id, :start_date, :end_date)
    end
  end
end
