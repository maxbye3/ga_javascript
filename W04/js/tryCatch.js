/*
* FETCH BLOG INFO
*/
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((result) => {
        return result.json();
    }).then((getBlogs) => {
        
        // for loop
        for (let i = 0; i < getBlogs.length; i++) {
            console.log(getBlogs[i]);
        }
    }).catch((error) => {
        console.log('error:', error);
    });
