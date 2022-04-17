import { TimestampToTimeAgoPipe } from './timestamp-to-time-ago.pipe';

describe('TimestampToTimeAgoPipe', () => {
  it('create an instance', () => {
    const pipe = new TimestampToTimeAgoPipe();
    expect(pipe).toBeTruthy();
  });
});
