class Message < ApplicationRecord
  validates :comment, length: {minimum: 1}
  validates :group_id, :user_id, presence: true

  belongs_to :user
  belongs_to :group
end
