import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import Home from "./Home";
import Login from "./Login";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/logout" element={<h2>logout..</h2>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/api/todos" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
