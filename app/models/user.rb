class User < ApplicationRecord
  has_secure_password
  validates :first_name, :last_name, :username, :dob, presence: true
  validates :username, uniqueness: true
  validates :username, length: {minimum: 5}
  validates :password, length: {minimum: 5}
  validates :password, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  validates :first_name, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  validates :last_name, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  validates :username, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  # validates :first_name, presence: true
  # validates :first_name, presence: true
end
