import { Expensive } from './expensive';

describe('Expensive', () => {
  it('should create an instance', () => {
    const directive = new Expensive();
    expect(directive).toBeTruthy();
  });
});
