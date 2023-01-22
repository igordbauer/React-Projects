import Table from "../components/Table";
import useChoosenDay from "../hooks/useChoosenDay";

const TaskPage = () => {
  const { inProgress, finished } = useChoosenDay();
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
