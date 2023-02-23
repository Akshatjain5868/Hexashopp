json.extract! craft_store, :id, :name, :description, :price, :created_at, :updated_at
json.url craft_store_url(craft_store, format: :json)
