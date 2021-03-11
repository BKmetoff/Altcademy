json.array! @response_data do |record|
  json.user_id record.id
  json.username record.username
  json.average_success_rate record.average_success.round(1)
  json.attempts record.all_attempts_count
end

# data.each do |record|
#         @response_data.push({
#           :user => record.username,
#           :user_id => record.id,
#           :attempts => record.all_attempts_count,
#           :average_success_rate => record.average_success.round(1),
#         })