const monkey = {};

const introduction = (name, species, food) => {
    console.log(`hello ${name}, you are ${species} and you eat ${food}`);
}

monkey.name = 'peter parker';
monkey.species = 'spider';
monkey.age = 42
monkey.foods = ['banana'];
monkey.eatSomething = (food) => {
    console.log(`food eaten ${food}`);
};
monkey.introduction = introduction;



console.log(monkey.introduction(monkey.name, monkey.species, monkey.foods[0]));

///////////////////

const primate = {
    name: 'mr. orange',
    species: 'orangatan',
    foods: ['banana', 'insects', 'nuts'],
};

console.log(primate.name);

