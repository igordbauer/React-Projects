import { monthsEnum, weekEnum } from "./enums"

export const generateCalendar = (year) => {
  const months = Object.keys(monthsEnum)
  return months.map(month => {
    const days = [
      ...Array((monthsEnum[month].name === 'February' &&
        year % 4 === 0) ? 29 : monthsEnum[month].days).keys()
    ].map(day => {
      const weekDay = new Date(`${month} ${day + 1}, ${year}`).getDay();

      return {
        day: day + 1,
        weekDay: weekEnum[weekDay]
      }
    })
    return {
      name: monthsEnum[month].name,
      days: days
    }
  })
}