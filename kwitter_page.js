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
  room_name = localStorage.getItem("room_name");

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";

}
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          like:0,
          message:msg,
          name:user_name
          

    });

    document.getElementById("msg").value = "";
}
