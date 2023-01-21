import { useSelector } from "react-redux";

const useChoosenDay = () => {
  const calendar = useSelector((state) => state.calendarReducer);
  const choosenDay = useSelector((state) => state.chosenDayReducer);
  const monthObject = calendar.filter(
    (month) => month.name === choosenDay.month
  );
  const dayObject = monthObject[0].days.filter(
    (e) => e.day === choosenDay.day
  )[0];
  return {
    inProgress: dayObject.taskList.inProgress,
    finished: dayObject.taskList.finished,
  };
};
export default useChoosenDay;
