import Cell from "../Cell";
import Card from "../Card";
import classes from "./Table.module.css";
import Emoji from "a11y-react-emoji";
const Table = ({ tasks, label, emoji }) => {
  return (
    <div className={classes.main}>
      <label>
        <div>{label}</div>
        <Emoji symbol={emoji}></Emoji>
      </label>
      <Card>
        {tasks.length === 0 ? (
          <Cell
            id={"asd"}
            title={"nada"}
            description={"description"}
            data={"data"}
          />
        ) : (
          tasks.map(({ id, title, description, data }) => (
            <Cell
              key={id}
              id={id}
              title={title}
              description={description}
              data={data}
            />
          ))
        )}
      </Card>
    </div>
  );
};
export default Table;
