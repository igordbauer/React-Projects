import classes from './DaysGrade.module.css'

const DaysGrade = ({vector}) => {
  return (
    <div className={classes.columnn}>{vector.map(e=>(<div>{e.day}</div>))}</div>
  )
}
export default DaysGrade;