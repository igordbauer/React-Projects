import classes from './Table.module.css'
import Cell from '../Cell';
import { cells } from '../../constant/cells';

const Table = () => {
  return (
    <section className={classes.main}>
      {cells.map(({
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