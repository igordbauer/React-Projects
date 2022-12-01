import classes from './DayCell.module.css'

const DayCell = ({day}) => {
  return <button className={classes.daycell}>{day}</button>
}
export default DayCell;