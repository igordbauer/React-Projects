import classes from "./Button.module.css";

export const Button = ({ children, onClick, ...rest }) => {
  return (
    <button {...rest} onClick={onClick} className={classes.button}>
      {children}
    </button>
  );
};

export const AcceptButton = ({ children, onClick, ...rest }) => {
  return (
    <button {...rest} onClick={onClick} className={classes.accept}>
      {children}
    </button>
  );
};
export const DeleteButton = ({ children, onClick, ...rest }) => {
  return (
    <button {...rest} onClick={onClick} className={classes.delete}>
      {children}
    </button>
  );
};
