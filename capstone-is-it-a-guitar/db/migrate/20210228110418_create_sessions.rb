class CreateSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :sessions do |t|
      t.belongs_to :user, index: true, foreign_key: true
      t.string :token
      t.timestamps
    end
  end
end
