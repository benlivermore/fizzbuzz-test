const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('should return 1 when given 1', () => {
    const result = fizzbuzz(1);
    expect(result).toBe(1);
  });

  it('should return 2 when given 2', () => {
    const result = fizzbuzz(2);
    expect(result).toBe(2);
  });

  it('should return fizz when given 3', () => {
    const result = fizzbuzz(3);
    expect(result).toBe('fizz');
  });
});
