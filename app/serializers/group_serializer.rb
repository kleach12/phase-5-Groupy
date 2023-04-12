class GroupSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :name, :city, :group_pic, :id, :num_of_mem

  has_many :group_users
  has_many :users
  has_many :messages

  def group_pic
    rails_blob_path(object.group_pic, only_path: true) if object.group_pic.attached?
  end

  def num_of_mem
    object.group_users.length
  end

end
