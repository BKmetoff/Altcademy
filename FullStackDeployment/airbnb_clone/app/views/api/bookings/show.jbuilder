json.booking do
  json.id @booking_to_show.id
  json.start_date @booking_to_show.start_date
  json.end_date @booking_to_show.end_date

  json.property do
    json.id @booking_to_show.property.id
    json.title @booking_to_show.property.title
    json.description @booking_to_show.property.description
    json.city @booking_to_show.property.city
    json.country @booking_to_show.property.country
    json.property_type @booking_to_show.property.property_type
    json.price_per_night @booking_to_show.property.price_per_night
    json.max_guests @booking_to_show.property.max_guests
    json.bedrooms @booking_to_show.property.bedrooms
    json.beds @booking_to_show.property.beds
    json.baths @booking_to_show.property.baths
    json.image_url @booking_to_show.property.image_url

    json.user do
      json.id @booking_to_show.property.user.id
      json.username @booking_to_show.property.user.username
    end
  end

  json.charges @booking_charges
  json.booking_expired @booking_expired
end
