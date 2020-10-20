module Api
  class PropertiesController < ApplicationController
    def index
      @properties = Property.order(created_at: :desc).page(params[:page]).per(6)
      unless @properties
        return render json: { error: 'not_found' }, status: :not_found
      end

      render 'api/properties/index', status: :ok
    end

    def show
      @property = Property.find_by(id: params[:id])
      unless @property
        return render json: { error: 'not_found' }, status: :not_found
      end

      render 'api/properties/show', status: :ok
    end
  end
end