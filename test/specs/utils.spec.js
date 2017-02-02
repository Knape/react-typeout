import { shuffle, move, getFirst } from '../../src/utils';

describe('Util functions', () => {
  describe('shuffle items in array', () => {
    it('should shuffle and return a new copy of the array', () => {
      const baseArray = ['one', 'two', 'three', 'four', 'five', 'six'];
      expect(shuffle(baseArray))
      .to.not.equal(baseArray);
    });

    it('should shuffle and return a new copy of the array with the same length', () => {
      const baseArray = ['one', 'two', 'three', 'four', 'five', 'six'];
      expect(shuffle(baseArray))
      .to.have.length(6);
    });
  });

  describe('move items in array', () => {
    it('should move items in an array and return a new copy of the array', () => {
      const baseArray = ['one', 'two', 'three', 'four', 'five', 'six'];
      expect(move(baseArray))
      .to.not.equal(baseArray);
    });

    it('should move and return a new copy of the array with the same length', () => {
      const baseArray = ['one', 'two', 'three', 'four', 'five', 'six'];
      const expectedArray = ['two', 'three', 'four', 'five', 'six', 'one'];
      expect(move(baseArray))
      .to.eql(expectedArray);
    });

    it('should move and return a new copy of the array with the same length', () => {
      const baseArray = ['one', 'two'];
      const expectedArray = ['two', 'one'];
      expect(move(baseArray))
      .to.eql(expectedArray);
    });
  });

  describe('get first item in array', () => {
    it('should get the first item', () => {
      const baseArray = ['one', 'two', 'three', 'four', 'five', 'six'];
      expect(getFirst(baseArray))
      .to.equal('one');
    });
  });
});
