var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://www.omdbapi.com/?t=frozen&apikey=b7da8d63', true);
httpRequest.send(null);

httpRequest.onload = function () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    }
    else {
      console.log(httpRequest.statusText);
    }
  }
}

httpRequest.onerror = function () {
  console.log(httpRequest,statusText);
}
