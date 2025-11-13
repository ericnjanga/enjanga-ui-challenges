import ReactDOM from "react-dom/client";
import ListWithoutOptimization from "./components/ListWithoutOptimization";
import ListWithMemo from "./components/ListWithMemo";
import ListWithBadKeys from "./components/ListWithBadKeys";
import VirtualizedList from "./components/VirtualizedList";

import * as ReactWindow from 'react-window';
console.log(ReactWindow);



const App = () => {
  return (
    <div style={{ padding: 20 }}>
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
