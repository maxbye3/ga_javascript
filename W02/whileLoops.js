/*
* COUNTING WHILE LOOP
*/
// counting to ten
let counter = 0;
while (counter < 10) {
    counter++;
    console.log(`inside the loop: ${counter}`);
}

// While loop double salaries
// const averageSalaries = [10, 20, 30, 40, 50, 60, 80];

const doubleSalaries = [];
let i = 0;

while (i < averageSalaries.length) {
    doubleSalaries.push(averageSalaries[i]*2);
    i += 1;
}
console.log(`double salaries: ${doubleSalaries}`);

/*
* FILTERING THE BEARS
*/
const bears = ['brown', 'grizzly', 'angry', 'charming'];
const myFaveBears = bears.filter((bear, index) => {
    console.log(bear, index);
  return index === 2;
});
console.log(`my fave bears ${myFaveBears}`);


// Do loop 
// var bears = ['brown', 'grizzly', 'angrysad', 'charming'];
let index = 0;
let bear = '';
do {
    bear = bears[index];
    index += 1;
} while (bear !== 'angry');




