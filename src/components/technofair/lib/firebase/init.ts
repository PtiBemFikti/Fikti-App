// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB_dHYugjRcKSzoxBNVuqjVRXE2RSK7ixg',
  authDomain: 'technofair-11.firebaseapp.com',
  projectId: 'technofair-11',
  storageBucket: 'technofair-11.appspot.com',
  messagingSenderId: '585729606486',
  appId: '1:585729606486:web:69a0d7665fb9f520c24cf7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
