# frozen_string_literal: true

Rails.application.routes.draw do
  post '/jobs' => 'jobs#create'
  get '/jobs' => 'jobs#index'
  get '/jobs/:id' => 'jobs#show'
end
