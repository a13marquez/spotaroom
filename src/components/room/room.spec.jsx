import React from 'react';
import { mount } from 'enzyme';

import { Room } from './Room'


test('It renders Room', () => {
  const wrapper = mount(<Room
    img="testSrc"
    price={0}
    title="title"
    currency="€" />);
  expect(wrapper.getDOMNode().querySelector('img').src).toBe('http://localhost/testSrc');
  expect(wrapper.getDOMNode().querySelector('.title').innerHTML).toBe('title');
  expect(wrapper.getDOMNode().querySelector('.price').innerHTML).toBe('0€');
  expect(wrapper).toMatchSnapshot();
});

