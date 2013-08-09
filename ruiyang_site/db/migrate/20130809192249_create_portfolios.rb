class CreatePortfolios < ActiveRecord::Migration
  def change
    create_table :portfolios do |t|
      t.string :url
      t.string :name
      t.integer :deployed
      t.text :description
      t.integer :tech
      t.integer :order
      t.integer :status

      t.timestamps
    end
  end
end
