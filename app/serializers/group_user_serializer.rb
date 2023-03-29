class GroupUserSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :group_id

  belongs_to :user
  belongs_to :group
end
