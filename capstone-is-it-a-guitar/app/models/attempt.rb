class Attempt < ApplicationRecord
  belongs_to :user, required: true

  validates :image_url, presence: true
  validates :success, null: false
end
