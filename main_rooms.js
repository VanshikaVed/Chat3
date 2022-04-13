var firebaseConfig = {
  apiKey: "AIzaSyCbNP8mvECVmdonew5M7eU4mHDBLPyzapY",
  authDomain: "share-o-plus-6b1f9.firebaseapp.com",
  databaseURL: "https://share-o-plus-6b1f9-default-rtdb.firebaseio.com",
  projectId: "share-o-plus-6b1f9",
  storageBucket: "share-o-plus-6b1f9.appspot.com",
  messagingSenderId: "118130822010",
  appId: "1:118130822010:web:d9b75a0787d4f52ba6e4c3",
  measurementId: "G-E23L65WG17"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("Name");

function setName()
{
    document.getElementById("div_name").innerHTML = "<p class='title'>Welcome " + user_name + "!</p>";
}

setName();

function store_room_name()
{
  
  room_name = document.getElementById("input_room_name").value;
  localStorage.setItem("Room" , room_name);
  firebase.database().ref("/").child(room_name).update({
    Key : "value"
  });

}

function getData()
{
  firebase.database().ref("/").on('value' , function(snapshot)
  {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot){
      child_key = childSnapshot.key;
      all_room_names = child_key;
      room_div =  "<div class='list' id=" + all_room_names + " onclick = 'room(this.id)'>" + all_room_names + "</div><hr>";
      document.getElementById("output").innerHTML += room_div;
    });
  });
}

getData();

function room(e)
{
  console.log(e);
  window.location = "chat.html";
}