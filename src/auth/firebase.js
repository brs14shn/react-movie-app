
import { initializeApp } from 'firebase/app';


import {
    createUserWithEmailAndPassword,
    getAuth,
  } from "firebase/auth";

  // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

  // import { toast } from "react-toastify";

  //? React-Toastify, uygulamanıza kolaylıkla bildirim eklemenizi sağlar.


//* FİREBASE-CONFİG
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  };
//* Firebasestarted
const app = initializeApp(firebaseConfig);

// const firebaseConfigEnv={
//    apiKey: "AIzaSyCKBnNU_Y_pi3hl-hgdURKnoV90jHp3aaM",
//    authDomain: "movie-app-b3ac4.firebaseapp.com",
//    projectId: "movie-app-b3ac4",
//    storageBucket: "movie-app-b3ac4.appspot.com",
//    messagingSenderId: "230325040889",
//    appId: "1:230325040889:web:20a90245b4f11fa8ec9428"

// }


// //? Yeni kullanıcıları kaydetmek için :
export const createUser = async (email, password, displayName, navigate) => {
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // await updateProfile(auth.currentUser, {
      //   displayName: displayName,
      // });
      navigate("/");
      console.log(userCredential);
    } catch (err) {
     console.log(err)
    }
  };

// //* => Authentication => sign-in-method => enable Email/password
// //* ====================== SİGN ======================
// export const signIn = async (email, password, navigate) => {
//     try {
//       let userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       navigate("/");
//       toast.success("Signed in successfully");
//       console.log(userCredential);
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };


//   //*==============LOGOUT===============

//   export const logOut = () => {
//     signOut(auth);
//     toast.success("Logged out successfully");
//   };

  

