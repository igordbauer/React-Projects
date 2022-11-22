import { useRef, useContext } from 'react';
import classes from './ProfileForm.module.css';
import { API_KEY } from '../../App';
import AuthContext from '../../store/authContext';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {

  const { replace } = useHistory();
  const newPasswordInputRef = useRef();
  const { token } = useContext(AuthContext);
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        idToken: token,
        password: enteredNewPassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      replace('/')
    })
  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength='7' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
