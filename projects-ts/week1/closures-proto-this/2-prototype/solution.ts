const getPrototypeChain = (obj: unknown): string[] => {
  const chain: string[] = [];

  // Special case: object has no prototype (for example: Object.create(null, {...}))
  if (obj === null) return ['<null>'];

  // we navigate through the prototype
  let proto = Object.getPrototypeOf(obj);
  while (proto !== null) {
    const constructorName = proto.constructor?.name ?? '<no constructor>';
    chain.push(constructorName);
    proto = Object.getPrototypeOf(proto);
  }

  // we have reached the end of the prototype chain
  chain.push('<null>');

  return chain;
};
class A {}
class B extends A {}
class C extends B {}


console.log(getPrototypeChain({}));
console.log(getPrototypeChain([]));
console.log(getPrototypeChain(new Date()));
console.log(getPrototypeChain(new C()));