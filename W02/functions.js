/*
* CREATE A FUNCTION LIKE THIS...
*/
function hello() {
    // console.log(`hello world`);
}
hello();

/*
* OR LIKE THIS
*/
const myName = (nameVar) => {
    console.log(`My name is ${nameVar}`);
}

myName('Max Bye');
myName('Lury Liberato');


const rollDice = (number) => number*2;



// console.log(rollDice(Math.floor(1 + Math.random() * 6)));
console.log(rollDice(2));
