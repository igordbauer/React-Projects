import classes from "./Layout.module.css";
import { useSelector } from "react-redux";
const Layout = ({ children }) => {
  const choosenDay = useSelector((state) => state.chosenDayReducer);
  return (
    <>
      <div className={classes.label}>
        {choosenDay.month + " " + choosenDay.day + " " + choosenDay.weekDay}
      </div>
      <main className={classes.main}>{children}</main>
    </>
  );
};
export default Layout;
