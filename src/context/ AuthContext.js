import { ChildFriendly } from '@mui/icons-material';
import React from 'react'
import { createContext, useContext } from "react";

//? 1- Defining
export const AuthContext = createContext()


//? 3- Consume Function (Custom Hook)
export const useAuthContext = () => {
  return useContext(AuthContext);
};

//? 2- Provider Component

const  AuthContextProvider = ({children}) => {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

export default  AuthContextProvider;