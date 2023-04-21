class User < ApplicationRecord
  has_one_attached :image
  has_secure_password
  validates :username, :city, presence: true
  validates :username, uniqueness: true
  # validates :email, uniqueness: true
  validates :username, length: {in: 1..15}
  validates :password, length: {minimum: 5}, on: :create #Smelly rails 
  validates :bio, length: {maximum: 250}
  validates :password, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" },on: :create
  # validates :first_name, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  # validates :last_name, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  validates :username, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  validates :twitter, format: { with: /\A(https?:\/\/)?(www\.)?twitter\.com\/\w+\/?\z/im, message: "must be a valid Twitter link" },allow_blank: true
  validates :tiktok, format: { with: /\A(https?:\/\/)?(www\.)?tiktok\.com\/@?\w+\/?\z/im, message: "must be a valid TikTok link" },allow_blank: true
  validates :insta, format: { with:  /\A(https?:\/\/)?(www\.)?instagram\.com\/\w+\/?\z/im, message: "must be a valid Instagram link" },allow_blank: true
  validates :facebook, format: { with: /\A(https?:\/\/)?(www\.)?facebook\.com\/\w+\/?\z/im, message: "must be a valid Facebook link" },allow_blank: true

  has_many :group_users, dependent: :destroy
  has_many :groups, through: :group_users
  has_many :message, dependent: :destroy
end
