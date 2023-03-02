class User < ApplicationRecord
  has_one_attached :image
  has_secure_password
  validates :first_name, :last_name, :username, :dob, :email, :country, presence: true
  validates :username, uniqueness: true
  validates :email, uniqueness: true
  validates :username, length: {minimum: 1}
  validates :password, length: {minimum: 5}
  validates :bio, length: {maximum: 250}
  validates :password, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  validates :first_name, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  validates :last_name, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  validates :username, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  # validates :email, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }

  # validate :acceptable_image

#   def acceptable_image
#     return unless pro_pic.attached?
  
#     unless profile_picture.blob.byte_size <= 1.megabyte
#       errors.add(:pro_pic, "is too big")
#     end
  
#     acceptable_types = ["image/jpeg", "image/png"]
#     unless acceptable_types.include?(profile_picture.content_type)
#       errors.add(:pro_pic, "must be a JPEG or PNG")
#     end
#   end
end
