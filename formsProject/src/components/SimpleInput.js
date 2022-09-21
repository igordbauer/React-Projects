import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== ''
  // const enteredAgeIsValid = 
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  let formIsValid = false

  if (enteredNameIsValid) {
    formIsValid = true
  }


  const nameInputChangeHandler = (event) => {
    const { value } = event.target
    setEnteredName(value)
  }
  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
  }
  const formSubmitHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouched(true)
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName)
    setEnteredName('')
    setEnteredNameTouched(false)
  }
  const namInputClasses = nameInputIsValid
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={namInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}

        />
        {nameInputIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
