import lng from '@lightningjs/core';
import withClassCache from '.';

describe('withClassCache', () => {
  const createTestClass = base => class TestClass extends base {};

  describe('without withClassCache', () => {
    it('will create new classes', () => {
      expect(createTestClass(lng.Component)).not.toEqual(
        createTestClass(lng.Component)
      );
    });
  });

  it('will cache new classes', () => {
    const myClass = withClassCache(createTestClass);
    expect(myClass(lng.Component)).toEqual(myClass(lng.Component));
  });
});
