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

    let introduction = document.createElement('p');
    introduction.classList.add('intro');
    introduction.textContent = "Hello and welcome to the Los Pollos hermanos family, my name is Gustavo but you can call me Gus I am thrilled that you'll be joining our team each and every day we serve our customers exceptional food with impeccable service we take pride in everything that we do and after this 10-week online seminar I am confident that you'll fit right in I like to think I see things in people to begin I'd like to talk about the cornerstone of the los Pollos hermanos brand:tm: communication as an employee of los Pollos hermanos you set the tone for the entire dining experience be mindful of what your words and behavior communicate to our guests always be aware of your posture remember to stand up straight your customers and your back will thank you for it put effort into your appearance all employees are required to dress appropriately keep your uniform clean and press if you want respect you must look respectable speak in complete sentences we never use one word greetings like hey or yeah always make eye contact and finally whether you're with the customer or not remain composed inside you can be thinking about your homework or your friends or your side business but no one should ever know it because at Los Pollos Hermanos someone is always watching don't forget to smile that's all for today see you next time when we'll be discussing cleanliness"
    subContainer.append(logo, introductionContainer);
    introductionContainer.append(gustavo,introduction)
}