class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string :language
      t.string :experience
      t.string :url
      t.string :img

      t.timestamps
    end
  end
end
