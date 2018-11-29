import { identity } from './common';
import { B } from './combinator';

// left to right
export const pipe = (...fns) => fns.reduce((prevFn, nextFn) =>
  (...args) => B(nextFn)(prevFn)(...args), identity);

export const pipeP = (...fns) => (...args) =>
  fns.reduce((chain, func) => chain.then(func), Promise.resolve(...args));

export const pipeA = (...fns) => (...args) =>
  fns.reduce(async (prevFn, nextFn) => nextFn(await prevFn), args);

// right to left
export const compose = (...fns) => fns.reduceRight((lastFn, prevFn) =>
  (...args) => B(prevFn)(lastFn)(...args), identity);

export const composeP = (...fns) => (...args) =>
  fns.reduceRight((chain, func) => chain.then(func), Promise.resolve(...args));

export const composeA = (...fns) => (...args) =>
  fns.reduceRight(async (prevFn, nextFn) => nextFn(await prevFn), args);
