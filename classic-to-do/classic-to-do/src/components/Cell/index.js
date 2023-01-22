import classes from "./Cell.module.css";
import { AcceptButton, DeleteButton } from "../Button";
import { calendarActions } from "../../store/calendarSlice";
import { monthEnum } from "../../utils/enums";
import { useDispatch, useSelector } from "react-redux";
import CardCellLayout from "./CardCellLayout";
const Cell = ({ id, data, title, description, type }) => {
  const dispatch = useDispatch();
  const choosenDay = useSelector((state) => state.chosenDayReducer);

  const deleteTaskHandler = () => {
    console.log("render");
    dispatch(
      calendarActions.deleteTask({
        id: id,
        month: monthEnum[choosenDay.month],
        day: choosenDay.day,
        type,
      })
    );
  };

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
            <DeleteButton onClick={deleteTaskHandler}>Delete</DeleteButton>
            {type === "inProgress" && <AcceptButton>Done!</AcceptButton>}
          </div>
        </div>
      </div>
    </CardCellLayout>
  );
};
export default Cell;
