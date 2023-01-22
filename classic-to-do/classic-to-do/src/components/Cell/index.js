import classes from "./Cell.module.css";
import { AcceptButton, DeleteButton } from "../Button";
import CardCellLayout from "./CardCellLayout";
const Cell = ({ id, data, title, description, type }) => {
  return (
    <CardCellLayout>
      <div className={classes.cell}>
        <div className={classes.title}>
          <h2>{title}</h2>
          <h1>{data}</h1>
        </div>
        <div className={classes.bottom}>
          <div>{description}</div>
          <div>
            <DeleteButton>Done!</DeleteButton>
            {type === "inProgress" && <AcceptButton>Done!</AcceptButton>}
          </div>
        </div>
      </div>
    </CardCellLayout>
  );
};
export default Cell;
