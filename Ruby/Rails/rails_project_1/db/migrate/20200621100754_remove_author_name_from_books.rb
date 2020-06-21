# frozen_string_literal: true

class RemoveAuthorNameFromBooks < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :athor_name, :string
  end
end
