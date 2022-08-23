async function processingBlogs(url) {
    const response = await fetch(url);
    const blogs = await response.json();
    console.log(blogs);
    // process and append to HTML
}

async function fetchFrom(url) {
    try {
        console.log(url)
        return processingBlogs(url);
    } catch (error) {
        // go here
        console.log(error);
    }
}

fetchFrom('https://jsonplaceholder.typicode.com/posts');