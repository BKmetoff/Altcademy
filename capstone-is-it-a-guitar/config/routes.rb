Rails.application.routes.draw do
  root to: 'static_pages#home'

  namespace :api do
    resources :users, only: [:create]
    resources :sessions, only: %i[create destroy]
    resources :attempts, only: %i[create index]

    get '/authenticated' => 'sessions#authenticated'
    get '/attempts/user' => 'attempts#show_per_user'
  end

  match '*path', to: 'static_pages#home', via: :all
end
