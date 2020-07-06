# frozen_string_literal: true

Rails.application.routes.draw do
  get 'sessions/users'

  root 'homepage#index'

  # Add routes below this line

  # TASKS
  get    '/tasks'                    => 'tasks#index'
  post   '/tasks'                    => 'tasks#create'
  delete '/tasks/:id'                => 'tasks#destroy'
  put    '/tasks/:id/mark_complete'  => 'tasks#mark_complete'
  put    '/tasks/:id/mark_active'    => 'tasks#mark_active'
  get    '/my_tasks'                 => 'tasks#index_by_current_user'

  # USERS
  post   '/users'                    => 'users#create'

  # SESSIONS
  post   '/sessions'                 => 'sessions#create'
  get    '/authenticated'            => 'sessions#authenticated'
  delete '/sessions'                 => 'sessions#destroy'

  # Add routes below above line

  # Redirect all other paths to index page, which will be taken over by AngularJS
  get '*path'                        => 'homepage#index'
end
