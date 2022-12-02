import { useSelector, useDispatch } from 'react-redux';
import { formActions } from '../../store/formSlice';
import TextField from '../TextField';
import classes from './TaskForm.module.css'

const TaskForm = () => {

  const title = useSelector(state => state.formReducer.title)
  const description = useSelector(state => state.formReducer.description)
  const dispatch = useDispatch();
  console.log(title)
  const titleHandler = (event) => dispatch(formActions.titleHandler(event.target.value))

  return (
    <section className={classes.card}>
      <div>
<TextField onChange={titleHandler} value={title}/>
          <input label='asd' onChange={titleHandler} value={title} />
      </div>
    </section>
  )
}
export default TaskForm;