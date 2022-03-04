import React, { useState } from "react";
import Todos from "./components/Todos";

import "./styles/index.css";

const initialState = [
  "Apple",
  "Banann",
  "Camera",
  "Dynamic",
  "Element",
  "Fire",
  "Guide",
];

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(initialState);

  const keyPerssEnterHandler = (ev) => {
    if (!ev.key) return;

    if (ev.key.toUpperCase() === "ENTER") {
      setTodos((prevState) => {
        return [text, ...prevState];
      });

      setText("");
    }
  };

  return (
    <div>
      <input
        value={text}
        onChange={(ev) => setText(ev.target.value)}
        onKeyPress={keyPerssEnterHandler}
      />
      <Todos todos={todos} />
    </div>
  );
}
