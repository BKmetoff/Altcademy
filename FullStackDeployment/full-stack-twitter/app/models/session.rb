# frozen_string_literal: true

class Session < ApplicationRecord
  validates :user_id, presence: true
  
  belongs_to :user

  #  generate token before validations
end
