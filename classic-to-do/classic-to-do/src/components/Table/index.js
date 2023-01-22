import Cell from "../Cell";
import Card from "../Card";
import classes from "./Table.module.css";
import Emoji from "a11y-react-emoji";
const Table = ({ tasks, label, emoji, type }) => {
  {
    /* <Cell
    type={type}
    key={"id"}
    id={"id"}
    title={"title"}
    description={"description"}
    data={"data"}
  /> */
  }

  return (
    <div className={classes.main}>
      <label>
        <div>{label}</div>
        <Emoji symbol={emoji}></Emoji>
      </label>
      <Card>
        {tasks.length === 0 ? (
          <div className={classes.empty}>"Nothing to do here!"</div>
        ) : (
          tasks.map(({ id, title, description, data }) => (
            <Cell
              type={type}
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
