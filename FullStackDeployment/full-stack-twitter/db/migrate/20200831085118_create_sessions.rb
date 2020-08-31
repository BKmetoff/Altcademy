# frozen_string_literal: true

class CreateSessions < ActiveRecord::Migration[5.2]
  def change
    create_table :sessions do |t|
      t.string :token
      t.timestamps
      t.belongs_to :user, index: true, foreign_key: true
    end
  end
end
