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
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
name:user_name,
message:msg,
upvotes:0
    });
  document.getElementById("msg").value = "";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html"
}

function getData() 
{ 
  firebase.database().ref("/").on('value', function(snapshot) 
  { 
  document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
      childData = childSnapshot.val();
  if (childKey != "purpose"){
  
  firebase_message_id = childKey;
  message_data = childData;

  console.log(firebase_message_id);
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];
  like = message_data['like'];
  name_with_tag = "<h4>"+name +"<img class='user_tick' src = 'tick.png></h4>";
  message_with_tag = "<h4 class = 'message_h4" + message + "</h4>";
  like_button = "<button class = 'btn btn-warning' id ="+firebase_message_id+" value ="+like+"onclick = 'updateLike(this.id)'>";
  span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>"+like+"</span></button></hr>";
} }); }); }
