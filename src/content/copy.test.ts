import { buildOracle } from './copy';

describe('buildOracle', () => {
  it('returns a stable five-part strategic sentence for the same seed', () => {
    expect(buildOracle(7)).toBe(buildOracle(7));
    expect(buildOracle(7).split(' ')).toHaveLength(5);
  });

  it('changes the sentence when the seed changes', () => {
    expect(buildOracle(1)).not.toBe(buildOracle(2));
  });
});
