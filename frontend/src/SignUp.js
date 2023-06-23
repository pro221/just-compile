import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:8080/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate("/login");
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

      <div className="register">
        <h1 className="inputbox">register</h1>
        <input
          className="inputbox"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Username"
        />
        <input
          className="inputbox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          className="inputbox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={registerData} className="inputbox2" type="button">
          Signup
        </button>
      </div>
    </>
  );
}

export default SignUp;
