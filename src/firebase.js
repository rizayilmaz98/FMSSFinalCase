import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import toast from "react-hot-toast"

const firebaseConfig = {
  apiKey: "AIzaSyBs1gJtcuSOaLvdfaXcNp2ZK3d3Wm5JVUU",
  authDomain: "patikagraduation.firebaseapp.com",
  projectId: "patikagraduation",
  storageBucket: "patikagraduation.appspot.com",
  messagingSenderId: "506935204255",
  appId: "1:506935204255:web:fc23338fb76dce117285aa"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const register = async (email,password) => {
    try {
      const {user} = await createUserWithEmailAndPassword(auth,email,password);
      toast.success('Registration successful');
      return user;
    } catch(error){
        toast.error(error.message);
    } 
  }
  export const login = async (email,password) => {
    try{
      const {user} = await signInWithEmailAndPassword(auth,email,password);
      toast.success('Login successful');
      return user;
    } catch(error){
        toast.error(error.message);
    }
  }
  export const logout = async () => {
    try{
      await signOut(auth)
      return true;
    }catch(error){
        toast.error(error.message);
    }
  }