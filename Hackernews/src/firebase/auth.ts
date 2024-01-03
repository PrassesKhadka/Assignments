import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { firebaseConfig } from ".";

export async function run() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  // Initialize services
  const db = getFirestore(app);
  // Initialize Firebase Authentication
  auth.languageCode = "en";
  // For Google Authentication:
  const provider = new GoogleAuthProvider();

  const btn = document.getElementById("google-login-btn");

  btn.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });

  // to get current user at any given time : This
  // const user = auth.currentUser;

  // when a user signs in ,out or changes account this gets triggered
  onAuthStateChanged(auth, async (user) => {
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const { displayName, email, photoURL, emailVerified } = user;

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
      console.log(uid, displayName, email, emailVerified);

      const btn = document.getElementById("google-login-btn");
      const username = document.querySelector("#profileUsername");
      const picture = document.querySelector(
        "#profilePicture"
      ) as HTMLImageElement;
      const signOutBtn = document.getElementById("google-sign-out-btn");

      // For sign out to appear
      signOutBtn.classList.toggle("hide");

      // For profile username
      username.classList.toggle("hide");
      username.textContent = `${displayName}`;
      btn.classList.toggle("hide");

      // For profile picture
      picture.classList.toggle("hide");
      picture.src = photoURL;
    } else {
      console.log("User is signed out");
    }

    // To sign-out
    const signOutBtn = document.querySelector("#google-sign-out-btn");
    signOutBtn.addEventListener("click", () => {
      signOut(auth)
        .then(() => {
          alert("User signed out !!!");
        })
        .catch((error) => {
          // An error happened.
          alert("User unable to sign out !!!");
        });
    });
  });
}
