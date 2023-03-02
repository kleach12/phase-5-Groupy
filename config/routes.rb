Rails.application.routes.draw do
  resources :avatars
  resources :users
  put "/user/:username", to: "users#update_profile"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
  post "/users/avatar", to: "users#add_avatar"
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
