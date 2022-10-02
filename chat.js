// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
   const firebaseConfig = {
    apiKey: "AIzaSyAnUd7kzdUuaaoLJI6f2VMmqFh7XyMrHaI",
    authDomain: "classtest1-a07a6.firebaseapp.com",
    projectId: "classtest1-a07a6",
    storageBucket: "classtest1-a07a6.appspot.com",
    messagingSenderId: "298066564858",
    appId: "1:298066564858:web:11838b01dbe2e3d7d11b43"
  };
  
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);


 function addUser()
{
  user_name = document.getElementById("user_name").value;
    /*
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);
    
    window.location = "chat_room.html";
}



