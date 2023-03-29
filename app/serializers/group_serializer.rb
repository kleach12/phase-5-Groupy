class GroupSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :name, :city, :group_pic, :id

  has_many :group_users
  # has_many :users

  def group_pic
    rails_blob_path(object.group_pic, only_path: true) if object.group_pic.attached?
  end

end
