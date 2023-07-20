import './style.css';
import Logo from './Content/logo.png';
import homeComponent from "./home.js"
import menuComponent from "./menu.js"
import supportComponent from "./support.js"

let container = document.createElement("div");
container.classList.add('container');
document.querySelector('body').appendChild(container);

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

let supportLink = document.createElement('a');
supportLink.classList.add('support');
supportLink.href = '#support';
supportLink.innerHTML = "Support"

let logo = new Image();
logo.src = Logo;
logo.height = 200;
logo.width = 200;
logo.classList.add('logo');
container.append(navBar,subContainer);
navBar.append(homeLink,menuLink,supportLink);
homeComponent();
homeLink.style.backgroundColor ="#2F6000";

homeLink.addEventListener('click', e => {
    homeComponent();
    homeLink.style.backgroundColor = "#2F6000";
    menuLink.style.backgroundColor = "#adff2f";
    supportLink.style.backgroundColor = "#adff2f";
})
menuLink.addEventListener('click' , e => {
    menuComponent();
    homeLink.style.backgroundColor = "#adff2f";
    menuLink.style.backgroundColor = "#2F6000";
    supportLink.style.backgroundColor = "#adff2f";
})

supportLink.addEventListener('click' , e =>{
    supportComponent();
    homeLink.style.backgroundColor = "#adff2f";
    menuLink.style.backgroundColor = "#adff2f";
    supportLink.style.backgroundColor = "#2F6000";
})