import selectTotalExpenses from '../../selectors/expenses-total';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const res = selectTotalExpenses([]);
  expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
  const res = selectTotalExpenses([expenses[0]]);
  expect(res).toBe(195);
});

test('should correctly add up multiples expense', () => {
  const res = selectTotalExpenses(expenses);
  expect(res).toBe(114195);
});