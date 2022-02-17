var firebaseConfig = {
    apiKey: "AIzaSyCvwLsA8DQgW8cssN52IPziU-EUzS1wFa0",
    authDomain: "acetak-bb29f.firebaseapp.com",
    databaseURL: "https://acetak-bb29f-default-rtdb.firebaseio.com",
    projectId: "acetak-bb29f",
    storageBucket: "acetak-bb29f.appspot.com",
    messagingSenderId: "1005325931603",
    appId: "1:1005325931603:web:3249d47b3e8087360a62a6",
    measurementId: "G-571BKZSVZN"
  };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name +" !";
  
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       console.log("room name - " + Room_names);
       row = "<div class = 'room_name' id = "+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
       });});}
 getData();
 
 function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";

}