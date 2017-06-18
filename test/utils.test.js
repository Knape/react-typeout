/* globals describe, beforeAll, beforeEach, expect, jest */

import { shuffle, move, getFirst } from '../src/utils';

describe('Util functions', () => {
  describe('shuffle items in array', () => {
    test('should shuffle and return a new copy of the array', () => {
      const baseArray = ['one', 'two', 'three', 'four', 'five', 'six'];
      expect(shuffle(baseArray)).not.toEqual(baseArray);
    });

    test('should shuffle and return a new copy of the array with the same length', () => {
      const baseArray = ['one', 'two', 'three', 'four', 'five', 'six'];
      expect(shuffle(baseArray)).toHaveLength(6);
    });
  });

  describe('move items in array', () => {
    test('should move items in an array and return a new copy of the array', () => {
      const baseArray = ['one', 'two', 'three', 'four', 'five', 'six'];
      expect(move(baseArray)).not.toEqual(baseArray);
    });

    test('should move and return a new copy of the array with the same length', () => {
      const baseArray = ['one', 'two', 'three', 'four', 'five', 'six'];
      const expectedArray = ['two', 'three', 'four', 'five', 'six', 'one'];
      expect(move(baseArray)).toEqual(expectedArray);
    });

    test('should move and return a new copy of the array with the same length', () => {
      const baseArray = ['one', 'two'];
      const expectedArray = ['two', 'one'];
      expect(move(baseArray)).toEqual(expectedArray);
    });
  });

  describe('get first item in array', () => {
    test('should get the first item', () => {
      const baseArray = ['one', 'two', 'three', 'four', 'five', 'six'];
      expect(getFirst(baseArray)).toEqual('one');
    });
  });
});
