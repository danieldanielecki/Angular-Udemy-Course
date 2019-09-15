import {ReversePipe} from './reverse.pipe';

describe('Pipe: Reverse', () => {
  it('should create pipe', () => {
    let reversePipe = new ReversePipe(); // Isolated test, because it doesn't depend on anything, even not on Angular.
    expect(reversePipe.transform('hello')).toEqual('olleh');
  })
});
