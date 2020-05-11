class CreateBugs < ActiveRecord::Migration[6.0]
  def change
    create_table :bugs do |t|
      t.belongs_to :project, null: false, foreign_key: true
      t.string :name
      t.string :severity
      t.string :details

      t.timestamps
    end
  end
end
