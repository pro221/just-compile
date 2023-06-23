import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    });
  };
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            {/* <Link to="/logout">Logout</Link> */}
            <button onClick={() => navigate("/")}>Logout</button>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="inputbox">todo list</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="inputbox"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="button" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default Todo;
