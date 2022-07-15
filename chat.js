// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCluFvSJijNSaq2cGPdrgsaH525YVc5siU",
    authDomain: "chat-57b9f.firebaseapp.com",
    databaseURL: "https://chat-57b9f-default-rtdb.firebaseio.com",
    projectId: "chat-57b9f",
    storageBucket: "chat-57b9f.appspot.com",
    messagingSenderId: "1080081880206",
    appId: "1:1080081880206:web:07e48d30449dc8a24aa5df",
    measurementId: "G-P7JFXT0Y1Y"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}




