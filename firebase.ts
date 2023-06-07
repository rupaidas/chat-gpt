import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyBWDQlWPv6UQQRGSzvtnUw3ZOpjMWhmyoI",
  
    authDomain: "chatgpt-clone-2-0-a6f2c.firebaseapp.com",
  
    projectId: "chatgpt-clone-2-0-a6f2c",
  
    storageBucket: "chatgpt-clone-2-0-a6f2c.appspot.com",
  
    messagingSenderId: "33161714334",
  
    appId: "1:33161714334:web:95626cb2a23b0f04c5b98f"
  
  };
  
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};