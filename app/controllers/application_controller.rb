class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    # private
	
  	def current_cart
		Cart.find(session[:cart_id])
	    rescue ActiveRecord::RecordNotFound
		cart = Cart.create
		session[:cart_id] = cart.id
		cart
	end

	def cart_icon_current_user
		if current_user
		  @cart_icon_current_user = Cart.find(session[:cart_id])
		end
	end

end
