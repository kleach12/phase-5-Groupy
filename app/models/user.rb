class User < ApplicationRecord
  has_secure_password
  has_one_attached :profile_picture
  validates :first_name, :last_name, :username, :dob, :email, :country, presence: true
  validates :username, uniqueness: true
  validates :email, uniqueness: true
  validates :username, length: {minimum: 1}
  validates :password, length: {minimum: 5}
  validates :password, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  validates :first_name, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  validates :last_name, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  validates :username, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }
  # validates :email, format: { with: /\A[A-Za-z0-9#@$%^&+=]+\z/, message: "only allows letters, numbers, and symbols #@$%^&+=" }

  validate :acceptable_image

  def acceptable_image
    return unless profile_picture.attached?
  
    unless profile_picture.blob.byte_size <= 1.megabyte
      errors.add(:profile_picture, "is too big")
    end
  
    acceptable_types = ["image/jpeg", "image/png"]
    unless acceptable_types.include?(profile_picture.content_type)
      errors.add(:profile_picture, "must be a JPEG or PNG")
    end
  end
end
