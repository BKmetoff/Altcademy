# frozen_string_literal: true

Rails.application.routes.draw do
  get '/', to: 'static_pages#index'

  get '/posts', to: 'posts#list'
  post '/posts', to: 'posts#create'
  get 'posts/(:id)', to: 'posts#show'
  put 'posts/(:id)', to: 'posts#update'

  post '/users', to: 'users#create'
end
