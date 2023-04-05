class DropUserMessagesTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :user_messages
  end
end
