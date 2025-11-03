/**
 * SOLUTION
 * -------------------- 
 */

type CounterType = {
  increment: (step?: number) => number;
  decrement: (step?: number) => number;
  reset: () => void; 
  getCount: () => number;
};

const createCounter = (): CounterType => {
  let count = 0;

  const increment = (step: number = 1): number => count += step;
  const decrement = (step: number = 1): number => count -= step;
  const reset = () => count = 0;
  const getCount = () => count;

  return { increment, decrement, reset, getCount };
};



const counters = [
  createCounter(),
  createCounter(),
  createCounter()
];


counters[0]?.decrement(4);
counters[1]?.increment(13);
counters[2]?.decrement(6);
counters[1]?.reset();


for (let val of counters) {
  console.log(val.getCount());
}