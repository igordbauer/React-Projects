import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
}> = ({ text, id }) => {
  const context = useContext(TodosContext);

  const removeTodoHandler = () => {
    context.removeTodo(id);
  };
  return (
    <li onClick={removeTodoHandler} className={classes.item}>
      {text}
    </li>
  );
};
export default TodoItem;
