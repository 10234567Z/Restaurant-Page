import './style.css';
import Logo from './Content/logo.png';
import Gustavo from './Content/gus.gif';
import { subContainer } from './index.js';

export default function components() {
    subContainer.innerHTML = '';
    let logo = new Image();
    logo.classList.add("logo");
    logo.src = Logo;
    logo.height = 250;
    logo.width = 250;

    let introductionContainer = document.createElement('div');
    introductionContainer.classList.add('introCont');

    let gustavo = new Image();
    gustavo.src = Gustavo;
    gustavo.classList.add("gusHome");
    gustavo.height = 300;
    gustavo.width = 500;

    let introduction = document.createElement('p');
    introduction.classList.add('intro');
    introduction.textContent = "Hello and welcome to the Los Pollos hermanos family, my name is Gustavo but you can call me Gus I am thrilled that you'll be joining our team each and every day we serve our customers exceptional food with impeccable service we take pride in everything that we do and after this 10-week online seminar I am confident that you'll fit right in"
    subContainer.append(logo, introductionContainer);
    introductionContainer.append(gustavo,introduction)
}