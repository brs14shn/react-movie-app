import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const currentUser = { displayName: "barıs sahin" };
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
          ) : null}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
