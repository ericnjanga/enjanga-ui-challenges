import React, { useState } from 'react';
import { data } from '../data';

function ListWithBadKeys() {
  const [items, setItems] = useState(data);

  const shuffle = () => {
    setItems([...items].sort(() => Math.random() - 0.5));
  };

  return (
    <div>
      <h2>Improper Keys (using index)</h2>
      <button onClick={shuffle}>Shuffle</button>
      <ul>
        {items.map((item, index) => (
          // ❌ BAD: using index as key
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListWithBadKeys;
