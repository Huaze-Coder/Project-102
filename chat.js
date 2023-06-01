// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
    apiKey: "AIzaSyCSYxyhkqPI2Jyl9C5asL_wOaD6LpQvqzo",
    authDomain: "c100-chat-app.firebaseapp.com",
    databaseURL: "https://c100-chat-app-default-rtdb.firebaseio.com",
    projectId: "c100-chat-app",
    storageBucket: "c100-chat-app.appspot.com",
    messagingSenderId: "970774344223",
    appId: "1:970774344223:web:7926b8d385b99f610b1b2a",
    measurementId: "G-TSVNP0YXDB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    window.location = "chat_page.html";
}