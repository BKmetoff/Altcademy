# frozen_string_literal: true

class AddUserIdToTweets < ActiveRecord::Migration[5.2]
  def change
    add_belongs_to :tweets, :user, index: true, foreign_key: true
  end
end
