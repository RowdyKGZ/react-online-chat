import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyD7auPTKpZJqfvnUTGXqpNURaDrOoQkwKU",
    authDomain: "el-uchun.firebaseapp.com",
    projectId: "el-uchun",
    storageBucket: "el-uchun.appspot.com",
    messagingSenderId: "139115177681",
    appId: "1:139115177681:web:f90f2502573eab4e28c7f0",
    measurementId: "G-HYE8CZG0FH",
});
firebase.analytics();

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <Context.Provider value={{ firebase, auth, firestore }}>
        <App />
    </Context.Provider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
