class UserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :username, :dob, :email, :country, :state, :city, :pro_pic, :full_name, :bio, :facebook, :insta, :tiktok, :twitter

  def pro_pic
    rails.blob.path(object.pro_pic, only_path: true) if object.pro_pic.attached?
  end

  def full_name
    "#{object.first_name} #{object.last_name}"
  end
end
