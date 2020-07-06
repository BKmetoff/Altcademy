# frozen_string_literal: true

class AddTokenToSessions < ActiveRecord::Migration[5.2]
  def change
    add_column :sessions, :token, :string
  end
end
