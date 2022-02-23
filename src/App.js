import { useState } from "react";
import "./App.css";
import AddTodo from "./container/AddTodo/AddTodo";
import ListTodo from "./container/ListTodo/ListTodo";

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <div style={{ marginLeft: "20%", marginTop: "1%" }}>
        <button className="btn-function" onClick={() => setDisplay(!display)}>
          {display ? "List ToDo" : "Add Task"}
        </button>
      </div>
      {display ? <AddTodo /> : <ListTodo />}
    </>
  );
}

export default App;
