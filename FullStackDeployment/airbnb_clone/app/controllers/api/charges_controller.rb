module Api
  class ChargesController < ApplicationController
    def create
      token = cookies.signed[:airbnb_session_token]
      session = Session.find_by(token: token)
      unless session
        return render json: {error: 'not logged in'}, status: :unauthorized
      end

      booking = Booking.find_by(id: params[:booking_id])
      unless booking
        return render json: {error: 'cannot find booking'}, status: :not_found
      end

      property = booking.property
      days_booked = (booking.end_date - booking.start_date).to_i
      amount = days_booked * property.price_per_night

      session = Stripe::Checkout::Session.create(
        payment_method_types: ['card'],
        line_items: [{
          name: "Trip for #{property.title}",
          description: "Your booking is for #{booking.start_date} to #{booking.end_date}.",
          amount: (amount * 100.0).to_i,
          currency: 'usd',
          quality: 1
        }],
        success_url: "#{ENV['URL']}#{params[:cancel_url]}"
      )

      @charge = booking.charges.new({
                                      checkout_session_id: session_id,
                                      currency: 'usd',
                                      amount: amount
                                    })

      if @charge.save
        render 'api/charges/create', status: :created
      else
        render json: { error: 'charge could not be created' }, status: :bad_request
      end
    end
  end
end