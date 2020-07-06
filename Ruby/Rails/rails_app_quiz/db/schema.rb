# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_06_090724) do

  create_table "jobs", force: :cascade do |t|
    t.string "url"
    t.string "employer_name"
    t.string "employer_description"
    t.string "job_title"
    t.string "job_description"
    t.integer "year_of_experience"
    t.string "education_requirement"
    t.string "industry"
    t.integer "base_salary"
    t.integer "employment_type_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
