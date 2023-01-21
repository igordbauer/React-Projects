import Table from "../components/Table";
import useChoosenDay from "../hooks/useChoosenDay";
import { useSelector } from "react-redux";

const TaskPage = () => {
  const { inProgress, finished } = useChoosenDay();
  const choosenDay = useSelector((state) => state.chosenDayReducer);
  console.log(choosenDay);
  return (
    <>
      <Table
        tasks={inProgress}
        label={"Let's get it done partner!!"}
        emoji="&#128076;"
      />
      <Table
        tasks={finished}
        label={"That's fantastic, you nailed it!!"}
        emoji="&#128526;"
      />
    </>
  );
};
export default TaskPage;
