require 'rails_helper'

RSpec.describe TasksController, type: :controller do
  render_views

  describe 'GET /tasks' do
    it 'renders all tasks in JSON' do
      task_1 = Task.create(content: 'Task #1')
      task_2 = Task.create(content: 'Task #2')

      get :index

      expected_response = {
        tasks: [
          {
            id: task_1.id,
            content: task_1.content,
            completed: task_1.completed,
            created_at: task_1.created_at
          }, {
            id: task_2.id,
            content: task_2.content,
            completed: task_2.completed,
            created_at: task_2.created_at
          }
        ]
      }

      expect(response.body).to eq(expected_response.to_json)
    end
  end

  describe 'POST /tasks' do
    it 'renders newly created task in JSON' do
      post :create, params: {
        task: {
          content: 'New Task'
        }
      }

      expect(Task.count).to eq(1)

      expect(response.body).to eq({
        task: {
          id: Task.first.id,
          content: 'New Task',
          completed: false,
          created_at: Task.first.created_at
        }
      }.to_json)
    end
  end

  describe 'DELETE /tasks/:id' do
    it 'renders success status' do
      task = Task.create(content: 'Task Example')

      delete :destroy, params: { id: task.id }

      expect(Task.count).to eq(0)
      expect(response.body).to eq({ success: true }.to_json)
    end
  end

  describe 'PUT /tasks/:id/mark_complete' do
    it 'renders modified task' do
      task = Task.create(content: 'Task Example')

      put :mark_complete, params: { id: task.id }

      expect(Task.where(completed: true).count).to eq(1)

      task.reload
      expect(response.body).to eq({
        task: {
          id: task.id,
          content: task.content,
          completed: true,
          created_at: task.created_at,
          updated_at: task.updated_at
        }
      }.to_json)
    end
  end

  describe 'PUT /tasks/:id/mark_active' do
    it 'renders modified task' do
      task = Task.create(content: 'Task Example', completed: true)

      put :mark_active, params: { id: task.id }

      expect(Task.where(completed: false).count).to eq(1)

      task.reload
      expect(response.body).to eq({
        task: {
          id: task.id,
          content: task.content,
          completed: false,
          created_at: task.created_at,
          updated_at: task.updated_at
        }
      }.to_json)
    end
  end
end
