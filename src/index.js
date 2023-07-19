import './style.css';
import Logo from './Content/logo.png';

let navBar = document.createElement('nav');

let homeLink = document.createElement('a')
homeLink.href = '#';
homeLink.innerHTML = "Home"

let menuLink = document.createElement('a')
menuLink.href = '#';
menuLink.innerHTML = "Menu"

let locLink = document.createElement('a')
locLink.href = '#';
locLink.innerHTML = "Locations"

let aboutLink = document.createElement('a')
aboutLink.href = '#';
aboutLink.innerHTML = "About"

let supportLink = document.createElement('a')
supportLink.href = '#';
supportLink.innerHTML = "Support"

let logo = new Image();
logo.src = Logo;
logo.height = 200;
logo.width = 200;
logo.classList.add('logo');
document.querySelector('.container').append(navBar,logo);
navBar.append(homeLink,menuLink,locLink,aboutLink,supportLink);