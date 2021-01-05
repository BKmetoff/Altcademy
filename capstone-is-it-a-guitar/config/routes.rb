Rails.application.routes.draw do
  root to: 'static_pages#home'
  get '/history' => 'static_pages#history'
  get '/leaderhoard' => 'static_pages#leaderhoard'
end
