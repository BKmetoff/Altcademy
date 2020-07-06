class TasksController < ApplicationController
  def index
    @tasks = Task.all
    render 'tasks/index' # can be omitted
  end

  def index_by_current_user
    token = cookies.signed[:todolist_session_token]
    session = Session.find_by(token: token)

    if session
      @tasks = session.user.tasks
      render 'tasks/index' # can be omitted
    else
      render json: { tasks: [] }
    end
  end

  def create
    token = cookies.signed[:todolist_session_token]
    session = Session.find_by(token: token)

    if session
      user = session.user
      @task = user.tasks.new(task_params)

      if @task.save
        render 'tasks/create' # can be omitted
      else
        render json: { success: false }
      end
    else
      render json: { success: false }
    end
  end

  def destroy
    @task = Task.find_by(id: params[:id])

    if @task and @task.destroy
      render json: { success: true }
    else
      render json: { success: false }
    end
  end

  def mark_complete
    @task = Task.find_by(id: params[:id])

    if @task and @task.update(completed: true)
      render 'tasks/update'
    end
  end

  def mark_active
    @task = Task.find_by(id: params[:id])

    if @task and @task.update(completed: false)
      render 'tasks/update'
    end
  end

  private

    def task_params
      params.require(:task).permit(:content)
    end
end
