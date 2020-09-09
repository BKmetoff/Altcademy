# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'static_pages#home'
  get '/login' => 'static_pages#home'
  get '/signup' => 'static_pages#home'

  post '/users' => 'users#create'

  post '/sessions' => 'sessions#create'
  get '/authenticated' => 'sessions#authenticated'
  delete '/sessions' => 'sessions#destroy'

  get '/tweets' => 'tweets#index_all'
  post '/tweets' => 'tweets#create'
  delete '/tweets/:id' => 'tweets#destroy'
  get '/users/:username/tweets' => 'tweets#index_by_user'
end
