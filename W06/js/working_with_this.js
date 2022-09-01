// /*
// * this
// */
// const pig = {
//     firstName: 'hog',
//     lastName: 'zilla',
//     type: 'texas feral',
//     getPig: function () {
//         return this.firstName + this.lastName;
//     }
// }

// const details = {
//     firstName: 'Max',
//     lastName: 'Bye',
//     fullName: function () {
//         // details
//         return this.firstName + this.lastName;
//     }
// }

// // this === window 
// console.log(`first name: ${pig.firstName}`);
// console.log(`last name: ${pig.lastName}`);
// console.log(`full name: ${pig.getPig()}`);
// console.log(`full name: ${details.fullName()}`);

let data = [];

const getBlog = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((result) => {
            return result.json();
        }).then((getBlogs) => {
            data = getBlogs;
        }).catch((error) => {
            console.log('error:', error);
        });
}

console.log(data);

// eslint-disable-next-line no-unused-vars
const filterData = () => {
    // let helloWorld = 'hello world';

    let filteredResult = data.filter((blog) => {
        return blog.id === 100;
    });
    console.log(filteredResult);
    document.getElementById('filteredResults').innerHtml = filteredResult[0].title;
}


getBlog();

