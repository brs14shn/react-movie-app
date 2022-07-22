
import React, { useState } from 'react'
import { createContext, useContext } from "react";

//? 1- Defining
export const AuthContext = createContext()


//? 3- Consume Function (Custom Hook)
export const useAuthContext = () => {
  return useContext(AuthContext);
};

//? 2- Provider Component

const  AuthContextProvider = ({children}) => {
  const [currentUser,setCurrentUser] =useState(false)
  return (
    <AuthContext.Provider value={{currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default  AuthContextProvider;