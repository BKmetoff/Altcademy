// API key: b7da8d63

class MovieFinder extends React.Component {
  constructor (props) {
    super (props);
    this.state = { userInput: '', results: [], error: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState ({ userInput: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();

    let { userInput } = this.state;
    userInput = userInput.trim();

    if (!userInput) { return; }

    // fetch request:
    fetch (`https://www.omdbapi.com/?s=${userInput}&apikey=b7da8d63`)
      .then (checkStatus)
      .then (json)
      .then (data => {
        if (data.Response === 'False') {
          throw new Error (data.Error);
        }

        if (data.Response === 'True' && data.Search) {
          this.setState ({ results: data.Search, error: '' })
        }
      })
      .catch (error => {
        this.setState ({ error: error.message });
        console.log(error);
      })
  }

  render () {
    const { userInput, results, error } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.handleSubmit} className="form-inline">
              <input type="text" className="form-control" placeholder="search" value={userInput} onChange={this.handleChange} />
              <button type="submit" className="btn btn-outline-primary">Search</button>
            </form>
          </div>
        </div>

        {(() => {
          if (error) {
            return error;
          }
          // return list of movies
          return results.map ((movie) => {
            return <Movie key={movie.imdbID} movie={movie} />;
          })
        })()}

      </div>
    )
  }
}

const Movie = (props) => {
  const { Title, Year, imdbID, Type, Poster} = props.movie;

  return (
    <div className="row border-bottom pb-2 mb-2 pt-2 mt-1">
      <div className="col-4 col-md-3">
        <PosterCheck poster={Poster} imdbID={imdbID}/>
      </div>

      <div className="col-8 col-md-9">
        <a href={`https://www.imdb.com/title/${imdbID}/`} target="_blank">
          <h4>{Title}</h4>
          <p>{Type} | {Year}</p>
        </a>
      </div>
    </div>
  )
}

// handle missing posters
const PosterCheck = (props) => {
  if (props.poster === 'N/A') {
    return ( <p>No image available</p> )
  } else {
    return (
      <a href={`https://www.imdb.com/title/${props.imdbID}/`} target="_blank">
        <img src={props.poster} className="img-fluid" />
      </a>
    )
  }
}

const checkStatus = (response) => {
  if (response.ok) { return response; }
  throw new Error ('Unsuccessfull request')
}

const json = (response) => response.json();


ReactDOM.render ( <MovieFinder />, document.getElementById('root') )
