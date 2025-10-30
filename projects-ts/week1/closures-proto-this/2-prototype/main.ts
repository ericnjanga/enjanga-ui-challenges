
// const getPrototypeChain = (obj: unknown): string[] => {
//   // Edge case: objects with a null prototype (like the ones created with Object.create(null))
//   if (obj === null) return ['<null>'];

//   const chain: string[] = [];
//   let proto = Object.getPrototypeOf(obj);

//   while (proto !== null) {
//     const constructorName = proto.constructor?.name ?? '<no constructor>';
//     chain.push(constructorName);
//     proto = Object.getPrototypeOf(proto);
//   }

//   chain.push('<null>');

//   return chain;
// };

// // Test ...
// console.log('1- ', getPrototypeChain([]));
// console.log('2- ', getPrototypeChain({}));
// console.log('3- ', getPrototypeChain(new Date()));

// // Test with custom classes
// class Animal {}
// class Bird extends Animal {}
// class Eagle extends Bird {}

// const e = new Eagle();
// console.log('4- ', getPrototypeChain(e));

// // Edge case: Object.create(null)
// const objx = Object.create(null);
// const objy = Object.create(null, {});
// console.log('5- ', getPrototypeChain(objx));
// console.log('6- ', getPrototypeChain(objy));

