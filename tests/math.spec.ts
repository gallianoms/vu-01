import {sum} from '../src/math';

describe('Math function', () => {
  it('should sum two numbers correctly', () => {
    expect(sum(2, 2)).toBe(4);
  });

  it('should substract two numbers correctly', () => {
    expect(sum(2, 3)).toBe(1);
  });
});
