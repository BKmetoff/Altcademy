json.tweet do
  json.id           @tweet.id
  json.message      @tweet.message
  json.created_at   @tweet.created_at
  json.updated_at   @tweet.updated_at
  json.user_id      @tweet.user_id
end
