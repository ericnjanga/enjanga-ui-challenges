🔒 Closures, Prototypes, and this
---------------------


[✅] Closure-based Counter
-------
  - Build a createCounter function that returns increment, decrement, and reset functions.
  - Requirements:
      - State must be private (closure).
      - Multiple counters shouldn’t interfere with each other.


[✅] Prototype Chain Debugger
-------
  - Write a function getPrototypeChain(obj) that returns an array of constructor names in its prototype chain.
  - Test it on built-in objects ([], {}, new Date()) and your own custom classes.


[✅] Fixing this
-------
  - Create an object with a method that uses setTimeout to log its name after 1 second.
  - Make it fail (loses this) and then fix it with:
      - bind
      - arrow functions
      - saving const self = this
