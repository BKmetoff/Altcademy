// API key: 104

const checkStatus = (response) => {
  if (response.ok) {
    return response
  }
  throw new Error ('Request failed')
}

const json = (response) => response.json();

class ToDoList extends React.Component {
  constructor (props) {
    super (props);
    this.state = {new_task: '', tasks: [], filter: 'all' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchTasks = this.fetchTasks.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleComplete = this.toggleComplete.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  // get all tasks on load
  componentDidMount () { this.fetchTasks(); }

  // generic GET request
  fetchTasks () {
    fetch ("https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=104")
      .then (checkStatus)
      .then (json)
      .then ((response) => {
        this.setState ({tasks: response.tasks})
      })
      .catch (error => {
        console.error(error.message);
      })
  }

  // udpate input
  handleChange (event) {
    this.setState ({ new_task: event.target.value });
  }

  // add new task
  handleSubmit (event) {
    event.preventDefault();

    let { new_task } = this.state;
    new_task = new_task.trim();
    if (!new_task) { return; }

    fetch ("https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=104", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify ({
        task: {
          content: new_task
        }
      })
    }).then (checkStatus)
      .then (json)
      .then ((data) => {
        this.setState ({new_task: ''});
        this.fetchTasks();
        console.log('task ' + data.task.id + ' was created');
      })
      .catch((error) => {
        this.setState ({ error: error.message });
        console.log(error);
      })
  }

  deleteTask (id) {
    if (!id) { return; }

    fetch (`https://altcademy-to-do-list-api.herokuapp.com/tasks/${id}?api_key=104`, {
      method: "DELETE",
      mode: "cors",
    })
    .then (checkStatus)
    .then (json)
    .then ((data) => {
      this.fetchTasks(); // render all tasks after deletion
      console.log(`task ${id} was deleted`);
    })
    .catch ((error) => {
      this.setState ({ error: error.message });
      console.log(error);
    })
  }

  // mark complete/incomplete
  toggleComplete (id, completed) {
    if (!id) { return ;}

    const newState = completed ? 'active' : 'complete';

    fetch (`https://altcademy-to-do-list-api.herokuapp.com/tasks/${id}/mark_${newState}?api_key=104`, {
      method: "PUT",
      mode: "cors"
    })
    .then (checkStatus)
    .then (json)
    .then ((data) => {
      this.fetchTasks();
      console.log(`task ${id} marked as ${newState}`);
    })
    .catch ((error) => {
      this.setState ({ error: error.message })
      console.log(error);
    })
  }

  // task state filter
  toggleFilter (e) {
    console.log(e.target.name);
    this.setState ({ filter: e.target.name})
  }

  render () {
    const {new_task, tasks, filter } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>To Do List</h2>

            {/* add task */}
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="What's next?"
                value={new_task}
                onChange={this.handleChange}
              />
              <div className="input-group-append" onClick={this.handleSubmit}>
                <button className="btn btn-outline-primary" type="submit">
                  Save
                </button>
              </div>
            </div>

            {/* task state filter */}
            <div className="state-filter">
              <label>
                <input
                  type="checkbox"
                  name="all"
                  checked={filter === 'all'}
                  onChange={this.toggleFilter}
                /> All
              </label>
              <label>
                <input
                  type="checkbox"
                  name="active"
                  checked={filter === 'active'}
                  onChange={this.toggleFilter}
                /> Active
              </label>
              <label>
                <input
                  type="checkbox"
                  name="completed"
                  checked={filter === 'completed'}
                  onChange={this.toggleFilter}
                /> Completed
              </label>
            </div>

            {/* list tasks */}
            {tasks.length > 0 ? tasks.filter(task => {
              if (filter === 'all') { return true; }
              else if (filter === 'active') { return !task.completed; }
              else { return task.completed; }
            }).map ((task) => {
              return (<Task
                key={task.id}
                task={task}
                onDelete={this.deleteTask}
                onComplete={this.toggleComplete}
              />);
            }) : <p>No items</p>}

          </div>
        </div>
      </div>
    )
  }
}

class Task extends React.Component {
  render () {
    const { task, onDelete, onComplete} = this.props;
    const { id, content, completed } = task;

    return (
      <div className="row">
        <p className="col">{content}</p>
        <div className="btn-group-toggle" data-toggle="buttons">
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete(id)}>
            Delete
          </button>

          <input
          className="d-inline-block"
            type="checkbox"
            onChange={() => onComplete(id, completed)}
            checked={completed}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render (
  <ToDoList />,
  document.getElementById('root')
);
