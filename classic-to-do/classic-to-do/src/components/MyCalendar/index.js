import { useSelector } from "react-redux";
import { useMemo, useState, useCallback } from "react";
import { weekEnum, monthsEnum, weekIndexOfEnum } from "../../utils/enums";
import classes from './MyCalendar.module.css'
import WeekDay from "./WeekDay";
import Button from "../Button";
import DaysGrade from "./DaysGrade";
const nullDay = { day: -1 }



const MyCalendar = () => {
  console.log('render')
  const [month, setMonth] = useState(new Date().getMonth())
  const calendar = useSelector(state => state.calendarReducer)
  const monthSelected = useMemo(() => Object.keys(monthsEnum)[month], [month])
  const choosenMonth = calendar.filter(e => e.name === monthSelected)[0].days
  const firstDayofMonth = choosenMonth.filter(e => e.day === 1)[0].weekDay
  const choosenMonthWithNullDays = [
    ...[...Array(weekIndexOfEnum[firstDayofMonth])]
      .map((e, i) => ({ day: -1, weekDay: weekEnum[i] })),
    ...choosenMonth
  ]
  console.log(choosenMonthWithNullDays)
  const calculateDays = useCallback(() => ({
    sundayDays: (choosenMonthWithNullDays) => choosenMonthWithNullDays.filter(e => e.weekDay === weekEnum[0]),
    mondayDays: (choosenMonthWithNullDays) => choosenMonthWithNullDays.filter(e => e.weekDay === weekEnum[1]),
    tuesdayDays: (choosenMonthWithNullDays) => choosenMonthWithNullDays.filter(e => e.weekDay === weekEnum[2]),
    wednesdayDays: (choosenMonthWithNullDays) => choosenMonthWithNullDays.filter(e => e.weekDay === weekEnum[3]),
    thursdayDays: (choosenMonthWithNullDays) => choosenMonthWithNullDays.filter(e => e.weekDay === weekEnum[4]),
    fridayDays: (choosenMonthWithNullDays) => choosenMonthWithNullDays.filter(e => e.weekDay === weekEnum[5]),
    saturdayDays: (choosenMonthWithNullDays) => choosenMonthWithNullDays.filter(e => e.weekDay === weekEnum[6]),
  }), [])
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
        </div>
        <div className={classes.daysGrade} >
          <DaysGrade vector={calculateDays().sundayDays(choosenMonthWithNullDays)} />
          <DaysGrade vector={calculateDays().mondayDays(choosenMonthWithNullDays)} />
          <DaysGrade vector={calculateDays().tuesdayDays(choosenMonthWithNullDays)} />
          <DaysGrade vector={calculateDays().wednesdayDays(choosenMonthWithNullDays)} />
          <DaysGrade vector={calculateDays().thursdayDays(choosenMonthWithNullDays)} />
          <DaysGrade vector={calculateDays().fridayDays(choosenMonthWithNullDays)} />
          <DaysGrade vector={calculateDays().saturdayDays(choosenMonthWithNullDays)} />
        </div>
      </section>
    </>
  )
}
export default MyCalendar;