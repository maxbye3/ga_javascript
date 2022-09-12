// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
// import { getDatabase } from "firebase/database";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlzr9vFUZbFvl1tpuUrxT3zxwdo-uDwmA",
    authDomain: "hello-world-2dcd3.firebaseapp.com",
    databaseURL: "https://hello-world-2dcd3-default-rtdb.firebaseio.com",
    projectId: "hello-world-2dcd3",
    storageBucket: "hello-world-2dcd3.appspot.com",
    messagingSenderId: "277978860251",
    appId: "1:277978860251:web:8bbc93b978c63aca9d9afe",
    measurementId: "G-TJYQNG66W1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const blogs = await database.json();
// console.log(blogs);

const db = getDatabase(app);
const userRef = ref(db, 'users/1');

onValue(userRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
});



set(ref(db, 'users/1'), {
    username: 'New name',
});
