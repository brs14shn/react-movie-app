
import React, { useState,useEffect } from 'react'
import { createContext, useContext } from "react";
import { userObserver } from '../auth/firebase';

//? 1- Defining
export const AuthContext = createContext()


//? 3- Consume Function (Custom Hook)
export const useAuthContext = () => {
  return useContext(AuthContext);
};

//? 2- Provider Component

const  AuthContextProvider = ({children}) => {
  const [currentUser,setCurrentUser] =useState(true)

  useEffect(() => {
  //  setCurrentUser(JSON.parse(sessionStorage.getItem("user")))

  userObserver(setCurrentUser)
  
  
  }, [])
  

console.log({currentUser})
  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default  AuthContextProvider;