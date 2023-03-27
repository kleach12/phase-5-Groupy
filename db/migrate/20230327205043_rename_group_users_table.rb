class RenameGroupUsersTable < ActiveRecord::Migration[7.0]
  def change
    rename_table :groups_users, :groupusers
  end
end
