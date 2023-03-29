class DropJoinTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :groupusers
  end
end
