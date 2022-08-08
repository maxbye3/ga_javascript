/*
* OBJECT LITERAL
*/
const monkey = {};

const introductionMonkey = (name, species, food) => {
    console.log(`hello ${name}, you are ${species} and you eat ${food}`);
}

monkey.name = 'peter parker';
monkey.species = 'spider';
monkey.age = 42
monkey.foods = ['banana'];
monkey.eatSomething = (food) => {
    console.log(`food eaten ${food}`);
};
monkey.introduction = introductionMonkey;

// console.log(monkey.introduction(monkey.name, monkey.species, monkey.foods[0]));

/*
* CONSTRUCTOR FUNCTION
*/
function Monkey(name, age, species, foods, introduction){
    this.name = name;
    this.species = species;
    this.foods = foods;
    this.age = age || 2;
    this.howl = "Oooooo";
    this.eatSomething = (food) => {
        console.log(`food eaten ${food}`);
    }
    this.introduction = introduction;
}

const helloHowler = () => {
    console.log('hello howler');
}

Monkey.prototype.gender = 'male';

const spider = new Monkey('Peter Parker', 2, 'spider', 'other monkies', introductionMonkey);
const howler = new Monkey('Howler Parker', 4, 'howler', ['insects', 'banana'], helloHowler);

console.log(spider);
console.log(howler);
