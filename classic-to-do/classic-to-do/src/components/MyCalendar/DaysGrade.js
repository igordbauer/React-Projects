import classes from './DaysGrade.module.css'
import DayCell from './DayCell';

const DaysGrade = ({ vector }) => {
  return (
    <div className={classes.column}>{vector.map(e => {
      {/* if(e.day) */}
      return <DayCell day={e.day} />
    }
    )}
    </div>
  )
}
export default DaysGrade;