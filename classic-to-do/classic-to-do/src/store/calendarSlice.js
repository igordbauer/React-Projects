import { createSlice } from "@reduxjs/toolkit";

export const monthsEnum = {
  January: { days: 31, name: 'January', },
  February: { days: 28, name: 'February', },
  March: { days: 31, name: 'March', },
  April: { days: 30, name: 'April', },
  May: { days: 31, name: 'May', },
  June: { days: 30, name: 'June', },
  July: { days: 31, name: 'July', },
  August: { days: 31, name: 'August', },
  September: { days: 30, name: 'September' },
  October: { days: 31, name: 'October', },
  November: { days: 30, name: 'November', },
  December: { days: 31, name: 'December' },
}
export const weekEnum = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}


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


// export const calendarSlice = createSlice({
//     name: 'calendar',
//     initialState:,
//     reducers: {

//     }
// })