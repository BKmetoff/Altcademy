class StaticController < ApplicationController
  def home
    render json: {
      status: 'works!'
    }
  end
end