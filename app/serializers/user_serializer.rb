class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes  :username, :email, :city, :bio, :facebook, :insta, :tiktok, :twitter, :image, :theme

  has_many :group_users
  has_many :groups
  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

  # def full_name
  #   "#{object.first_name} #{object.last_name}"
  # end
end
