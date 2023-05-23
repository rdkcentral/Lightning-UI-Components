import { jest } from '@jest/globals';
import { debounce } from '../../utils';

jest.mock('../../utils/', () => {
  return {
    __esModule: true,
    debounce: jest.fn(() => 'Mocked result')
  };
});

test('myModuleFunction should return mocked result', () => {
  expect(jest.isMockFunction(debounce)).toBe(true);
});
