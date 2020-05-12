# frozen_string_literal: true

Rails.application.routes.draw do
  resources :bugs
  get '/signup', to: 'users#new'
  post '/login', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy'
  get 'get_user', to: 'sessions#getCurrentUser'
  resources :users, except: [:index] do
    resources :projects
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
