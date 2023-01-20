import classes from "./FormCard.module.css";

const FormCard = ({ children }) => {
  return <section className={classes.main}>{children}</section>;
};
export default FormCard;
