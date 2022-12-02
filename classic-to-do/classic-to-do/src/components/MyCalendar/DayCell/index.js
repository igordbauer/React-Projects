import classes from './DayCell.module.css'

const DayCell = ({ day }) => {
  const classe = day!==-1 ? classes.daycell : classes.daycellnull
  return <button className={classe}>{day === -1 ? null : day}</button>
}
export default DayCell;