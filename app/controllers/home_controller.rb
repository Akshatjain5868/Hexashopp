class HomeController < ApplicationController
  def index
    if current_user
      @name = current_user.email.split('@')[0].capitalize
    end
  end

  def about
    if current_user
      @name = current_user.email.split('@')[0].capitalize
    end
  end

  def contact
    if current_user
      @name = current_user.email.split('@')[0].capitalize
    end
  end

  def products
    if current_user
      @name = current_user.email.split('@')[0].capitalize
    end
  end

  def single_product
    if current_user
      @name = current_user.email.split('@')[0].capitalize
    end
  end


  # before_action:admin_logged_in?

  # def admin_logged_in
  #   if session[:admin].nil?
  #     flash[:notice] = "Log in first"
      # redirect_to admin_login_url
    # end
  # end
end
