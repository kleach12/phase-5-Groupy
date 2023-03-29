class CreateGroupUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :groupusers do |t|
      t.integer :user_id
      t.integer :group_id

      t.timestamps
    end
  end
end
