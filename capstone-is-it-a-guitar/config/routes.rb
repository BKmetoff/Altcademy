Rails.application.routes.draw do
  root to: 'static_pages#home'
  match '*path', to: 'static_pages#home', via: :all
end
