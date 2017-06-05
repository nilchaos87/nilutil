import { expect } from 'chai';
import link from './link';

describe('link', () => {
  const href = 'http://bomb.com/style.css';
  const rel = 'stylesheet';
  const result = link(href, rel);

  it('should return a link element referencing the specified URL', () => {
    expect(result.tagName).to.equal('LINK');
    expect(result.href).to.equal(href);
    expect(result.rel).to.equal(rel);
  });
});
