import classes from './TextField.module.css'

const TextField = ({
  value,
  onChange
}) => {
  return (
    <div>
      <input className={classes.input} onChange={onChange} value={value} />
    </div>
  )
}
export default TextField;