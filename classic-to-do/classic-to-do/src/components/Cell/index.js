import classes from './Cell.module.css'
import CardCellLayout from './CardCellLayout';
const Cell = ({
  id, data, title, description
}) => {
  return (
    <CardCellLayout>
      <div className={classes.cell}>
        <div className={classes.title}>
          <h2>
            {title}
          </h2>
          <h1>
            {data}
          </h1>
        </div>
        <div>
          {description}
        </div>
      </div>
    </CardCellLayout>
  );
}
export default Cell;