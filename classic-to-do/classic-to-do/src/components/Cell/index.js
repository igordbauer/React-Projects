import classes from "./Cell.module.css";
import { BsFillTrashFill, BsCheckCircleFill } from "react-icons/bs";
import { AcceptButton, DeleteButton } from "../Button";
import { calendarActions } from "../../store/calendarSlice";
import { monthEnum } from "../../utils/enums";
import { useDispatch, useSelector } from "react-redux";
import CardCellLayout from "./CardCellLayout";
import { typeTask } from "../../utils/enums";
import Emoji from "a11y-react-emoji";

const Cell = ({ id, data, title, description, type }) => {
  const dispatch = useDispatch();
  const choosenDay = useSelector((state) => state.chosenDayReducer);

  const taskDoneHandler = () => {
    dispatch(
      calendarActions.taskHandler({
        id: id,
        month: monthEnum[choosenDay.month],
        day: choosenDay.day,
        title: title,
        date: data,
        description: description,
        type: typeTask.finished,
      })
    );
    deleteTaskHandler();
  };

  const deleteTaskHandler = () => {
    dispatch(
      calendarActions.deleteTask({
        id: id,
        month: monthEnum[choosenDay.month],
        day: choosenDay.day,
        type: type,
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
            <BsFillTrashFill
              onClick={deleteTaskHandler}
              color="rgba(230, 81, 76, 0.6)"
            />
            {type === typeTask.inProgress && (
              <BsCheckCircleFill
                onClick={taskDoneHandler}
                color=" rgb(5, 230, 35)"
              />
            )}
          </div>
        </div>
      </div>
    </CardCellLayout>
  );
};
export default Cell;
