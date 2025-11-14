import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";


const Comp = ({ prop }:{ prop?: string }) => {
  console.log(`Rendering ${prop}`);
  return <div>{prop}</div>
};

const MemoComp = React.memo(Comp);

const App = () => {
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    const ms = 1000, step = 10;
    const interval = setInterval(() => setNumber((prev) => prev + step), ms);

    return () => clearInterval(interval)
  }, []);

  return (
    <div>
      <h1>{number}</h1>
      <Comp prop="Child 1" />
      <Comp prop={`Child 2 "${number}"`} />
      <MemoComp prop="(Memoized) Child 3" />
      <MemoComp prop={`(Memoized) Child 4 "${number}"`} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
