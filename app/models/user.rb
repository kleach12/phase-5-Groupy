class User < ApplicationRecord
  has_one_attached :image
  has_secure_password
  validates :first_name, :last_name, :username, :dob, :email, :city, :image, presence: true
  validates :username, uniqueness: true
  validates :email, uniqueness: true
  validates :username, length: {minimum: 1}
  validates :password, length: {minimum: 5}, on: :create #Smelly rails 
  validates :bio, length: {maximum: 250}
  validates :password, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" },on: :create
  validates :first_name, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  validates :last_name, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  validates :username, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }

  has_many :group_users
end
