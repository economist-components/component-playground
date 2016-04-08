import 'babel-polyfill';
import 'json-editor';
import React from 'react';
import Playground from '../src';
import Link from '../src/link';

export default (
  <Playground>
    <Link href="http://www.somesite.com" text="The link text" />
  </Playground>
);
