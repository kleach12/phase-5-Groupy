class AddMoreColumnsToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :email, :text
    add_column :users, :country, :text
    add_column :users, :state, :text
    add_column :users, :city, :text
  end
end
