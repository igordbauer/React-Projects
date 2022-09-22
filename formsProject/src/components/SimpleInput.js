import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== ''
  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@') && enteredEmail.includes('.com')
  // const enteredAgeIsValid = 
  const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const nameInputChangeHandler = (event) => {
    const { value } = event.target
    setEnteredName(value)
  }
  const emailInputChangeHandler = (event) => {
    const { value } = event.target
    setEnteredEmail(value)
  }

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true)
  }
  const emailInputBlurHandler = () => {
    setEnteredEmailTouched(true)
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    setEnteredNameTouched(true)
    setEnteredEmailTouched(true)
    if (!enteredNameIsValid) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }
    console.log(enteredName, enteredEmail)
    setEnteredName('')
    setEnteredEmail('')
    setEnteredNameTouched(false)
    setEnteredEmailTouched(false)
  }
  const namInputClasses = nameInputIsValid
    ? 'form-control invalid'
    : 'form-control'
  const emailInputClasses = emailInputIsValid
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
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input
          type='text'
          id='email'
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}

        />
        {emailInputIsValid && <p className="error-text">E-mail is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
