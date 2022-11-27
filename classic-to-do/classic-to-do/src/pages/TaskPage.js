import { useSelector } from "react-redux";
import Table from "../components/Table";

const TaskPage = () => {
  const notStarted = useSelector(state => state.taskReducer.notStarted)
  const inProgress = useSelector(state => state.taskReducer.inProgress)
  const finished = useSelector(state => state.taskReducer.finished)
  return (
    <>
      <Table tasks={notStarted} />
      <Table tasks={inProgress} />
      <Table tasks={finished} />
    </>
  )
}
export default TaskPage;