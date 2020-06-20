# frozen_string_literal: true

class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :name
      t.string :publising_year
      t.integer :num_of_pages

      t.timestamps
    end
  end
end
