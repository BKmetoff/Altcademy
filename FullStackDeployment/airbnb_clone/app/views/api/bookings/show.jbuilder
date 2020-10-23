json.booking do
  json.id @booking_to_show.id
  json.start_date @booking_to_show.start_date
  json.end_date @booking_to_show.end_date

  json.property do
    json.id @booking_to_show.property.id
    json.title @booking_to_show.property.title
  end
end
