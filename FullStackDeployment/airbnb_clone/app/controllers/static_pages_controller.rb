# frozen_string_literal: true

class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def property
    @data = { property_id: params[:id] }.to_json
    render 'property'
  end

  def booking
    @data = { booking_id: params[:id] }.to_json
    render 'booking'
  end

  def property_bookings
    @data = { property_id: params[:id] }.to_json
    render 'property_bookings'
  end

  def property_create
    render 'property_create'
  end

  def login
    render 'login'
  end

  def success
    @data = { booking_id: params[:id] }.to_json
    render 'success'
  end
end
