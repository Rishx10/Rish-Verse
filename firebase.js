// FIREBASE IMPORTS

import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

    getFirestore,
    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    serverTimestamp

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// FIREBASE CONFIG

const firebaseConfig = {

    apiKey: "AIzaSyDLYkLPJnJb2DX7_NxPqzqvQKsSeLLuihA",

    authDomain: "rish-verse.firebaseapp.com",

    projectId: "rish-verse",

    storageBucket: "rish-verse.firebasestorage.app",

    messagingSenderId: "88076530084",

    appId: "1:88076530084:web:4ea80f10fb3dbe3c419131"

};


// INITIALIZE

const app =
initializeApp(firebaseConfig);

const db =
getFirestore(app);


// EXPORT DATABASE

export {

    db,

    collection,
    addDoc,
    getDocs,
    query,
    orderBy,
    serverTimestamp

};