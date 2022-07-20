import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const [currentuser, setCurrentUser] = useState(true);
  //* current user firebaseden gelene kadar test amaçlı kullanılmıştır.

  return currentuser ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRouter;
