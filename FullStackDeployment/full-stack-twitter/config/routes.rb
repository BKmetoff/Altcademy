# frozen_string_literal: true

Rails.application.routes.draw do
  get '/login' => 'static_pages#home'
  get '/signup' => 'static_pages#home'
  get '/tweets' => 'static_pages#tweets'

  namespace :api do
    resources :users, :sessions, :tweets
    post '/users' => 'users#create'

    post '/sessions' => 'sessions#create'
    get '/authenticated' => 'sessions#authenticated'
    delete '/sessions' => 'sessions#destroy'

    get '/tweets' => 'tweets#index'
    post '/tweets' => 'tweets#create'
    delete '/tweets/:id' => 'tweets#destroy'
    get '/users/:username/tweets' => 'tweets#index_by_user'
  end

  root to: 'static_pages#home'
end
