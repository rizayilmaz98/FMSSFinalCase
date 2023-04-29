import { useState } from "react";
import { BsFillXCircleFill, BsCheckCircleFill } from "react-icons/bs";
import { register } from "../../firebase";

function Signup({ setSelect }) {
  const [signUp, setSignUp] = useState({ email: "", password: "" });
  const [againPassword, setAgainPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(signUp.email, signUp.password);
    setSignUp({ email: "", password: "" });
    setAgainPassword("");
    setSelect("login");
    console.log(user);
  };
  
  return (
    <div className="loginSection">
      <form className="text-center mt-4" onSubmit={handleSubmit}>
        <p className="mt-3 fw-bold fs-5">Sign Up With Your Mail</p>
        <hr className="col-8 mx-auto" />
        <input
          className="d-block w-75 form-control mt-2 mx-auto"
          type="email"
          placeholder="Mail"
          value={signUp.email}
          onChange={(e) => {
            setSignUp({ ...signUp, email: e.target.value });
          }}
        />
        <input
          className="d-block w-75 form-control mt-2 mx-auto"
          type="password"
          placeholder="Password"
          value={signUp.password}
          onChange={(e) => {
            setSignUp({ ...signUp, password: e.target.value });
          }}
        />
        <input
          className="d-block w-75 form-control mt-2 mx-auto"
          type="password"
          placeholder="Password Again"
          value={againPassword}
          onChange={(e) => {
            setAgainPassword(e.target.value);
          }}
        />
        {(!signUp.password || !againPassword) === false ? (
          <div className="col-8 mx-auto mt-2">
            <div className="d-flex justify-content-center">
              <div className="passwordControlIcon text-start">
                {signUp.password === againPassword ? (
                  <BsCheckCircleFill className="text-sixth fs-5" />
                ) : (
                  <BsFillXCircleFill className="text-seventh fs-5" />
                )}
              </div>
              <div className="passwordControlMessage ms-3">
                {signUp.password === againPassword ? (
                  <p className="fs-7 mt-1">Passwords are the same</p>
                ) : (
                  <p className="fs-7 mt-1">Passwords are different</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <button
          disabled={
            !signUp.email ||
            !signUp.password ||
            !againPassword ||
            !(signUp.password === againPassword)
          }
          className="btn btn-ninth text-dark fw-bold px-4 py-2 mt-5 "
          type="submit"
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
}

export default Signup;
