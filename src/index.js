import './style.css';
import Logo from './Content/logo.png';
import homeComponent from "./home.js"

let navBar = document.createElement('nav');
export let subContainer = document.createElement('div');
subContainer.classList.add('subContainer')

let homeLink = document.createElement('a')
homeLink.classList.add('home');
homeLink.href = '#';
homeLink.innerHTML = "Home"

let menuLink = document.createElement('a');
menuLink.classList.add('menu')
menuLink.href = '#';
menuLink.innerHTML = "Menu"

let locLink = document.createElement('a');
locLink.classList.add('loc');
locLink.href = '#';
locLink.innerHTML = "Locations"

let aboutLink = document.createElement('a');
aboutLink.classList.add('about');
aboutLink.href = '#';
aboutLink.innerHTML = "About"

let supportLink = document.createElement('a');
supportLink.classList.add('support');
supportLink.href = '#';
supportLink.innerHTML = "Support"

let logo = new Image();
logo.src = Logo;
logo.height = 200;
logo.width = 200;
logo.classList.add('logo');
document.querySelector('.container').append(navBar,subContainer);
navBar.append(homeLink,menuLink,locLink,aboutLink,supportLink);
homeComponent();