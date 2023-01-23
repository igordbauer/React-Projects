import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../../store/formSlice";
import { calendarActions } from "../../store/calendarSlice";
import { useNavigate } from "react-router";
import TextField from "../TextField";
import FormCard from "../FormCard";
import { Button } from "../Button";
import classes from "./TaskForm.module.css";
import { monthEnum } from "../../utils/enums";

const TaskForm = () => {
  const navigate = useNavigate();
  const title = useSelector((state) => state.formReducer.title);
  const description = useSelector((state) => state.formReducer.description);
  const choosenDay = useSelector((state) => state.chosenDayReducer);
  const dispatch = useDispatch();

  const titleHandler = (event) => {
    dispatch(formActions.titleHandler(event.target.value));
  };
  const descriptionHandler = (event) => {
    dispatch(formActions.descriptionHandler(event.target.value));
  };

  const submitHandler = (event) => {
    const id = crypto.randomUUID();
    const date = new Date(Date.now()).toDateString();
    event.preventDefault();
    dispatch(formActions.titleHandler(""));
    dispatch(formActions.descriptionHandler(""));
    dispatch(
      calendarActions.taskHandler({
        id: id,
        month: monthEnum[choosenDay.month],
        day: choosenDay.day,
        title: title,
        date: date,
        type: "inProgress",
        description: description,
      })
    );
    navigate("/MyTasks");
  };

  return (
    <FormCard>
      <form className={classes.main} onSubmit={submitHandler}>
        <div>
          <div className={classes.formLabel}>
            <label>What are you planing to do?</label>
            <TextField onChange={titleHandler} value={title} />
          </div>
          <div className={classes.formLabel}>
            <label>Give me some details please?!</label>
            <TextField
              multiline
              onChange={descriptionHandler}
              value={description}
            />
          </div>
        </div>
        <div>
          <Button type="submit">Let's go with this!</Button>
        </div>
      </form>
    </FormCard>
  );
};
export default TaskForm;
