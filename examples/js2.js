const nav = document.querySelector(".nav");
nav.addEventListener('click', createNav);

function createNav() {
    const headers = { homeButton: 'Home', contactButton: 'Contact'};
    for (let header in headers) {
        let element = document.createElement('div');
        element.textContent = headers[header];
        element.classList.add('nav__button');
        nav.appendChild(element);
    }
}











let createNavWithDataObject = () => {
    const buttonNames = { home: 'Home', about: 'About', media: 'Press', contactUs: 'Contact' };
    for (let name in buttonNames) {
        let newButton = document.createElement('div');
        newButton.textContent = buttonNames[name];
        newButton.classList.add('nav__button');
        nav.appendChild(newButton);
    }
    nav.removeEventListener('click', createNavWithDataObject);
};
