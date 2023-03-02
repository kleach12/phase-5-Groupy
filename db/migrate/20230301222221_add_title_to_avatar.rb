class AddTitleToAvatar < ActiveRecord::Migration[7.0]
  def change
    add_column :avatars, :title, :text
  end
end
