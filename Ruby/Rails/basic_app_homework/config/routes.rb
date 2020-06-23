# frozen_string_literal: true

Rails.application.routes.draw do
  get '/', to: 'static_pages#index'

  get '/posts', to: 'posts#list'
  get 'posts/(:id)', to: 'posts#show', as: 'post'
  post '/posts', to: 'posts#create'

  post '/users', to: 'users#create'
end
