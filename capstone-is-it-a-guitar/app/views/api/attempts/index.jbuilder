json.array! @response_data do |user|
  json.user user[:user]
  json.average_success_rate user[:average_success_rate]
  json.attempts user[:attempts]
end