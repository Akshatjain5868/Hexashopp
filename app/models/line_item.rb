class LineItem < ApplicationRecord
	belongs_to :craft_store

	belongs_to :cart
  	
	def total_price
		craft_store.price * quantity
	end
end
