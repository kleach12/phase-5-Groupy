class UserChatSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :message_id
end
