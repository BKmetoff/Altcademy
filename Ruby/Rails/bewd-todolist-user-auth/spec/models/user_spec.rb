require 'rails_helper'

RSpec.describe User, type: :model do
  describe '.create' do
    it 'should have many sessions' do
      user = FactoryBot.create(:user)
      expect(user.sessions).to eq([])
    end

    it 'should have many tasks' do
      user = FactoryBot.create(:user)
      expect(user.tasks).to eq([])
    end

    it 'must have the presence of username' do
      expect {
        FactoryBot.create(:user, username: nil)
      }.to raise_error(ActiveRecord::RecordInvalid)
    end

    it 'must have the presence of password' do
      expect {
        FactoryBot.create(:user, password: nil)
      }.to raise_error(ActiveRecord::RecordInvalid)
    end

    it 'must have a username with min. 3 characters' do
      expect {
        FactoryBot.create(:user, username: 'c' * 2)
      }.to raise_error(ActiveRecord::RecordInvalid)
    end

    it 'must have a username with max. 64 characters' do
      expect {
        FactoryBot.create(:user, username: 'c' * 65)
      }.to raise_error(ActiveRecord::RecordInvalid)
    end

    it 'must have a password with min. 8 characters' do
      expect {
        FactoryBot.create(:user, password: 'c' * 7)
      }.to raise_error(ActiveRecord::RecordInvalid)
    end

    it 'must have a password with max. 64 characters' do
      expect {
        FactoryBot.create(:user, password: 'c' * 65)
      }.to raise_error(ActiveRecord::RecordInvalid)
    end

    it 'must have a unique username' do
      FactoryBot.create(:user, username: '12345678')

      expect {
        FactoryBot.create(:user, username: '12345678')
      }.to raise_error(ActiveRecord::RecordInvalid)
    end

    # it 'enforces username uniqueness in DB-level' do
    #   ActiveRecord::Base.connection.execute "INSERT INTO users (username, created_at, updated_at) VALUES ('example', current_timestamp, current_timestamp);"
    #
    #   expect {
    #     ActiveRecord::Base.connection.execute "INSERT INTO users (username, created_at, updated_at) VALUES ('example', current_timestamp, current_timestamp);"
    #   }.to raise_error(ActiveRecord::RecordNotUnique)
    # end
  end
end
