class CreateUserChats < ActiveRecord::Migration[7.0]
  def change
    create_table :user_messages do |t|
      t.integer :user_id
      t.integer :message_id

      t.timestamps
    end
  end
end
