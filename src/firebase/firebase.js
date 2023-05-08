
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: 'AIzaSyBR8JzLhQxmJDfgvgcTlTZU3JDcG2cxPcE',
  authDomain: 'entertainment-app-movie.firebaseapp.com',
  projectId: 'entertainment-app-movie',
  storageBucket: 'entertainment-app-movie.appspot.com',
  messagingSenderId: '360672918988',
  appId: '360672918988:web:dab7c7fc19fce92c1b3169'
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);