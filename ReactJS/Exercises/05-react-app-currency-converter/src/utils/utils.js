export const checkStatus = (response) => {
    if (response.ok) { return response; }
    throw new Error('bad request (404 / 500)')
}

export const json = (response) => response.json();

export const checkLoading = (stateIsLoading) => (!stateIsLoading) ? true : true

// single currency exchange
export const convertInputToOutput = (inputAmount, currencyRate) => {
    return Number(inputAmount * currencyRate).toFixed(2);
}

export const convertOutputToInput = (outputAmount, currencyRate) => {
    return Number(outputAmount *  (1 / currencyRate)).toFixed(2);
}


// add a background to the navigation links
// when visiting the corresponding page.
// much professional very wow 8-)
export const changeNavItemBackground = (pageName) => {

    let navItems = document.getElementsByClassName('sidebarListItem');

    if (pageName === 'currencies') {
        navItems[1].classList.add('currentPage')
        navItems[0].classList.remove('currentPage')
    } else if (pageName === 'converter') {
        navItems[0].classList.add('currentPage')
        navItems[1].classList.remove('currentPage')
    } else {
        navItems[0].classList.remove('currentPage')
        navItems[1].classList.remove('currentPage')
    }   
}

// update slogans in Sidebar
const navSlogans = [
    'If ya know what ya got, then ya ain\'t got much!',
    'Did you know this app is fully responsive?', 
    'Check out these box shadows!',
    'Check out these highlights in the sidebar!',
    'Xiao digs this project!',
    'This responsive sidebar is awe-inspiring!',
    'Presentation over function!',
    'Never until now have I been so much into currency exchange!'
];

const randomInt = Math.floor(Math.random() * navSlogans.length)
export const updateSlogan = ()  =>  navSlogans[randomInt]

// hide loading animation

export const hideLoading = () => {
    
    let spinners = document.getElementsByClassName('loadingSpinnerWrapper');
   
    return (
        Object.entries(spinners).forEach((spinner) => {
            spinner[1].classList.add('hidden')  
        })
    )
    
}

