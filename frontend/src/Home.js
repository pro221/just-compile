import React from "react";
import { useNavigate } from "react-router-dom";
import Diamond from "../src/photo/P.jpg";
import Photos from "../src/photo/Pro.jpg";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav">
        {/* <ul>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul> */}
      </div>

      <div className="row">
        <span className="col-4">
          <img src={Photos} alt="" className="squarebox" />
        </span>
        <div className="col-6">
          <span>
            {/* <img src={Diamond} alt="smallbar" className="bar" /> */}
            <img src={Diamond} alt="smallbar" className="bar" />
          </span>
          <span>
            {/* <img src={Diamond} alt="smallbar" className="bar" /> */}
            <img src={Diamond} alt="smallbar" className="bar" />
          </span>
          <span>
            <h1 className="name mt-5 ms-5">Welcome</h1>
            <div className="mt-5 ms-5">
              <button
                className="btn btn-secondary me-4"
                onClick={() => navigate("/signup")}
              >
                Register
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
