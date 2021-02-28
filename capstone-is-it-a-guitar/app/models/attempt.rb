class Attempt < ApplicationRecord
  belongs_to :user

  validates :image_url, presence: true
  validates :success, presence: true
end
