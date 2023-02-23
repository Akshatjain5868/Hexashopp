class GalleryController < ApplicationController
  require 'active_merchant'

# Use the TrustCommerce test servers
ActiveMerchant::Billing::Base.mode = :test


  def index
    @craft_gallery = CraftStore.all
    if current_user
      @name = current_user.email.split('@')[0].capitalize
    end
  end

  def checkout
    amount_to_charge = session[:amount].to_i
    if request.post?
      ActiveMerchant::Billing::Base.mode = :test
       
      credit_card = ActiveMerchant::Billing::CreditCard.new(
        :first_name         => params[:first_name],
        :last_name          => params[:last_name],
        :number             => params[:credit_no].to_i,
        :month              => params[:check][:month].to_i,
        :year               => params[:check][:year].to_i,
        :verification_value => params[:verification_number].to_i
      )
        
      if credit_card.valid?
        gateway =ActiveMerchant::Billing::TrustCommerceGateway.new(
          :login => 'TestMerchant',
          :password =>'password',
          :test => 'true' 
        )
        
        response = gateway.authorize(amount_to_charge , credit_card)
        #response = gateway.purchase(amount_to_charge, credit_card)    
        # puts response.inspect
        if response.success?
          gateway.capture(amount_to_charge, response.authorization)
          # UserNotifier.purchase_complete(session[:user],current_cart).deliver
          # flash[:notice] ="Authorized #{response.inspect} "

          NotifierMailer.order_notifier(credit_card).deliver
          session[:cart_id]=nil
          session[:amount]=nil
          redirect_to '/gallery/purchase_complete'
        else
          flash[:notice]= "Something went wrong.Try again"
          render :action => "checkout"
        end  
      end
    end
  end

  def search
    keyword = '%' + params[:keyword] + '%'
    @craft_gallery = CraftStore.find_by_sql ["Select * from craft_stores WHERE name like ? or description like ?",keyword,keyword]
  end
end
