import moment from 'moment';

export default (expenses) => {
  // return 0
  if(expenses.length === 0) {
    return 0;
  } else {
    return expenses
      .map((expense) =>  expense.amount )
      .reduce((sum, value) => sum + value, 0);
  }
  
};