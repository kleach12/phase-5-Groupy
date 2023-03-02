class AddUserIdToAvatar < ActiveRecord::Migration[7.0]
  def change
    add_column :avatars, :user_id, :integer
  end
end
