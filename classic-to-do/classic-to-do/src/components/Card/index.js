import classes from "./Card.module.css";

const Card = ({ children }) => {
  return <section className={classes.main}>{children}</section>;
};
export default Card;
