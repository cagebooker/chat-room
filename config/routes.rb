Rails.application.routes.draw do
  resources :messages
  resources :rooms
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'rooms#index'
  mount ActionCable.server => '/cable'
end
