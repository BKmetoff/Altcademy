# frozen_string_literal: true

class AddAttributesToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string
    add_column :users, :password, :string
  end
end
