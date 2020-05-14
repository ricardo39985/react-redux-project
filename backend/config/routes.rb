# frozen_string_literal: true

Rails.application.routes.draw do
  resources :bugs
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get 'get_user', to: 'sessions#getCurrentUser'
  resources :users, except: [:index]
  resources :projects
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
