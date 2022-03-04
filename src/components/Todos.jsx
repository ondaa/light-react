import React from "react";
import Todo from "./Todo";

const Todos = ({ todos = [] }) => {
  return (
    <ul>
      {todos.map((name) => (
        <Todo key={name}>{name}</Todo>
      ))}
    </ul>
  );
};

export default Todos;
