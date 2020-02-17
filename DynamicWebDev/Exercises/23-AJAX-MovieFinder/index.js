var httpRequest = new XMLHttpRequest();

httpRequest.onload = function() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
      var movies = JSON.parse(httpRequest.responseText);
      console.log(movies);



    } else {
      console.log(httpRequest.statusText);
    }
  }
}


httpRequest.onerror = function() {
  console.log(httpRequest.statusText);
}

httpRequest.open('GET', 'https://www.omdbapi.com/?s=' + 'frozen' + '&plot=short&apikey=b7da8d63');
httpRequest.send(null);
