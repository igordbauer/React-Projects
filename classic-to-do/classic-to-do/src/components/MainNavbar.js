import classes from './MainNavbar.module.css'
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const MainNavbar = () => {

  const navigate = useNavigate();

  const navigateToTaskHandler = () => navigate('/myTasks')
  const navigateToCreateTasksHandler = () => navigate('/createTasks')
  const navigateToMyCalendar = () => navigate('/myCalendar')

  return (
    <header className={classes.header}>
      <div>
        <h3>Classic To Do</h3>
      </div>
      <div className={classes.button}>
        <Button onClick={navigateToTaskHandler}>My tasks</Button>
        <Button onClick={navigateToMyCalendar}>My calendar</Button>
        <Button onClick={navigateToCreateTasksHandler}>Create task</Button>
      </div>
    </header>
  )
}
export default MainNavbar;