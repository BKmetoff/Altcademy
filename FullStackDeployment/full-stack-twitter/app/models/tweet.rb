# frozen_string_literal: true

class Tweet < ApplicationRecord
  validates :user_id, presence: true
  validates :message, presence: true, length: { minimum: 1, maximum: 140 }

  belongs_to :user
end
