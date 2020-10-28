json.user_bookings do
  json.array! @user_bookings, include: [:charges, :property] do |booking|
    json.id booking.id
    json.start_date booking.start_date
    json.end_date booking.end_date
    json.property_id booking.property_id
    json.property_title booking.property.title
    json.property_city booking.property.city
    json.property_type booking.property.property_type

    json.charge booking.charges do |charge|
      json.complete charge.complete
      json.amount charge.amount
    end
  end
end
