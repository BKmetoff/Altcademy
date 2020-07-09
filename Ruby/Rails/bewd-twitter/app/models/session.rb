# frozen_string_literal: true

class Session < ApplicationRecord
  before_validation :generate_session_token

  private

  def generate_session_token
    self.token = SecureRandom.urlsafe_base64
  end
end
