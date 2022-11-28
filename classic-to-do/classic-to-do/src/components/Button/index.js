import classes from './Button.module.css'

const Button = ({
  children,
  onClick
}) => {
  return (
    <button onClick={onClick} className={classes.button}>
      {children}
    </button>
  )
}
export default Button