const firebaseConfig = {
      apiKey: "AIzaSyASUzvIf4nao7KvICeW7oknKr_B4nljL9k",
      authDomain: "clase-100-3605e.firebaseapp.com",
      databaseURL: "https://clase-100-3605e-default-rtdb.firebaseio.com",
      projectId: "clase-100-3605e",
      storageBucket: "clase-100-3605e.appspot.com",
      messagingSenderId: "1052113684808",
      appId: "1:1052113684808:web:f06a6ad707ee2ceb9a8b7d"
    };
    
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " +  user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
      //Inicia el código
       console.log("Nombre de sala" + Room_names);
       row = "<div class=' id="+room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      //Finaliza el código
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name");

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
            
       localStorage.setItem("room_name", room_name);

       window.location = "kwwiter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "kwitter.html";
}