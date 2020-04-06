export const checkStatus = (response) => {
    if (response.ok) { return response; }
    throw new Error('bad request (404 / 500)')
}

export const json = (response) => response.json();

export const equation = (base, rate) => Number(base * rate).toFixed(2);

// add a background to the navigation links
// when visiting the corresponding page.
// much professional very wow 8-)
export const changeNavItemBackground = (pageName) => {

    let navItems = document.getElementsByClassName('sidebarListItem');

    if (pageName === 'currencies') {
        navItems[1].classList.add('currentPage')
        navItems[0].classList.remove('currentPage')
    }
    else if (pageName === 'converter') {
        navItems[0].classList.add('currentPage')
        navItems[1].classList.remove('currentPage')
    }
    else {
        navItems[0].classList.remove('currentPage')
        navItems[1].classList.remove('currentPage')
    }   
}