# frozen_string_literal: true

module Api
  class TasksController < ApplicationController
    skip_before_action :verify_authenticity_token

    before_action :validate_user

    def show
      user = User.find_by(id: params[:api_key])
      @task = user.tasks.find_by(id: params[:id])

      return render 'not_found', status: :not_found unless @task

      render 'show', status: :ok
    end

    def index
      user = User.find_by(id: params[:api_key])
      @tasks = if params[:completed].present?
                 user.tasks.where(completed: parse_boolean(params[:completed]))
               else
                 user.tasks.all
               end

      render 'index', status: :ok
    end

    def create
      user = User.find_by(id: params[:api_key])
      @task = user.tasks.new(task_params)

      return render 'bad_request', status: :bad_request unless @task.save

      render 'show', status: :ok
    end

    def destroy
      user = User.find_by(id: params[:api_key])
      @task = user.tasks.find_by(id: params[:id])

      return render 'not_found', status: :not_found unless @task
      return render 'bad_request', status: :bad_request unless @task.destroy

      render json: { success: true }, status: :ok
    end

    def update
      user = User.find_by(id: params[:api_key])
      @task = user.tasks.find_by(id: params[:id])

      return render 'not_found', status: :not_found unless @task
      return render 'bad_request', status: :bad_request unless @task.update(task_params)

      render 'show', status: :ok
    end

    def mark_complete
      user = User.find_by(id: params[:api_key])
      @task = user.tasks.find_by(id: params[:id])

      return render 'not_found', status: :not_found unless @task
      return render 'bad_request', status: :bad_request unless @task.update(completed: true)

      render 'show', status: :ok
    end

    def mark_active
      user = User.find_by(id: params[:api_key])
      @task = user.tasks.find_by(id: params[:id])

      return render 'not_found', status: :not_found unless @task
      return render 'bad_request', status: :bad_request unless @task.update(completed: false)

      render 'show', status: :ok
    end

    private

    def task_params
      params.require(:task).permit(:content, :due, :completed)
    end

    def validate_user
      user = User.find_by(id: params[:api_key])
      unless user
        return render json: {
          status: '401',
          title: 'Unauthorized User',
          detail: 'User is not found.'
        }, status: :unauthorized
      end

      if user
        true
      else
        false
      end
    end

    def parse_boolean(input_string)
      ActiveRecord::Type::Boolean.new.deserialize(input_string)
    end
  end
end
