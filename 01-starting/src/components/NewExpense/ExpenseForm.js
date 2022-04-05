import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props)=>{
    const [enteredTitle,setEnteredtitle] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    const [enteredDate,setEnteredDate] = useState('')

    const titleHandler = (event)=> {
        setEnteredtitle(event.target.value)
    }
    const AmountHandler = (event)=> {
        setEnteredAmount(event.target.value)
    }
    const DateHandler = (event)=> {
        setEnteredDate(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault();
    
        const expenseData = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate),
        };
    
        props.onSaveExpense(expenseData);
        setEnteredtitle('');
        setEnteredAmount('');
        setEnteredDate('');
      };
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={enteredTitle} type="text" onChange={titleHandler}/>
                    <label>Amount</label>
                    <input value={enteredAmount} type="number" min='100' step={5} onChange={AmountHandler}/>
                    <label>Date</label>
                    <input type="date" value={enteredDate} min={'2019-01-01'} max='2022-12-31' onChange={DateHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}
export default ExpenseForm;