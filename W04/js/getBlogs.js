/*
* FETCH BLOG INFO
*/
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
        console.log(result);
    })