import Cell from "../Cell";
import Card from "../Card";
const Table = ({ tasks }) => {
  return (
    <Card>
      {tasks.map(({ id, title, description, data }) => (
        <Cell
          key={id}
          id={id}
          title={title}
          description={description}
          data={data}
        />
      ))}
    </Card>
  );
};
export default Table;
