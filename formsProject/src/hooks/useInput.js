import { useState } from "react";


const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue)
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    const { value } = event.target
    setEnteredValue(value)
  }
  const inputBlurHandler = () => {
    setIsTouched(true)
  }

  const reset = () => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    reset,
    valueChangeHandler,
    inputBlurHandler
  }

}
export default useInput;