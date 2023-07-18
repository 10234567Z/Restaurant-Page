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

// let logo = document.querySelector('img');
// logo.src = "Content/logo.png";
// logo.height = "200px";
// logo.width = "200px"
document.querySelector('.container').append(navBar);
navBar.append(homeLink,menuLink,locLink,aboutLink,supportLink);