import classes from './MainNavbar.module.css'
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const MainNavbar = () => {

  const navigate = useNavigate();

  const navigateToTaskHandler = () => navigate('/myTasks')
  const navigateToCreateTasksHandler = () => navigate('/createTasks')

  return (
    <header className={classes.header}>
      <div>
        <h3>Classic To Do</h3>
      </div>
      <div className={classes.button}>
        <Button onClick={navigateToCreateTasksHandler}>Create task</Button>
        <Button onClick={navigateToTaskHandler}>My tasks</Button>
      </div>
    </header>
  )
}
export default MainNavbar;