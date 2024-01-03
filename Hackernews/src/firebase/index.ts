// Import the functions you need from the SDKs(Software Design Toolkit) you need
// the functions which are needed are only imported from the firebase application
import { initializeApp } from "firebase/app";
// get+service name pattern Eg: getFiresore,getAuth
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAJIG2BZET3eRMM-OEk1TxD1w0-jMMd2O0",
  authDomain: "hackernews-api-51bf3.firebaseapp.com",
  projectId: "hackernews-api-51bf3",
  storageBucket: "hackernews-api-51bf3.appspot.com",
  messagingSenderId: "577832126532",
  appId: "1:577832126532:web:f948b20968342fdfe41411",
};

// export async function connectFirebase() {
//   try {
//     const querySnapshot = await getDocs(collection(db, "news"));
//     console.log("Successfully retrieved documents");
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id}`);
//       console.log(`${doc.data().bookmarks}`);
//     });
//   } catch (e) {
//     console.log("Error reading documents");
//   }
// }
