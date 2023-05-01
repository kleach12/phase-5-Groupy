Rails.application.routes.draw do

  mount ActionCable.server => '/cable'

  namespace :api do 


    resources :user_chats
    resources :messages
    resources :group_users,:only => [:index, :create]
    resources :groups
    # resources :avatars
    resources :users, :only => [:index, :create, :show]
    put "/users", to: "users#update"
    patch "/users", to: "users#update"
    # put "/user/:username", to: "users#update_profile"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "users#show"
    post "/users/avatar", to: "users#add_avatar"
    get "/filtered_groups", to: "groups#user_group_search"
    get "/filtered_groups/:username", to: "groups#user_group_search_practice"
    get "/group_messages/:group_id", to: "messages#group_messages"
    delete "/delete_user", to: "users#destroy"
    delete "/delete_group_user/:group_id", to: "group_users#destroy"
    get "/viewing_user/:username", to: "users#viewing_user"
    # get '*path', to: 'react_app#index'
    # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    # Defines the root path route ("/")
    # root "articles#index"
  end

  get "*path", to: "react_app#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
