# frozen_string_literal: true

Rails.application.routes.draw do
  root 'homepage#index'
  get '/feeds'                    => 'feeds#index'

  # USERS
  post '/users'                   => 'users#create'

  # SESSIONS
  post '/sessions'                => 'sessions#create'
  get '/authenticated'            => 'sessions#authenticated'

  # TWEETS

  # Redirect all other paths to index page, which will be taken over by AngularJS
  get '*path' => 'homepage#index'
end
