import classes from './DayCell.module.css'

const DayCell = ({ day }) => {
  return <button className={classes.daycell}>{day === -1 ? null : day}</button>
}
export default DayCell;