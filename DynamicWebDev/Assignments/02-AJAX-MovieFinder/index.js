var httpRequest = new XMLHttpRequest();

httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var movies = JSON.parse(httpRequest.responseText);

      if (movies.Error) { displayError(); }
      else { displayResults(movies); }

    } else {
      console.log(httpRequest.statusText);
    }
  }
}

httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}

var searchMovie = function () {
  var input = $('#searchTitle').val();
  if (input !== '') {

    httpRequest.open('GET', 'https://www.omdbapi.com/?s=' + input + '&plot=short&apikey=b7da8d63');
    httpRequest.send(null);

    $('#searchTitle').val('')
    $('div #searchResults').remove();
  }
}

var displayError = function () {
  $('.container').append(
    '<div class="row" id="searchResults">' +
      '<div class="col-12 text-center">' +
        '<p id="noResults">No Results :(</p>' +
      '</div>' +
    '</div>'

  );
}

var displayResults = function (parsedJSON) {

  parsedJSON.Search.forEach((movie) => {

    var poster = '';
    if (movie.Poster === 'N/A') {
      poster = '<p id="noImageAvailable">No Image Available</p>'
    }
    else {
      poster = '<img id="poster" class="img-fluid" src="' + movie.Poster + '"/>'
    }

    $('.container').append(
      '<div class="row text-center align-items-center" id="searchResults">' +
        '<div class="col-6" id="movieDetails">' +
          '<h2>'+
            '<a href="https://www.imdb.com/title/' + movie.imdbID + '" id="title">' + movie.Title + '</a>' +
          '</h2>'+
          '<p id="year">' + movie.Year + '</p>' +
          '<p id="type">' + movie.Type + '</p>' +
        '</div>' +

        '<div class="col-6">' +
          poster +
        '</div>' +
      '</div>'
    )
  });
}
