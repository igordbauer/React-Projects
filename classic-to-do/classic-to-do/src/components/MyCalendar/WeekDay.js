import classes from './WeekDay.module.css'

const WeekDay = ({ day }) => {
  return (
    <div className={classes.main}>
      {day}
    </div>
  )
}
export default WeekDay;