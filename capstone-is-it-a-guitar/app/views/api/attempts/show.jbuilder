json.attempt do
  json.id @attempt.id
  json.user_id @attempt.user_id
  json.image_url @attempt.image_url
  json.success @attempt.success
end