# frozen_string_literal: true

class AddUserIdToSessions < ActiveRecord::Migration[5.2]
  def change
    add_belongs_to :sessions, :user, index: true, foreign_key: true
  end
end
