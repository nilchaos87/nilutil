import { expect } from 'chai';
import style from './style';

describe('style', () => {
  const text = 'body { background: green; }';
  const result = style(text);

  it('should return a style element with the specified content', () => {
    expect(result.tagName).to.equal('STYLE');
    expect(result.textContent).to.equal(text);
  });
});
