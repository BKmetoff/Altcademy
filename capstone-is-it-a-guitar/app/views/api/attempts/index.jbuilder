json.array! @attempts do |attempt|
  json.image_url attempt.image_url
  json.success attempt.user
  json.user attempt.user
end