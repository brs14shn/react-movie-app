import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/ AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  //* Test için;
  // const currentUser = { displayName: "barıs sahin" };
  const { currentUser } = useAuthContext();
  // const {currentUser}=useContext(AuthContext)
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to={"/"}>
            <h4>React MovieApp</h4>
          </Link>
        </div>
        <div className="d-flex text-white align-items-center">
          {currentUser ? (
            <>
              <h5 className="mb-0 text-capitalize">
                {currentUser.displayName}
              </h5>
              <button className="ms-2 btn btn-outline-light">Logout</button>
            </>
          ) : (
            <>
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
