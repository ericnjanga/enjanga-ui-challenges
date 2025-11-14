import { memo, useState } from 'react';
import { data } from '../data';

const ListItem = memo(({ name }: { name: string}) => {
  console.log('Rendering:', name);
  return <li>{name}</li>;
});

function ListWithMemo() {
  const [count, setCount] = useState(0);

  return (
    <div id="2">
      <h2>With React.memo</h2>
      <button onClick={() => setCount((c) => c + 1)}>Re-render ({count})</button>
      <ul>
        {data.map((item) => (
          <ListItem key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ListWithMemo;
