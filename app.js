console.log("APP JS RUNNING");
const firebaseConfig = {
  apiKey: "AIzaSyALFtA1QzBWq_eyKYzun1ddWRJEtHj0iOY",
  authDomain: "pispace-5585c.firebaseapp.com",
  projectId: "pispace-5585c",
  storageBucket: "pispace-5585c.firebasestorage.app",
  messagingSenderId: "790866485952",
  appId: "1:790866485952:web:e02e30d59baba023168325",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("status").innerText = "Registered Successfully";
    })
    .catch((error) => {
      document.getElementById("status").innerText = error.message;
    });
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      document.getElementById("status").innerText = "Logged In Successfully";
    })
    .catch((error) => {
      document.getElementById("status").innerText = error.message;
    });
}
