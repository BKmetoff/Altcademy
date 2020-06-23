# frozen_string_literal: true

json.user do
  json.username @user.username
  json.email @user.email
  json.first_name @user.first_name
  json.last_name @user.last_name
end
