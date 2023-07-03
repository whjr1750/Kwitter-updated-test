
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDDuYUWKx1y9kzef5GTTAJTtypNbBzy4RQ",
    authDomain: "kwitter-91143.firebaseapp.com",
    databaseURL: "https://kwitter-91143-default-rtdb.firebaseio.com",
    projectId: "kwitter-91143",
    storageBucket: "kwitter-91143.appspot.com",
    messagingSenderId: "130188425643",
    appId: "1:130188425643:web:fc33cd6ef5db23a4407aee"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("Name");
document.getElementById("user_name").innerHTML = "Welcome " + username + " !"; 

function add_room()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("roomname" , room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirect_to_room_name(this.id) ' > # "+Room_names+" </div> <hr> ";
      document.getElementById("output").innerHTML += row; 
      //End code
      });});}
getData();


function redirect_to_room_name(name)
{
   console.log(name);
   localStorage.setItem("room_name" , name);
   window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("Name");
  localStorage.removeItem("roomname");
  window.location = "index.html";
}