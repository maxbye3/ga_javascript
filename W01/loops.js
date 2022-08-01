/*
* Classmates
*/
// for loop way
var classMates = ["Imiya", "Josh", "Iury", "Jan" ];
for (var i=0; i < classMates.length; i++){
    console.log('for loop classmates:', classMates[i]);
}

// for each
classMates.forEach((classmate) => {
    console.log('for each classmates:', classmate);
})

/*
* Getting totals
*/
var salary = [10, 20, 30, 40, 50, 60];
var totalSalary = 0;
for(var i = 0; i < salary.length; i +=1){
  totalSalary += salary[i];
}
console.log('grand total', totalSalary);

// foreach loop
var salaries = [10, 20, 30, 40, 50, 60];
var totalSalary = 0;
salaries.forEach((salary) => {
    totalSalary += salary;
})
console.log(`total amount is ${totalSalary}`);

// if you want to create a seperate array using original data
// use the spread operator ...original_array to deep clone the original array
var joshSalary = [...salaries]; 

// equivalent
var salaries = [10, 20, 30, 40, 50, 60, 80];
var seperateSalaries = [];
for(var i = 0; i < salaries.length; i+=1){
  seperateSalaries.push(salaries[i]);
}


var animals = ['bird', 'zebra', ['grizzly', 'black', 'brown', 'polar', 'panda']];

for(var i = 0; i < animals.length; i++){
  console.log(`i index: ${i} Animal type: ${animals[i]}`);
  // print out the bears for me!
  for(var j = 0; j < animals[2].length; j++){
    console.log(`j index: ${j} Bear type: ${animals[2][j]}`);
  }
}


// arrays in arrays
var animals = ['bird', ['lion', 'tiger'], ['grizzly', 'black', 'brown', 'polar', 'panda']];
var bears = [];

/*
* FOR LOOP
*/
// looping through all animals
for(var i = 0; i < animals.length; i++){
    if(typeof(animals[i]) !== 'string' && animals[i].length > 2){
        console.log(`bears: ${animals[i]}`);
        bears = [...animals[i]];

    }
}

// looping going through bears
for(var i = 0; i < bears.length; i++){
    console.log('bear:', bears[i]);
}
// for loop

/*
* FOR EACH
*/
var animals = ['bird', ['lion', 'tiger'], ['grizzly', 'black', 'brown', 'polar', 'panda']];
var bears = [];
animals.forEach((animalType) => {
     if(typeof(animalType) !== 'string' && animalType.length > 2){
      bears = animalType;
    }
});

bears.forEach((bear)=> {console.log(bear)});


