import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


const Comp = ({ prop }:{ prop?: string }) => {
  console.log(`Rendering... ${prop}`);
  return <div>{ prop ?? 'No props' }</div>
};

// QUESTION 1: What's the difference between React.memo and React.useMemo?
/**
 * React.memo is a Higher-Order Component that memoizes an entire functional component to prevent unnecessary re-renders when props don't change.
 * React.useMemo is a Hook that memoizes a computed value within a component to prevent expensive calculations from running on every render.
 */
const MemoComp = React.memo(Comp);
 

const App = () => {
  const [number, setNumber] = useState<number>(0);

  // QUESTION 2: Why using UseEffect here?
  /**
   * useEffect:
   * - Provides the proper lifecycle management for side effects like timers, subscriptions, and API calls.
   * - Is necessary in this case to properly set up and clean up the interval and to prevent the interval from being reset on every render.
   * 
   * Without it, we'll have:
   * - Memory leaks: New interval created on every render
   * - No cleanup: Intervals accumulate and never get cleared
   * - Performance issues: Multiple intervals running simultaneously
   * 
   * Empty Dependency Array [] ensures:
   * - Interval is set up only once when component mounts
   * - Cleanup function runs only when component unmounts
   * - No unnecessary re-creations of the interval
   */
  useEffect(() => {
    const ms = 1000;
    const step = 10;
    const timeout = setInterval(() => setNumber((prev) => prev + step), ms);

    return () => clearInterval(timeout); // clean up on unmount
  }, []);

  return (
    <div>
     <h1>{number}</h1>
     <Comp prop="Child 1" />
     <Comp prop={`Child 2 "${number}"`} />
     <MemoComp prop={`Child 3 (Memoized)`} />
     <MemoComp prop={`Child 4 (Memoized) "${number}"`} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
