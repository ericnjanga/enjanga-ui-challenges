⏳ Promises & Async/Await
---------------------

[✅] Promise Pool
-------
  - Implement a function promisePool(tasks, limit) that runs async tasks with a concurrency limit.
  - Example: Download 10 files, but only 3 at a time.

  NOTE: Concurrency is the ability to manage multiple tasks that appear to run at the same time, without them blocking each other. This is particularly important for web browsers, as it allows your application to remain responsive while performing long-running operations like fetching data from an API. 

[✅] Sequential vs Parallel
-------
  (This is a super common exercise to learn the difference between sequential vs parallel async execution in JavaScript)
  - Write a function that fetches data from 3 mock APIs (setTimeout or fetch mock).
  - Run them:
      - Sequentially (await in a loop).
      - In parallel (Promise.all).
  - Log how long each takes.

[3.] Timeout Wrapper
-------
  - Implement withTimeout(promise, ms) which rejects if the promise doesn’t resolve in ms milliseconds.
