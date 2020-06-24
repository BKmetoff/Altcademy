# ToDo List

Visit [Altcademy Classroom](https://www.altcademy.com/classroom/) for more instructions.

## Specifications

### Tables / Model

Tasks

    Attributes
    content: format is string
    completed: format is boolean; default value is false
    timestamps: format is datetime
    Validations
    content: must be present; maximum 200 characters

### API Endpoints

GET /tasks

    Controller: tasks
    Action: index
    Description: return all tasks from database


POST /tasks

    Controller: tasks
    Action: create
    Description: create a new task based on given parameters
    Parameter: accept task object with content (i.e. { task: { content: "Hello"} })


DELETE /tasks/:id

    Controller: tasks
    Action: destroy
    Description: delete a task identified by its object id
    Parameter: accept task object id (i.e. /tasks/101234)


PUT /tasks/:id/mark_complete

    Controller: tasks
    Action: mark_complete
    Description: update a task to change completed to true
    Parameter: accept task object id (i.e. /tasks/101234/mark_complete)


PUT /tasks/:id/mark_active

    Controller: tasks
    Action: mark_active
    Description: update a task to change completed to false
    Parameter: accept task object id (i.e. /tasks/101234/mark_active)
