export const checkStatus = (response) => {
    if (response.ok) { return response; }
    throw new Error('bad request (404 / 500)')
}

export const json = (response) => response.json();

// export const currencyDataIterator = (currencyData) => {
    
//     return (
//         Object.entries(currencyData).map((currencyEntry) => {
//             const [ name, rate] = currencyEntry;
//             this.setState({currencyName: name, currencyRate: rate});
//             console.log(name, rate);
            
//           })
//     );
//   }