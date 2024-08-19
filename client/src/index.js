import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app'
const firebaseConfig={
  apiKey: "AIzaSyD6xwrybWr2tq-7QTxFpRYgEW98XajdMuc",
    authDomain: "photomanagementapp-ee578.firebaseapp.com",
    projectId: "photomanagementapp-ee578",
    storageBucket: "photomanagementapp-ee578.appspot.com",
    messagingSenderId: "348881569261",
    appId: "1:348881569261:web:b97df862ae90a97ee653e4"
};
firebase.initializeApp(firebaseConfig)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>      
    <App />
  </React.StrictMode>
);

reportWebVitals();
