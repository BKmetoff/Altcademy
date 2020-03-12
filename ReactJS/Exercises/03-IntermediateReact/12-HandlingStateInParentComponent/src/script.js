class SimpleInput extends React.Component {
  render () {
    const { value, onChange } = this.props
    return <input name="name" value={value} onChange={onChange}/>
  }
}

class SimpleForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange (event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render () {
    const { name } = this.state;
    return <SimpleInput
      value={name}
      onChange={this.handleChange}
      />
  }
}

ReactDOM.render (
  <SimpleForm/>,
  document.getElementById('root')
)
