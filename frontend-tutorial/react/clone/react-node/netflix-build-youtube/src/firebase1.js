import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCaq9-Vj0svqmMZbzIWh9vfxhRqveGCGkw",
    authDomain: "netflix-clone-eebea.firebaseapp.com",
    projectId: "netflix-clone-eebea",
    storageBucket: "netflix-clone-eebea.appspot.com",
    messagingSenderId: "237054732164",
    appId: "1:237054732164:web:5848d231584ae3ed8e9fd1"
  };

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore(); 
const db = getFirestore();
const auth = getAuth(firebaseApp);


export {auth, db};
// export default db;