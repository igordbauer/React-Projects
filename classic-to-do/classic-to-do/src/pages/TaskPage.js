import Table from "../components/Table";
import useChoosenDay from "../hooks/useChoosenDay";
import { typeTask } from "../utils/enums";

const TaskPage = () => {
  const { inProgress, finished } = useChoosenDay();
  return (
    <>
      <Table
        type={typeTask.inProgress}
        tasks={inProgress}
        label={"Let's get it done partner!!"}
        emoji="&#128076;"
      />
      <Table
        type={typeTask.finished}
        tasks={finished}
        label={"That's fantastic, you nailed it!!"}
        emoji="&#128526;"
      />
    </>
  );
};
export default TaskPage;
