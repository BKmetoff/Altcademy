# frozen_string_literal: true

json.bookings do
  json.array! @bookings, include: %i[charges user] do |booking|
    json.id booking.id
    json.start_date booking.start_date
    json.end_date booking.end_date

    json.id booking.user.id
    json.username booking.user.username
    json.email booking.user.email

    json.charges booking.charges do |charge|
      json.complete charge.complete
      json.amount charge.amount
    end
  end
end
