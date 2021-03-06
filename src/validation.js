export const isString = s => Object.prototype.toString.call(s) === '[object String]';
export const isNumber = n => Object.prototype.toString.call(n) === '[object Number]';
export const isBool = arg => typeof arg === 'boolean';
export const isUndefined = arg => arg === undefined;
export const isNull = arg => arg === null;
export const isSymbol = arg => typeof arg === 'symbol';
// {}, [], Map, Set, String, Number ...
export const isObject = arg => typeof arg === 'object';
export const isPlainObject = arg => Object.prototype.toString.call(arg) === '[object Object]';
export const isArray = arg => Array.isArray(arg);
export const isFunction = fn => typeof fn === 'function';
export const isPromise = p => p instanceof Promise;
export const isMap = arg => arg instanceof Map;
export const isSet = arg => arg instanceof Set;
export const isArrayLike = arg => {
  if (!arg) return false;
  if (Array.isArray(arg)) return true;
  if (!isObject(arg)) return false;
  if (arg.nodeType === 1) return !!arg.length;
  if (arg.length === 0) return true;
  if (arg.length > 0)
    return (
      Object.prototype.hasOwnProperty.call(arg, 0)
      && Object.prototype.hasOwnProperty.call(arg, arg.length - 1)
    );
  return false;
};

/**
 * True: Array, Map, Set, Generator object, String
 * Iterable: The iterable is a interface that specifies that an object can be accessible
 * if it implements a method who is key is [symbol.iterator]
 */
// iterator[Symbol.iterator]() == iterator
export const isIterable = arg => Symbol.iterator in Object(arg);
export const isGenerator = fn =>
  isFunction(fn) && ['GeneratorFunction', 'AsyncGeneratorFunction'].includes(fn.constructor.name);

// [], {}, Map, Promise, Function
// functors must preserve identity morphisms and composition of morphisms.
export const isFunctor = a => {
  if (!a) return false;
  return !isSet(a) && (isObject(a) || isFunction(a));
};

export const hasMethod = (fn, name) => typeof fn[name] === 'function';
