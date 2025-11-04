

const withTimeout = <T>(promise: Promise<T>, ms: number): Promise<T> => {
  return new Promise((resolve, reject) => {
    // Reject with a message if the timeout has been reached
    const timer = setTimeout(() => reject(new Error('Timeout reached!')), ms);

    // Otherwise resolve with the promise's result
    promise
      .then(result => {
        clearTimeout(timer); // No more need of timeout rejection (we'll resolve ourselves)
        resolve(result);
      })
      .catch(error => {
        clearTimeout(timer); // No more need of timeout rejection (we'll reject ourselves)
        reject(error);
      });
  });
};


// Example: Simulate promises
const createTask = async(ms: number) => {
  return new Promise(resolve => {
    setTimeout(() => resolve('success!'), ms)
  });
};


// Execution
(async() => {
  try {
    const result = await withTimeout(createTask(3000), 1000);
    console.log(result); 
  } catch (error) {
    console.error(error); 
  }
})();