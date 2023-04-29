import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";
function LoginSignup() {
  const [select, setSelect] = useState("login");
  console.log(select);
  return (
    <section className="loginSignupSection">
      <Toaster position="top-right" />
      <div className="container">
        <div className="row justify-content-center pt-5 ">
          <div className="col-8 border-bottom border-dark d-flex justify-content-between gradientBg rounded-top mt-5 nopadding">
            <div
              className={`${
                select === "login" ? "selectActive" : ""
              } col-6 border-end text-third border-dark fw-bold fs-5 py-2 text-center cursor`}
              onClick={() => {
                setSelect("login");
              }}
            >
              LOGIN
            </div>
            <div
              className={`${
                select === "signup" ? "selectActive" : ""
              } col-6 fw-bold text-third fs-5 py-2 text-center cursor`}
              onClick={() => {
                setSelect("signup");
              }}
            >
              SIGN UP
            </div>
          </div>
          <div className="col-8 border py-3 bg-white rounded-bottom">
            {select === "login" ? <Login /> : <Signup setSelect={setSelect} />}
          </div>
          <Link
            to="/"
            className="text-end text-decoration-none fixed-bottom mb-2"
          >
            <div className="d-inline-block rounded-2 gradientBg px-4 py-2">
              <BsBoxArrowLeft className="text-ninth fs-3 me-2" />
              <span className="text-ninth fs-7 fw-bold">Home</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default LoginSignup;
