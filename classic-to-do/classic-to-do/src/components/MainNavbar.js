import classes from './MainNavbar.module.css'
import Button from './Button';

const MainNavbar = () => {
  return (
    <header className={classes.navbar}>
      <div>
        <Button>Create task</Button>
      </div>
    </header>
  )
}
export default MainNavbar;