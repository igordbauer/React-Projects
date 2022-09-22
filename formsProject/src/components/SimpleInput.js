import useInput from "../hooks/useInput";

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    reset: resetNameHandler,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler
  } = useInput((value) => value.trim() !== '')
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    reset: resetEmailHandler,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler
  } = useInput((value) => value.trim() !== '' && value.includes('@') && value.includes('.com'))

  let formIsValid = false
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()
    if (!enteredNameIsValid) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }
    console.log(enteredName, enteredEmail)
    resetNameHandler()
    resetEmailHandler()
  }
  const namInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control'
  const emailInputClasses = emailInputHasError
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
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}

        />
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input
          type='text'
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}

        />
        {emailInputHasError && <p className="error-text">E-mail is not valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
