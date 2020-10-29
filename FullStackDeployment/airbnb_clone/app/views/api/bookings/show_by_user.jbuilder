json.user_bookings do
  json.array! @user_bookings, include: [:charges, :property] do |booking|
    json.id booking.id
    json.start_date booking.start_date
    json.end_date booking.end_date
    json.property_id booking.property_id
    json.title booking.property.title
    json.city booking.property.city
    json.type booking.property.property_type

    json.charge booking.charges do |charge|
      json.complete charge.complete
      json.amount charge.amount
    end
  end
end
