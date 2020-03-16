fetch ('https://www.omdbapi.com/?s=frozen&apikey=b7da8d63').then ((response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error ('request failed');
}).then ((data) => {
  console.log('success', data);
}).catch((error) => {
  console.log('error', error);
})
