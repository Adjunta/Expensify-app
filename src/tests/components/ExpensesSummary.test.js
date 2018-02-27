import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should display count and total of 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
})

test('should display count and total of 2 expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={6598712168}/>);
  expect(toJSON(wrapper)).toMatchSnapshot();
})