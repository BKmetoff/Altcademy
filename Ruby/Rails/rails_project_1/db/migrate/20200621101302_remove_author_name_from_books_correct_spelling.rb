# frozen_string_literal: true

class RemoveAuthorNameFromBooksCorrectSpelling < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :author_name, :string
  end
end
