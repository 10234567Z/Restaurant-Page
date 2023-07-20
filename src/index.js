import './style.css';
import Logo from './Content/logo.png';
import homeComponent from "./home.js"
import menuComponent from "./menu.js"

let navBar = document.createElement('nav');
export let subContainer = document.createElement('div');
subContainer.classList.add('subContainer')

let homeLink = document.createElement('a')
homeLink.classList.add('home');
homeLink.href = '#home';
homeLink.innerHTML = "Home"

let menuLink = document.createElement('a');
menuLink.classList.add('menu')
menuLink.href = '#menu';
menuLink.innerHTML = "Menu"

let locLink = document.createElement('a');
locLink.classList.add('loc');
locLink.href = '#locations';
locLink.innerHTML = "Locations"

let aboutLink = document.createElement('a');
aboutLink.classList.add('about');
aboutLink.href = '#about';
aboutLink.innerHTML = "About"

let supportLink = document.createElement('a');
supportLink.classList.add('support');
supportLink.href = '#support';
supportLink.innerHTML = "Support"

let logo = new Image();
logo.src = Logo;
logo.height = 200;
logo.width = 200;
logo.classList.add('logo');
document.querySelector('.container').append(navBar,subContainer);
navBar.append(homeLink,menuLink,locLink,aboutLink,supportLink);
homeComponent();

homeLink.addEventListener('click', e => {
    homeComponent();
})
menuLink.addEventListener('click' , e => {
    menuComponent();
})