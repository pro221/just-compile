import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    console.log("email,password", email, password);
    let result = await fetch("http://localhost:8080/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.name) {
      localStorage.set("user", JSON.stringify(result));
      navigate("/api/todos");
    } else {
      alert("please enter valid details");
    }
  };
  return (
    <>
      <div className="nav">
        {/* <ul>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul> */}
      </div>

      <div className="login">
        <h1 className="inputbox">Login</h1>
        <input
          type="text"
          className="inputbox"
          placeholder="enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="inputbox"
          placeholder="enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={handleLogin} className="inputbox2" type="button">
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
