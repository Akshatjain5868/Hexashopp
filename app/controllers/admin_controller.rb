class AdminController < ApplicationController
  def login
    if request.post?
      if params[:username] == "admin" && params[:password] == "123"
        session[:admin] = "ADMIN"
        # redirect_to home_products_url
        redirect_to craft_stores_url

      else
        flash[:notice] = "Invalid Username or password"
        render :action=>:login
      end
    end
  end

  def logout
    session.delete(:admin)
    flash[:notice] = "Successfully Logged out"
    redirect_to :action=>:login
  end
end
