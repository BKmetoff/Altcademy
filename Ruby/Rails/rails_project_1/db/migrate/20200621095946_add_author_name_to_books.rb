# frozen_string_literal: true

class AddAuthorNameToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :author_name, :string
  end
end
