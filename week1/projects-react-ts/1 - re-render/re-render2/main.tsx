import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import ListWithoutOptimization from "./solution/components/ListWithoutOptimization";
import ListWithMemo from "./solution/components/ListWithMemo";
import ListWithBadKeys from "./solution/components/ListWithBadKeys";
import VirtualizedList from "./solution/components/VirtualizedList";
import './app.css';

import * as ReactWindow from 'react-window';
console.log(ReactWindow);



const App = () => {
  return (
    <div style={{ padding: 20 }}>
      <nav className="nav">
        <ul>
          <li><a href="#1">List Without Optimization</a></li> | 
        <li><a href="#2">List With Memo</a></li> | 
        <li><a href="#3">List With Bad Keys</a></li> | 
        <li><a href="#4">Virtualized List</a></li>
        </ul>
      </nav>
      <h1>Build a large list (1000+ items)</h1>
      <ListWithoutOptimization />
      <hr />
      <ListWithMemo />
      <hr />
      <ListWithBadKeys />
      <hr />
      <VirtualizedList />
    </div>
  )
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
