import classes from "./TextField.module.css";

const TextField = ({ value, onChange, multiline }) => {
  return (
    <>
      {multiline ? (
        <textarea
          rows="10"
          cols="30"
          type="text"
          className={classes.multiline}
          onChange={onChange}
          value={value}
        />
      ) : (
        <input
          rows="10"
          cols="30"
          type="text"
          className={classes.input}
          onChange={onChange}
          value={value}
        />
      )}
    </>
  );
};
export default TextField;
