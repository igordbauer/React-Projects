import classes from "./DaysGrade.module.css";
import DayCell from "../DayCell";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { chosenDayActions } from "../../../store/chosenDaySlice";

const DaysGrade = ({ vector }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chosenDayHandler = async (object) => {
    console.log(object);
    await dispatch(chosenDayActions.setDay(object));
    navigate("/MyTasks");
  };

  return (
    <div className={classes.column}>
      {vector.map((e) => (
        <DayCell onClick={() => chosenDayHandler(e)} key={e.day} day={e.day} />
      ))}
    </div>
  );
};
export default DaysGrade;
