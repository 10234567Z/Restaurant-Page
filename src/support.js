import './style.css';
import { subContainer } from './index.js';

export default function Component(){
    subContainer.innerHTML = '';
    let header = document.createElement('h1');
    header.classList.add('helpHead');
    header.innerHTML = "Get help from the following:"
    let optionsDiv = document.createElement('div');
    optionsDiv.classList.add('helpOptions');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    address.innerHTML = "Address: 3828 Piermont Dr, Albuquerque, NM";
    phone.innerHTML = "Phone: 505-842-5662";
    email.innerHTML = "Email: bluepollos@hermanos.com";
    optionsDiv.append(address,phone,email);
    subContainer.append(header,optionsDiv);
}