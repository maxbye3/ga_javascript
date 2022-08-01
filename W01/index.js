var hello = "hello world";
var int = 5;
var float = 5.5;
var boolean = true;

console.log('5',int);

int += 2; // int = int + 2

console.log(hello);
console.log('int:', int, 'float:', float);
console.log('boolean:', boolean);

// Create a random number
var mathRandom = Math.random();
console.log('random number: ', mathRandom);

// Check if number
var float = 5.5;
console.log('number:', typeof(float));

// true and false statements (conditionals)
var hello = 'hello world';
if(typeof(hello) === 'string'){
    console.log("IT'S A STRING");
}

if(typeof(hello) !== 'number'){
   console.log("IT'S NOT A NUMBER");
}

if(2 > 3){
    console.log("2 is more than 3");
} else if(4 > 2){
    console.log("4 less than 2");
} else {
    console.log("all of the above is false");
}


// turn a string into an int
var maxAgeString = "33a";
var maxAgeInt = parseInt(maxAgeString);
console.log(maxAgeString, maxAgeInt);

// defined and undefined
var myAge;
if(myAge){
  console.log('defined'); 
} else {
  console.log('undefined'); // this will return!
}

myAge = 33; 

if(myAge){
  console.log('defined'); // this will return! unless myAge = 0 then use myAge !== null
} else {
  console.log('undefined');
}

// OR STATEMENT
var myName = 'Max';
if(myName === 'Josh' || myName === 'Max'){
  console.log('one of these names in there');
} else {
  console.log('Name is probably Lury');
}

// AND STATEMENT
var myName = 'Max';
if(myName === 'Josh' && myName === 'Max'){
  console.log('one of these names in there');
} else {
  console.log('Name is probably Lury');
}


// FOR LOOP
var bears = ['brown', 'grizzly', 'angry', 'charming'];
for(var i = 0; i < bears.length; i++){
  console.log('i: ',i, 'bear:', bears[i]); 
}