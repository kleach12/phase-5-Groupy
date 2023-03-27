class Group < ApplicationRecord
  has_one_attached :group_pic
  validates :name, :city, :group_pic, :admin_id, presence: true
  validates :name, uniqueness: true
  validates :city, length: {minimum:1}

  # has_many :groupusers
  # has_many :users, through: :groupsusers

  
end
