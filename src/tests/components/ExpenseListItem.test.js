import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly ', () => {
  const wrapper = shallow(<ExpenseListItem expense={expenses[1]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
})

// test('should render ExpenseListItem with empty message ', () => {
//   const wrapper = shallow(<ExpenseList expenses={[]} />);
//   expect(toJSON(wrapper)).toMatchSnapshot();
// })
