Rails.application.routes.draw do
  post '/jobs' => 'jobs#create'
end
