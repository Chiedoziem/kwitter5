
  // Initialize Firebase
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
    document.getElementById("user_name").innerHTML = "Welcome" + " " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
purpose: "adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "chat_page.html"
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room name", name);
      window.location = "chat_page.html"
      }
      
      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html"
      }
