import classes from "./TextField.module.css";

const TextField = ({ value, onChange, multiline }) => {
  return (
    <>
      {multiline ? (
        <textarea
          rows="10"
          cols="30"
          type="text"
          placeholder="Tell me all the nuanses about what you're planing to do!"
          className={classes.multiline}
          onChange={onChange}
          value={value}
        />
      ) : (
        <input
          rows="10"
          cols="30"
          placeholder="Let's put some nice name on this."
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
