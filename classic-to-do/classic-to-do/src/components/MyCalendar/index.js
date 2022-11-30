import { useSelector } from "react-redux";
import { useMemo, useState } from "react";
import { weekEnum, monthsEnum } from "../../utils/enums";
import classes from './MyCalendar.module.css'
import WeekDay from "./WeekDay";
import Button from "../Button";
import DaysGrade from "./DaysGrade";

const calculateDays = {
  sundayDays: (choosenMonth) => choosenMonth.filter(e => e.weekDay === weekEnum[0]),
  mondayDays: (choosenMonth) => choosenMonth.filter(e => e.weekDay === weekEnum[1]),
  tuesdayDays: (choosenMonth) => choosenMonth.filter(e => e.weekDay === weekEnum[2]),
  wednesdayDays: (choosenMonth) => choosenMonth.filter(e => e.weekDay === weekEnum[3]),
  thursdayDays: (choosenMonth) => choosenMonth.filter(e => e.weekDay === weekEnum[4]),
  fridayDays: (choosenMonth) => choosenMonth.filter(e => e.weekDay === weekEnum[5]),
  saturdayDays: (choosenMonth) => choosenMonth.filter(e => e.weekDay === weekEnum[6]),
}

const MyCalendar = () => {

  const [month, setMonth] = useState(new Date().getMonth())
  const calendar = useSelector(state => state.calendarReducer)
  const monthSelected = useMemo(() => Object.keys(monthsEnum)[month], [month])
  const choosenMonth = calendar.filter(e => e.name === monthSelected)[0].days

  console.log(calendar)

  const previousMonthHandler = () => {
    setMonth(prev => {
      if (prev === 0) {
        return 11
      }
      return prev - 1
    })
  }
  const nextMonthHandler = () => {
    setMonth(prev => {
      if (prev === 11) {
        return 0
      }
      return prev + 1
    })
  }
console.log(calculateDays.saturdayDays(choosenMonth))
  const weekDays = useMemo(() => Object.values(weekEnum), [])
  return (
    <>
      <section>
        <div className={classes.yearLabel}>
          <Button onClick={previousMonthHandler}>previous</Button>
          {monthSelected}
          <Button onClick={nextMonthHandler}>next</Button>
        </div>
        <div className={classes.weekDays}>
          {weekDays.map(day => (
            <WeekDay key={day} day={day} />
          ))}
          <div>
            <DaysGrade vector={calculateDays.sundayDays(choosenMonth)} />
            <DaysGrade vector={calculateDays.mondayDays(choosenMonth)} />
            <DaysGrade vector={calculateDays.tuesdayDays(choosenMonth)} />
            <DaysGrade vector={calculateDays.wednesdayDays(choosenMonth)} />
            <DaysGrade vector={calculateDays.thursdayDays(choosenMonth)} />
            <DaysGrade vector={calculateDays.fridayDays(choosenMonth)} />
            <DaysGrade vector={calculateDays.saturdayDays(choosenMonth)} />
          </div>
        </div>
      </section>
    </>
  )
}
export default MyCalendar;