# frozen_string_literal: true

require 'rails_helper'

RSpec.describe BooksController, type: :controller do
  render_views

  describe 'POST /books' do
    it 'creates a new book object' do
      post :create, params: { name: 'Test book' }
      expect(Book.count).to eq(1)
    end

    it 'responds with a book object' do
      post :create, params: { name: 'Test book' }
      expected_response = {
        book: {
          name: 'Test book'
        }
      }

      expect(response.body).to eq(expected_response.to_json)
    end
  end
end
