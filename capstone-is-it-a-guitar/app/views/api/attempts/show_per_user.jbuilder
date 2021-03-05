json.average @user_stats[:average]

json.attempts @user_stats[:attempts] do |attempt|
  json.success attempt.success
  json.image_url attempt.image_url
  json.created_at attempt.created_at
end
