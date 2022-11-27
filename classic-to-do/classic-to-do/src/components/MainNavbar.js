import classes from './MainNavbar.module.css'
import Button from './Button';

const MainNavbar = () => {
  return (
    <header className={classes.header}>
      <div>
        <h3>Classic To Do</h3>
      </div>
      <div className={classes.button}>
        <Button>Create task</Button>
        <Button>My tasks</Button>
      </div>
    </header>
  )
}
export default MainNavbar;