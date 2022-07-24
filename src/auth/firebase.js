
import { initializeApp } from 'firebase/app';



import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged
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
// //* ====================== 2- SİGN-İN ======================
export const signIn = async (email, password, navigate) => {
    try {
      let userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      // sessionStorage.setItem("user",JSON.stringify(userCredential.user))
      //? Firebasenin sayfaya giriş yaptığı kontrol eden methodumuzu kullanmamız gerekiyor
      //! onAuthStateChanged==>Bir kimlik doğrulama durumu gözlemcisi 
      toastSuccessNotify("Signed in successfully");
      console.log(userCredential);
    } catch (err) {
     toastErrorNotify (err.message);
    }
  };

  // onAuthStateChanged==>Bir kimlik doğrulama durumu gözlemcisi 

export const userObserver=(setCurrentUser)=>{
//? Kullanıcının login olup olmadığını login ise user bilgisini dönüyor...

onAuthStateChanged(auth, (user) => {
  if (user) {
    setCurrentUser(user)
  } else {
   setCurrentUser(false)
  }
});

}

  













//   //*==============LOGOUT===============

//   export const logOut = () => {
//     signOut(auth);
//     toast.success("Logged out successfully");
//   };

  





//*https://firebase.google.com/docs/auth/web/google-signin