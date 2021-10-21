

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcgMHmFV9vCwDfwN4FDLfW60eZfJFm5d0",
  authDomain: "classtest-63a10.firebaseapp.com",
  databaseURL: "https://classtest-63a10-default-rtdb.firebaseio.com",
  projectId: "classtest-63a10",
  storageBucket: "classtest-63a10.appspot.com",
  messagingSenderId: "448529056789",
  appId: "1:448529056789:web:c0a7257b26fc5d4dce3a1c"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
