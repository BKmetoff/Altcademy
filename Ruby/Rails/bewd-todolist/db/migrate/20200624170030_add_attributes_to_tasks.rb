# frozen_string_literal: true

class AddAttributesToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :content, :string
    add_column :tasks, :completed, :boolean, default: false
  end
end
