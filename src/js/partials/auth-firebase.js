// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAgxt77z4guvGeb-hLfEEShLOOJCexE6KA',
  authDomain: 'project-piznayk0-54a5b.firebaseapp.com',
  projectId: 'project-piznayk0-54a5b',
  storageBucket: 'project-piznayk0-54a5b.appspot.com',
  messagingSenderId: '414681312063',
  appId: '1:414681312063:web:4c2a191ae3a1338ea9818a',
  measurementId: 'G-SN3VTV9KJG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);

const email = 'daria@email.com';
const password = '12344321123';

const auth = getAuth(app);
createUserWithEmailAndPassword(auth, email, password)
  .then(userCredential => {
    // Signed up
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    // ..
  });
