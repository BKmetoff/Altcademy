# frozen_string_literal: true

class BooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @book = Book.create(
      name: params[:name],
      publishing_year: params[:publishing_year],
      num_of_pages: params[:num_of_pages]
    )

    render 'books/create.jbuilder'
  end
end
