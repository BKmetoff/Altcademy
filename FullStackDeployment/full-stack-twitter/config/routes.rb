# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'static_pages#home'
  get 'demo' => 'static_pages#demo'

  post '/users' => 'users#create'

  #  new session, set session token
  #  compare input PW to DB PW
  post '/sessions' => 'sessions#create'

  # retrieve cookie, find cookie in session table
  get '/authenticated' => 'sessions#authenticated'

  # find cookie in sessions table, delete session if found
  delete '/sessions' => 'sessions#destroy'

  # find current user, create tweet
  post '/tweets' => 'tweets#create'

  # retrieve current user, delete tweet by id
  delete '/tweets/:id' => 'tweets#destroy'

  # get all tweets of current user
  get '/users/:username/tweets' => 'tweets#index_by_user'
end
