class AddBioInstaFace < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :bio, :text
    add_column :users, :facebook, :text
    add_column :users, :insta, :text
    add_column :users, :twitter, :text
    add_column :users, :tiktok, :text
  end
end
