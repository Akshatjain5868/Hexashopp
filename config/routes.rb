Rails.application.routes.draw do
  resources :line_items
  resources :carts

  get 'gallery/index'
  get 'gallery/checkout'
  post 'gallery/checkout'
  get 'gallery/purchase_complete'
  post 'gallery/search'
  get 'gallery/search'
  get 'gallery/show_individual'

  resources :craft_stores
  
  get 'admin/login'
  post 'admin/login'
  get 'admin/logout'

  get 'home/index'
  get 'home/about'
  get 'home/contact'
  # get 'home/products'
  # get 'home/single_product'

  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"
end
