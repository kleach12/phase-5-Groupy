class UserSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :username, :dob, :email, :country, :state, :city
end
