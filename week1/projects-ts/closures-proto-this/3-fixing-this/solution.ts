/**
 * SOLUTION
 * -------------------- 
 */

// Failure:
// Explanation: The regular function has its own "this" (which defaults to window or undefined in strict mode), so this.name doesn't refer to the object anymore.
const person1 = {
  name: 'Doris',
  sayName () {
    setTimeout(function() {
      console.log(`(1) My name is ${this.name}`);
    }, 1000);
  }
};
person1.sayName();


// Fix 1: Bind
// Explanation: bind(this) forces the callback to use the same "this" as the outer method
const person2 = {
  name: 'Doris',
  sayName () {
    setTimeout(function() {
      console.log(`(2) My name is ${this.name}`);
    }.bind(this), 1000);
  }
};
person2.sayName();


// Fix 2: Arrow function
// Explanation: Arrow functions don't have their own "this", so they inherit "this" from the enclosing scope (the object method)
const person3 = {
  name: 'Doris',
  sayName () {
    setTimeout(() => {
      console.log(`(3) My name is ${this.name}`);
    }, 1000);
  }
};
person3.sayName();


// Fix 3: const self = this
// By saving "this" into a variable (self), we keep a reference that can be accessed inside the callback.
const person4 = {
  name: 'Doris',
  sayName () {
    const self = this;
    setTimeout(function() {
      console.log(`(4) My name is ${self.name}`);
    }, 1000);
  }
};
person4.sayName();
