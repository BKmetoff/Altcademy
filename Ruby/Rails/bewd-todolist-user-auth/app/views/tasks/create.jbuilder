json.task do
  json.id         @task.id
  json.content    @task.content
  json.completed  @task.completed
  json.created_at @task.created_at
end
