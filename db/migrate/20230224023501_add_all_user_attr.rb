class AddAllUserAttr < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :first_name, :text
    add_column :users, :last_name, :text
    add_column :users, :password_digest, :text
    add_column :users, :dob, :date
  end
end
