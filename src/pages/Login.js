import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Login </h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomInput
                  classname="mt-1"
                  type="email"
                  name="email"
                  placeholder="Email"
                />

                <CustomInput
                  classname="mt-1"
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <Link to="/forgot-password" className="mb-2">
                  Forgot Password?
                </Link>
                <div className="d-flex justify-content-center gap-15 align-items-center">
                  <button className="button border-0" type="submit">
                    Login
                  </button>
                  <Link to="/sign-up" className="button signup">
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
