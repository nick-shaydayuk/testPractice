import { describe, expect, it } from '@jest/globals';
import * as funcs from '../index.js';

describe('task1', () => {
  it('should return undefined', () => {
    expect(funcs.convertToLowerOrUpperCase()).toBeUndefined();
    expect(funcs.convertToLowerOrUpperCase(['s'])).toBeUndefined();
    expect(funcs.convertToLowerOrUpperCase([], undefined)).toBeUndefined();
  });
  it('should work', () => {
    expect(
      funcs.convertToLowerOrUpperCase(['lower', 'upper'], 'uppEr'),
    ).toEqual(['LOWER', 'UPPER']);
    expect(
      funcs.convertToLowerOrUpperCase(['lower', 'upper'], 'noWay 1'),
    ).toEqual(['lower', 'upper']);
    expect(
      funcs.convertToLowerOrUpperCase(['lower', 'upper'], 'uPper'),
    ).not.toContain('lower');
  });
  it('should work 2', () => {
    expect(
      funcs.convertToLowerOrUpperCase(['LOWER', 'UPPER'], 'noWay'),
    ).toEqual(['LOWER', 'UPPER']);
    expect(
      funcs.convertToLowerOrUpperCase(['LOWER', 'UPPER'], 'loWer'),
    ).toEqual(['lower', 'upper']);
    expect(
      funcs.convertToLowerOrUpperCase(['LOWER', 'UPPER'], 'loWer'),
    ).not.toContain('LOWER');
  });
});

describe('task2', () => {
  it('should return undefined', () => {
    expect(funcs.convertToFilteredLowerOrUpperCase()).toBeUndefined();
    expect(funcs.convertToFilteredLowerOrUpperCase(['s'])).toBeUndefined();
    expect(funcs.convertToFilteredLowerOrUpperCase([], undefined)).toBeUndefined();
  });
  it('should work', () => {
    expect(
      funcs.convertToFilteredLowerOrUpperCase(['lower', 'upper'], 'upper'),
    ).toEqual(['LOWER', 'UPPER']);
    expect(
      funcs.convertToFilteredLowerOrUpperCase(['lower', 'UPPER'], 'noWay'),
    ).toEqual(['lower', 'UPPER']);
  });
  it('should work', () => {
    expect(
      funcs.convertToFilteredLowerOrUpperCase(['LOWER', 'UPPER'], 'lower'),
    ).toEqual(['lower', 'upper']);
  });
  it('should work', () => {
    expect(
      funcs.convertToFilteredLowerOrUpperCase(
        ['LOWER', { a: 123 }, 'UPPER'],
        'lower',
      ),
    ).toEqual(['lower', 'upper']);
  });
  it('should work', () => {
    expect(
      funcs.convertToFilteredLowerOrUpperCase(
        ['yankee', { a: 123 }, 'go', { b: 456 }, 'home'],
        'UPPER',
      ),
    ).toEqual(['YANKEE', 'GO', 'HOME']);
  });
});

describe('task3', () => {
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 16 },
  ];
  const result = [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 30 },
  ];
  const users2 = [
    { name: 'Victor', age: 15 },
    { name: 'Gus', age: 17 },
    { name: 'Lalo', age: 30 },
    { name: 'Walter', age: 52 },
    { name: 'Jesse', age: 18 },
  ];
  const result2 = [
    { name: 'Lalo', age: 30 },
    { name: 'Walter', age: 52 },
    { name: 'Jesse', age: 18 },
  ];
  it('should return undefined', () => {
    expect(funcs.filterUsersByAge()).toBeUndefined();
  });
  it('should work', () => {
    expect(funcs.filterUsersByAge(users)).toEqual(result);
  });
  it('should work 2', () => {
    expect(funcs.filterUsersByAge(users2)).toEqual(result2);
  });
});

describe('task4', () => {
  const users = [
    { name: 'Alice', age: 25, capableOfMarathon: true },
    { name: 'Bob', age: 17, capableOfMarathon: false },
    { name: 'Charlie', age: 30, capableOfMarathon: false },
    { name: 'David', age: 16, capableOfMarathon: true },
    { name: 'Gwen', age: 18, capableOfMarathon: true },
  ];
  const result = [
    { name: 'Alice', age: 25, capableOfMarathon: true },
    { name: 'Charlie', age: 30, capableOfMarathon: false },
  ];
  const result3 = [
    { name: 'Bob', age: 17, capableOfMarathon: false },
    { name: 'David', age: 16, capableOfMarathon: true },
  ]
  const result2 = [
    { name: 'Alice', age: 25, capableOfMarathon: true },
    { name: 'David', age: 16, capableOfMarathon: true },
    { name: 'Gwen', age: 18, capableOfMarathon: true },
  ];
  const result4 = [
    { name: 'Bob', age: 17, capableOfMarathon: false },
    { name: 'Charlie', age: 30, capableOfMarathon: false },
  ];
  it('should return undefined', () => {
    expect(funcs.filterUsersByParam()).toBeUndefined();
    expect(funcs.filterUsersByParam(users)).toBeUndefined();
    expect(funcs.filterUsersByParam(undefined, 'age')).toBeUndefined();
    expect(funcs.filterUsersByParam(undefined, 'age', 18, '>')).toBeUndefined();
  });
  it('should work', () => {
    expect(funcs.filterUsersByParam(users, 'age', 18, '>')).toEqual(result);
    expect(funcs.filterUsersByParam(users, 'age', [18], '>')).toBeNull();
    expect(funcs.filterUsersByParam(users, 'age', 18, '>')).not.toContain({ name: 'David', age: 16, capableOfMarathon: true });
    expect(funcs.filterUsersByParam(users, 'age', 18, '<')).toEqual(result3);
    expect(funcs.filterUsersByParam(users, 'age', 18, '<')).not.toContain({ name: 'Charlie', age: 30, capableOfMarathon: false });
  });
  it('should work 2', () => {
    expect(funcs.filterUsersByParam(users, 'capableOfMarathon', true)).toEqual(result2);
    expect(funcs.filterUsersByParam(users, 'capableOfMarathon', false)).toEqual(result4);
    expect(funcs.filterUsersByParam(users, 'capableOfMarathon', false)).not.toContain({ name: 'Alice', age: 25, capableOfMarathon: true });
    expect(funcs.filterUsersByParam(users, 'capableOfMarathon', true)).not.toContain({ name: 'Bob', age: 17, capableOfMarathon: false });
  });
});

describe('task5', () => {
  it('should count', () => {
    expect(funcs.divisibleAverage([0, -1, 10, 20, 30, 40, 50], 3)).toEqual(15);
  });
});
