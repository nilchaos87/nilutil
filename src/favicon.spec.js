import { expect } from 'chai';
import favicon from './favicon';

describe('favicon', () => {
  const url = 'data:image/x-icon;base64...';
  const link = favicon(url);

  it('should return a favicon link element referencing the specified URL', () => {
    expect(link.tagName).to.equal('LINK');
    expect(link.href).to.equal(url);
    expect(link.rel).to.equal('icon');
  });
});
