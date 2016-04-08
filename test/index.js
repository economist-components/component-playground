import 'babel-polyfill';
import Playground from '../src';
import React from 'react';
import chai from 'chai';
chai.should();
describe('Playground', () => {
  it('renders a React element', () => {
    React.isValidElement(<Playground />).should.equal(true);
  });
});
