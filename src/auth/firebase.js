
import { initializeApp } from 'firebase/app';



import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword
  } from "firebase/auth";

 import { toastErrorNotify, toastSuccessNotify } from "../helper/toastifyContainer"


const firebaseConfig={
       apiKey: "AIzaSyCKBnNU_Y_pi3hl-hgdURKnoV90jHp3aaM",
       authDomain: "movie-app-b3ac4.firebaseapp.com",
       projectId: "movie-app-b3ac4",
       storageBucket: "movie-app-b3ac4.appspot.com",
       messagingSenderId: "230325040889",
       appId: "1:230325040889:web:20a90245b4f11fa8ec9428"
    
    }


const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

//* ==================1-CREATE USER =============================*/
export const createUser=async(email,password,displayName,navigate)=>{

    try{
        let userCredential=await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        navigate("/");
        toastSuccessNotify("Giriş başarılı")   
    }
    catch(err){
     toastErrorNotify(err.message)
    }
    
}




// //* => Authentication => sign-in-method => enable Email/password
// //* ====================== 2- SİGN ======================
export const signIn = async (email, password, navigate) => {
    try {
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      toastSuccessNotify("Signed in successfully");
      console.log(userCredential);
    } catch (err) {
     toastErrorNotify (err.message);
    }
  };













//   //*==============LOGOUT===============

//   export const logOut = () => {
//     signOut(auth);
//     toast.success("Logged out successfully");
//   };

  

