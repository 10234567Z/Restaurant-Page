import './style.css';
import { subContainer } from './index.js';
import Food1 from './Content/food1.jpg';
import Food2 from './Content/food2.jpg';
import Food3 from './Content/food3.jpg';
import Food4 from './Content/food4.jpg';

export default function Component(){
    subContainer.innerHTML = '';
    let food1 = document.createElement('div');
    food1.classList.add('food' , '1');

    let food1Image = new Image();
    food1Image.src = Food1;
    food1Image.height = 250;
    food1Image.width = 250;
    food1Image.classList.add('foodImage' , '1');

    let food1Name = document.createElement('h3');
    food1Name.classList.add('foodName' , '1');
    food1Name.innerHTML = "Huevos Rancheros";

    let food1Price = document.createElement('p');
    food1Price.classList.add('foodPrice', '1');
    food1Price.innerHTML = "$5.49"
    food1.append(food1Image,food1Name,food1Price);




    let food2 = document.createElement('div');
    food2.classList.add('food' , '2');
    let food2Image = new Image();
    food2Image.src = Food2;
    food2Image.height = 250;
    food2Image.width = 250;
    food2Image.classList.add('foodImage' , '2');

    let food2Name = document.createElement('h3');
    food2Name.classList.add('foodName' , '2');
    food2Name.innerHTML = "Carne Adovada Rancheros";

    let food2Price = document.createElement('p');
    food2Price.classList.add('foodPrice', '2');
    food2Price.innerHTML = "$5.99"
    food2.append(food2Image,food2Name,food2Price);





    let food3 = document.createElement('div');
    food3.classList.add('food' , '3');
    let food3Image = new Image();
    food3Image.src = Food3;
    food3Image.height = 250;
    food3Image.width = 250;
    food3Image.classList.add('foodImage' , '3');

    let food3Name = document.createElement('h3');
    food3Name.classList.add('foodName' , '3');
    food3Name.innerHTML = "Taco Rancheros";

    let food3Price = document.createElement('p');
    food3Price.classList.add('foodPrice', '3');
    food3Price.innerHTML = "$5.99"
    food3.append(food3Image,food3Name,food3Price)



    let food4 = document.createElement('div');
    food4.classList.add('food' , '4');
    let food4Image = new Image();
    food4Image.src = Food4;
    food4Image.height = 250;
    food4Image.width = 250;
    food4Image.classList.add('foodImage' , '4');

    let food4Name = document.createElement('h3');
    food4Name.classList.add('foodName' , '4');
    food4Name.innerHTML = "Enchilada Rancheros";

    let food4Price = document.createElement('p');
    food4Price.classList.add('foodPrice', '4');
    food4Price.innerHTML = "$5.99"
    food4.append(food4Image,food4Name,food4Price)
    

    subContainer.append(food1,food2,food3,food4);
    
}