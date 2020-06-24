# frozen_string_literal: true

class TasksController < ApplicationController
  def index
    @tasks = Task.all
    render 'tasks/index'
  end

  def create
    @task = Task.new(task_params)
    render 'tasks/create' if @task.save
  end

  def destroy
    @task = Task.find_by(id: params[:id])

    if @task&.destroy
      render json: { success: true }
    else
      render json: { success: false }
    end
  end

  def mark_complete
    @task = Task.find_by(id: params[:id])
    render 'tasks/mark_complete' if @task&.update(completed: true)
  end

  def mark_active
    @task = Task.find_by(id: params[:id])
    render 'tasks/mark_active' if @task&.update(completed: false)
  end

  private

  def task_params
    params.require(:task).permit(:content)
  end
end
