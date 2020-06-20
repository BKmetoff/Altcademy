# frozen_string_literal: true

class BooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    new_book = Book.create(
      name: params[:name],
      publishing_year: params[:publishing_year],
      num_of_pages: params[:num_of_pages]
    )

    render json: { book: new_book }
  end
end
