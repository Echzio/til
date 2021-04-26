import { sum } from '@/sum';

describe('sum calculation', () => {
  test('1+2+3', () => {
    expect(sum(1, 2, 3)).toBe(6);
  });

  test('0+0+0', () => {
    expect(sum(0, 0, 0)).toBe(0);
  });

  test('5+5+5', () => {
    expect(sum(5, 5, 5)).toBe(15);
  });
});
