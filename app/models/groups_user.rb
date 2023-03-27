class GroupsUser < ApplicationRecord
  validates :user_id, :
  belongs_to :user
  belongs_to :group_id
end
