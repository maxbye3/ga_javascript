/*
* CREATING A CLICK ME FUNCTION
*/
function clickMe(){
     console.log('click me');
}

/*
* CREATING A HOVER FUNCTION
*/
const mouseOver = () => {
     console.log('hovering over button!');
}

/*
* EVENT HANDLERS
* listening out for an event
*/
// document.getElementById('button').addEventListener('click', clickMe);


/*
* FORM
*/
document.getElementById('inputNameSubmit').addEventListener('click', (event)=>{
     event.preventDefault();
     const firstName = document.getElementById('firstName').value;
     document.getElementById('textResult').innerText = firstName;
});