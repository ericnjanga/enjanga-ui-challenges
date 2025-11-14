import ReactDOM from "react-dom/client";

import * as ReactWindow from 'react-window';
console.log(ReactWindow);



const App = () => {
  return (
    <div style={{ padding: 20 }}>
      
      <h1>Hooks</h1>
    
    </div>
  )
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
