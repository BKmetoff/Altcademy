export const checkStatus = (response) => {
    if (response.ok) { return response; }
    throw new Error('bad request (404 / 500)')
}

export const json = (response) => response.json();

export const equation = (base, rate) => Number(base * rate).toFixed(4);