class CreateAttempts < ActiveRecord::Migration[6.0]
  def change
    create_table :attempts do |t|

      t.belongs_to :user, index: true, foreign_key: true
      t.string :image_url
      t.boolean :success
      t.timestamps
    end
  end
end
