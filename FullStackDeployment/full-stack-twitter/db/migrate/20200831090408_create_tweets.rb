# frozen_string_literal: true

class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t.string :message
      t.timestamps
      t.belongs_to :user, index: true, foreign_key: true
    end
  end
end
