import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { login } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(loginInput.email, loginInput.password);
    console.log(user);
    if (user) {
      navigate("/forum", {
        replace: true,
      });
    }
  };
  return (
    <section className="loginSection">
      <Toaster position="top-right" />
      <form className="text-center mt-4" onSubmit={handleSubmit}>
        <p className="mt-3 fw-bold fs-5">Login With Your Mail</p>
        <hr className="col-8 mx-auto" />
        <input
          className="d-block w-75 form-control mt-2 mx-auto"
          type="email"
          placeholder="Mail"
          value={loginInput.email}
          onChange={(e) => {
            setLoginInput({ ...loginInput, email: e.target.value });
          }}
        />
        <input
          className="d-block w-75 form-control mt-2 mx-auto"
          type="password"
          placeholder="Password"
          value={loginInput.password}
          onChange={(e) => {
            setLoginInput({ ...loginInput, password: e.target.value });
          }}
        />
        <button
          disabled={!loginInput.password || !loginInput.email}
          className="btn btn-ninth text-dark fw-bold mt-5 px-4 py-2"
          type="submit"
        >
          LOGIN
        </button>
      </form>
    </section>
  );
}

export default Login;
