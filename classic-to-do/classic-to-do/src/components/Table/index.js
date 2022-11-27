import classes from './Table.module.css'
import Cell from '../Cell';

const Table = ({ tasks }) => {
  return (
    <section className={classes.main}>
      {tasks.map(({
        id, title, description, data,
      }) => (
        <Cell
          key={id}
          id={id}
          title={title}
          description={description}
          data={data}
        />
      ))}
    </section>
  );
}
export default Table;