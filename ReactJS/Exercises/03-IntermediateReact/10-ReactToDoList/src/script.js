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
    this.state = {new_task: '', tasks: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState ({ new_task: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();
  }

  componentDidMount () {
    fetch ("https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=104")
      .then (checkStatus)
      .then (json)
      .then ((response) => {
        console.log(response);
        this.setState ({tasks: response.tasks})
      })
      .catch (error => {
        console.error(error.message);
      })
  }

  render () {
    const {new_task, tasks } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>To Do List</h2>

            {tasks.length > 0 ? tasks.map ((task) => {
              return <Task key={task.id} task={task} />;
            }) : <p>No items</p>}

            <form onSubmit={this.handleSubmit} className="form-inline">
              <input
                type="text"
                className="form-contol"
                placeholder="What's next?"
                value={new_task}
                onChange={this.handleChange}
              />
              <button type="submit" className="btn btn-sm btn-outline-primary">Save</button>
            </form>

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
      <div className="row pb-2 border-bottom mb-1 mt-2">
        <p className="col">{content}</p>
        <div className="btn-group-toggle" data-toggle="buttons">
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => onDelete(id)}>
          Delete
        </button>
          <label className="btn btn-info btn-sm active">
            <input
              type="checkbox"
              onChange={() => onComplete(id, completed)}
              checked={completed}/ >
          </label>
        </div>

      </div>
    )
  }
}

ReactDOM.render (
  <ToDoList />,
  document.getElementById('root')
);
