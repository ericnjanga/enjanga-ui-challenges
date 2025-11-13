import React from 'react';
import { List } from 'react-window';
import { data } from '../data';


/**
 * https://react-window.vercel.app/list/fixed-row-height
 * react-window is a component library that helps render large lists of data quickly and without the performance problems that often go along with rendering a lot of data. It's used in a lot of places, from React DevTools to the Replay browser.
 */

type RowType = {
  index: number;
  style: React.CSSProperties
};

const Row = ({ index, style }: RowType) => (
  <div style={style}>
    {data[index]?.name}
  </div>
);

function VirtualizedList() {
  return (
    <div>
      <h2>Virtualized (react-window)</h2>
      <List
        rowComponent={Row}
        rowCount={1000}
        rowHeight={25}
        rowProps={ ['col'] }
      />
    </div>
  );
}

export default VirtualizedList;
