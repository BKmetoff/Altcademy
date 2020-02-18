var httpRequest = new XMLHttpRequest();

httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      // console.log(httpRequest.responseText);
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
    $('#searchResults').remove();
  }
}

var displayError = function () {
  $('.container').append(
    '<div class="row" id="searchResults">' +
      '<div class="col-12 text-center" id="resultsList">' +
        '<p class="border">No Results :(</p>' +
      '</div>' +
    '</div>'

  );
}

var displayResults = function (parsedJSON) {
  // console.log(parsedJSON.Search);

  parsedJSON.Search.forEach((movie) => {
    console.log(movie.Title);

    // var title
    // var year
    // var type
    // var posterURL

    $('.container').append(
      '<div class="row">' +
        '<div class"col-6">' +
        '<p id="title">' +
        '</p>' +
        '</div>' +

        '<div class"col-6">' +
          '<img id="poster"/>' +
        '</div>' +
      '</div>'
    )
  });



}
