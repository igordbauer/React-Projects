import React from "react";
import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((e) => (
        <li key={e.id}>{e.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
