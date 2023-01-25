import { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const context = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {context.items.map((e) => (
        <TodoItem key={e.id} id={e.id} text={e.text} />
      ))}
    </ul>
  );
};

export default Todos;
