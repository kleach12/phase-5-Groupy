class GroupSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :name, :city, :group_pic

  def group_pic
    rails_blob_path(object.group_pic, only_path: true) if object.group_pic.attached?
  end

end
