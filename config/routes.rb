Rails.application.routes.draw do
  resources :products 
  get 'products/categories/:id', to: 'products#show_by_category', as: 'products_in_category'
  resources :categories, except: [:show]
  devise_for :users
  root 'pages#home'
  get 'about_us', to: 'pages#about'
  get 'terms', to: 'pages#terms'
  get 'privacy_policy', to: 'pages#privacy_policy'
  resources :pages, only: [:edit, :update]
  post 'tinymce_assets', to: 'tinymce_assets#create'
  resources :contact_forms, only: [:new, :create] 
  post "add_to_cart/:id", to: "cart#add_to_cart", as: "add_to_cart"
  patch "update_cart_quantity", to: "cart#update_quantity"
  delete "remove_from_cart/:id", to: "cart#remove_from_cart", as: "remove_from_cart"
  delete "remove_all_from_cart", to: "cart#remove_all_from_cart"
  resources :cart, only: [:index]
  post "checkout", to: "checkout#index"
  post "checkout/address", to: "checkout#create", as: "checkout_address"

end
