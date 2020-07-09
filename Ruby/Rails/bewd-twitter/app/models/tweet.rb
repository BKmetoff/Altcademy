# frozen_string_literal: true

class Tweet < ApplicationRecord
  validates :message, presence: true, length: { minimum: 1, maximum: 140 }
  # validates :user_id, presence: true
end
