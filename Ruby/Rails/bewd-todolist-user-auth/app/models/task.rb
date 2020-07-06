class Task < ApplicationRecord
  belongs_to :user

  validates :content, length: { maximum: 200 }, presence: true
end
