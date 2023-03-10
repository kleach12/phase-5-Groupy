class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :first_name, :last_name, :username, :dob, :email, :country, :state, :city, :full_name, :bio, :facebook, :insta, :tiktok, :twitter, :image

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

  def full_name
    "#{object.first_name} #{object.last_name}"
  end
end
