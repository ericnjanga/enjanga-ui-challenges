
import { data } from '../data';

function ListWithoutOptimization() {
  return (
    <div id="1">
      <h2>Without Optimization</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {Math.random()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListWithoutOptimization;


