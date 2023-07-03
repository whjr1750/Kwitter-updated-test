//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("Name");
room_name = localStorage.getItem("roomname")

function send()
{
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
      like : 0 ,
      message : msg , 
      name : user_name
   });

   document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
   console.log(firebase_message_id);
   console.log(message_data);
   Name = message_data["name"];
   like = message_data["like"];
   message = message_data["message"];
   name_tag = "<h4> " + Name + "<img src='tick.png' class = 'user_tick' > </h4>";
   messagetag = "<h4 class='message_h4'>" + message + "</h4>";
   like_button = "<button class='btn btn-danger' id="+firebase_message_id+" value="+like+" onclick = 'update_like(this.id)'>";
   span_tag = "<span class = 'glyphicon glyphicon-thumbs-up' > like : "+like+" </span> </button> <hr>";

   row = name_tag + messagetag + like_button +span_tag;
   document.getElementById("output").innerHTML += row 
//End code
      } });  }); }
getData();

function update_like(message_id)
{
   console.log("message_id name:"+message_id)
   console.log("clicked on like button -" + message_id);
   button_id = message_id;
   likes = document.getElementById(button_id).value;
   updatedlikes = Number(likes) + 1;
   console.log(updatedlikes);

   firebase.database.ref(room_name).child(message_id).update({
      like : updatedlikes
   });
}

function logout()
{
  localStorage.removeItem("Name");
  localStorage.removeItem("roomname");
  window.location = "index.html";
}
