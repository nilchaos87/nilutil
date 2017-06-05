import { expect } from 'chai';
import meta from './meta';

describe('meta', () => {
  it('should return a meta element with the specified name and content', () => {
    const name = 'name';
    const content = 'content';
    const element = meta(name, content);
    expect(element.tagName).to.equal('META');
    expect(element.name).to.equal(name);
    expect(element.content).to.equal(content);
  });
});
