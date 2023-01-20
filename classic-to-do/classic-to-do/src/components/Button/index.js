import classes from "./Button.module.css";

const Button = ({ children, onClick, ...rest }) => {
  return (
    <button {...rest} onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
};
export default Button;
