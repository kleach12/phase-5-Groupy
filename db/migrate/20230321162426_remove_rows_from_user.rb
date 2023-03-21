class RemoveRowsFromUser < ActiveRecord::Migration[7.0]
  def change
    remove_column :groups, :country
    remove_column :groups, :state
    remove_column :users, :country
    remove_column :users, :state
    remove_column :users, :profile_picture
  end
end
