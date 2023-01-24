import React from "react";
const Todos: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((e) => (
        <li key={e}>{e}</li>
      ))}
    </ul>
  );
};

export default Todos;
