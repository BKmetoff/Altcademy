require 'rails_helper'

RSpec.describe Tweet, type: :model do
  describe '.create' do
    it 'must belong to a user' do
      expect do
        Tweet.create!(message: 'test')
      end.to raise_error(ActiveRecord::RecordInvalid)
    end

    it 'must have the presence of message' do
      expect do
        FactoryBot.create(:tweet, message: nil)
      end.to raise_error(ActiveRecord::RecordInvalid)
    end

    it 'must have a message with max. 140 characters' do
      expect do
        FactoryBot.create(:tweet, message: 'c' * 141)
      end.to raise_error(ActiveRecord::RecordInvalid)
    end

    it 'can have an image' do
      user = FactoryBot.create(:user)
      tweet = FactoryBot.create(:tweet, user: user, message: 'ok', image: fixture_file_upload('files/test.png'))

      expect(tweet.reload.image.attached?).to eq(true)
    end
  end
end
