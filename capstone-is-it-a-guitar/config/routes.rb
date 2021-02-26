Rails.application.routes.draw do
  root to: 'static_pages#home'

  namespace :api do
    resources :users, only: [:create]
  end

  match '*path', to: 'static_pages#home', via: :all
end
