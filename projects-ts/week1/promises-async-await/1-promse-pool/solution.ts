type tasksType = Promise<unknown>[];


const promisePool = async(tasks: tasksType, limit: number): Promise<string[]> => {
  let currentIndex = 0;
  const operationsLog: string[] = [];

  // Recursive function that executes the next task in the array and records its execution duration
  const nextTast = async() => {
    // Stop execution if pointer has reached the array's end
    if (currentIndex >= tasks.length) return;

    // Point to current task while incrementing index for next possible task
    let i = currentIndex ++;  
    const task = tasks[i];

    // Start task, record its start time, wait for it, and record its completion time
    const start = Date.now();
    if (task) await task;
    const end = Date.now();

    // Save task completion log
    operationsLog.push(`Task ${i} completed in ${end - start} ms.`);

    // Execute itself
    return nextTast();
  };

  // Create a taks pool and fill it
  const taskPool = [];
  for (let j=0 ; j < Math.min(limit, tasks.length) ; j++) {
    taskPool.push(nextTast());
  }

  // Wait for all tasks to complete before returning the operations log
  await Promise.all(taskPool);

  return operationsLog;
};


// Example usage
// Simulated async download task
const createTask = (id: number, ms: number): Promise<Number> => new Promise((resolve) => setTimeout(resolve, ms));

const tasksList = [
  createTask(1, 3000),
  createTask(2, 1200),
  createTask(3, 2100),
  createTask(4, 500),
  createTask(5, 1000),
  createTask(6, 4000),
  createTask(7, 1500),
  createTask(8, 900),
  createTask(9, 400),
  createTask(10, 1100),
];

(async () => {
  const logs = await promisePool(tasksList, 4);
  console.log(logs);
})();