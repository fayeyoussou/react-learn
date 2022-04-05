import {useState} from 'react';
import AddExpense from './AddExpense';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  const [form,changeForm] = useState(true)
  const toggleAdd = ()=>{
    changeForm(formstat=>{
        return !formstat
    })
  }
  return form ? (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} change = {toggleAdd}/>
    </div>
  ) : <AddExpense change = {toggleAdd}/>;
};

export default NewExpense;
