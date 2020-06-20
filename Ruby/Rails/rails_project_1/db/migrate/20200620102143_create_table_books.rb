# frozen_string_literal: true

class CreateTableBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :table_books do |t|
      t.string :name
      t.string :publishing_year
      t.integer :num_of_pages

      t.timestamps
    end
  end
end
