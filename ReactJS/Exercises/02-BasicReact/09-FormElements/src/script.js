class LoginForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = { email: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit (event) {
    event.preventDefault();
    const { email, password } = this.state;
    console.log(`submitted\nemail: ${email}\npassword: ${password}`);
  }

  render () {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={this.handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

ReactDOM.render(
  <LoginForm />,
  document.getElementById('root')
)
