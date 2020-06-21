# frozen_string_literal: true

class DropWrongTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :table_books
  end
end
