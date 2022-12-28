const DIVISIONS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];

//----------------------------------------------------------------

const english = new Intl.RelativeTimeFormat("en-us");
const brazilian = new Intl.RelativeTimeFormat("pt-br");

//style

const long = new Intl.RelativeTimeFormat("en-us", { style: "long" });
const short = new Intl.RelativeTimeFormat("en-us", { style: "short" });
const narrow = new Intl.RelativeTimeFormat("en-us", { style: "narrow" });

//This determines if the formatted value should always be numeric

const always = new Intl.RelativeTimeFormat("en-us", { numeric: "always" });
const auto = new Intl.RelativeTimeFormat("pt-br", { numeric: "auto" });

// practice

const formatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: "auto",
});
const formatTime = (date) => {
  let duration = (date - new Date()) / 1000;

  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
};
const currentDate = new Date();

console.log(formatTime(new Date().setMonth(currentDate.getMonth() - 2)));
// 2 months ago
console.log(formatTime(new Date().setDate(currentDate.getDate() - 1)));
// yesterday
console.log(formatTime(new Date().setDate(currentDate.getDate() - 9)));
// last week

// console.log(always.format(0, 'hours'))
// console.log(auto.format(0, 'hours'))
// console.log(brazilian.format(0, 'hours'))
