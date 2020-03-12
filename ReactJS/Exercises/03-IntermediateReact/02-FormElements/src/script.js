class SignUpForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = { email: '', password: '', bio: '', age: '<20', sub: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const { name, type } = event.target

    // handle checkbox
    let value;
    switch (type) {
      case 'checkbox':
        value = event.target.checked;
        break;
      default:
        value = event.target.value;
    }

    this.setState({ [name]: value })
  }

  handleSubmit (event) {
    event.preventDefault();
    const { email, password, bio, age, sub } = this.state;
    console.log(`submitted\nemail: ${email}\npassword: ${password}\nbio: ${bio}\nage: ${age}\nsub: ${sub}`);
  }

  render () {
    const { email, password, bio, age, sub } = this.state;

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
        <label>
          Bio:
          <textarea name="bio" value={bio} onChange={this.handleChange} />
        </label>
        <label>
          Age:
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="<20">20 or younger</option>
            <option value="21-30">21 to 30</option>
            <option value="31-40">31 to 40</option>
            <option value="41-50">41 to 50</option>
            <option value=">51">51 or older</option>
          </select>
        </label>
        <label>
          Sub checkbox:
          <input name="sub" type="checkbox" checked={sub} onChange={this.handleChange} />
        </label>
        <label>
          <input type="submit" value="submit" />
        </label>
      </form>
    )
  }
}



ReactDOM.render(
  <SignUpForm />,
  document.getElementById('root')
)
