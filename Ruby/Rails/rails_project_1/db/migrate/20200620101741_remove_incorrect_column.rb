# frozen_string_literal: true

class RemoveIncorrectColumn < ActiveRecord::Migration[5.2]
  def change
    drop_table :books
  end
end
