import classes from './DaysGrade.module.css'
import DayCell from '../DayCell'

const DaysGrade = ({ vector }) => {
  return (
    <div className={classes.column}>{vector.map(e => {
      return <DayCell key={e.day} day={e.day} />
    }
    )}
    </div>
  )
}
export default DaysGrade;