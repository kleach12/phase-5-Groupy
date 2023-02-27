class UserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :username, :dob, :email, :country, :state, :city, :profile_picture, :full_name

  def profile_picture
    rails.blob.path(object.profile_picture, only_path: true) if object.profile_picture.attached?
  end

  def full_name
    "#{object.first_name} #{object.last_name}"
  end
end
