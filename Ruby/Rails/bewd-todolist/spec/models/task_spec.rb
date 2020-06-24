require 'rails_helper'

RSpec.describe 'Task', type: :model do
  describe '.new' do
    it 'should not return an error' do
      expect {
        Task.new
      }.not_to raise_error
    end
  end

  describe 'attributes' do
    it "should include 'content'" do
      task = Task.new

      expect {
        task.content
      }.not_to raise_error
    end

    it "should include 'completed'" do
      task = Task.new

      expect {
        task.completed
      }.not_to raise_error
    end
  end

  describe '.create' do
    it "requires the presence of 'content'" do
      expect {
        Task.create!(content: nil)
      }.to raise_error(ActiveRecord::RecordInvalid)
    end

    it "'content' should have max 200 chars" do
      task = Task.new

      expect {
        Task.create!(content: 'a' * 201)
      }.to raise_error(ActiveRecord::RecordInvalid)
    end
  end
end
