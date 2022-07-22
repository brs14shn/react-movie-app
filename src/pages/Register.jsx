import React from "react";

const Register = () => {
  return (
    <div className="d-flex justify-content-center ">
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              className="form-control"
              type="text"
              id="firstname"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Last Name
            </label>
            <input
              className="form-control"
              type="text"
              id="lastname"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="Enter your password.."
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
