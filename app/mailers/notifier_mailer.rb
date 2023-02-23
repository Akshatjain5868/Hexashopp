class NotifierMailer < ApplicationMailer
    def order_notifier(credit_card)
        @name = credit_card.first_name 
        mail(to: "nancy@gmail.com", subject:"Order Details")
    end
end
