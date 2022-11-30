const DaysGrade = (vector) => {
  return (
    <div>
      {vector.map(day=>(
        <div>{day}</div>
      ))}
    </div>
  )
}
export default DaysGrade;