# frozen_string_literal: true

json.user_properties do
  json.array! @user_properties, include: [:bookings] do |property|
    json.id property.id
    json.title property.title
    json.price_per_night property.price_per_night

    json.bookings property.bookings do |booking|
      json.id booking.id
      json.start_date booking.start_date
      json.end_date booking.end_date
    end
  end
end
