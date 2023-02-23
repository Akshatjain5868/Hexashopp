class CreateCraftStores < ActiveRecord::Migration[6.1]
  def change
    create_table :craft_stores do |t|
      t.string :name
      t.text :description
      t.float :price

      t.timestamps
    end
  end
end
