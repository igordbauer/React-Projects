import { useSelector } from "react-redux";
import Table from "../components/Table";

const TaskPage = () => {
  const inProgress = useSelector((state) => state.taskReducer.inProgress);
  const finished = useSelector((state) => state.taskReducer.finished);
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
