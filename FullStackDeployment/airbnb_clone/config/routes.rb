# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'static_pages#home'

  get '/property/:id' => 'static_pages#property'
  get '/property/:id/bookings' => 'static_pages#property_bookings'
  get '/booking/:id' => 'static_pages#booking'
  get '/login' => 'static_pages#login'

  # handle redirect to success url:
  get '/booking/:id/success' => 'static_pages#success'

  namespace :api do
    # Add routes below this line
    resources :users, only: [:create]
    resources :sessions, only: %i[create destroy]
    resources :properties, only: %i[index show]
    resources :bookings, only: %i[create show]
    resources :charges, only: [:create]

    get '/properties/:id/bookings' => 'bookings#get_property_bookings'
    get '/authenticated' => 'sessions#authenticated'

    get '/bookings/user/:id' => 'bookings#show_by_user'
    get '/properties/user/:id' => 'properties#show_by_user'

    get '/properties/:id/bookings' => 'properties#show_property_bookings'

    # webhook:
    post '/charges/mark_complete' => 'charges#mark_complete'
  end
end
