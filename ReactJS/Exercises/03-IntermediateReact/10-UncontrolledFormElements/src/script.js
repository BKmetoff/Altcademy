// Uncontrolled form:
class UncontrolledForm extends React.Component {
  constructor (props) {
    super (props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.inputRef = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault()
    const formValue = this.inputRef.current.value;
    console.log(`thing: ${formValue}`);
  }


  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.inputRef} />
        </label>
        <input type="submit" value="submit"/>
      </form>
    );
  }
}


// ----------------------

// File input:

class FileForm extends React.Component {
  constructor (props) {
    super (props);

    this.fileRef = React.createRef();
    this.handleSubmitFile = this.handleSubmitFile.bind(this);
  }

  handleSubmitFile(event) {
    event.preventDefault();
    const file = this.fileRef.current.files[0].name
    console.log(`file name: ${file}`);
    console.log(this.fileRef.current.files);
  }

  render () {
    return (
      <form onSubmit={this.handleSubmitFile}>
        <label>
          File:
          <input type="file" ref={this.fileRef} />
        </label>
        <input type="submit" value="submit"/>
      </form>
    );
  }
}

ReactDOM.render(
  // <UncontrolledForm />,
  <FileForm />,
  document.getElementById('root')
)
