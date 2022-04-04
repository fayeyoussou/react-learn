import { useState } from 'react/cjs/react.production.min'
import './ExpenseForm.css'
const ExpenseForm = ()=>{
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
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleHandler}/>
                    <label>Amount</label>
                    <input type="number" min='100' step={5} onChange={AmountHandler}/>
                    <label>Date</label>
                    <input type="date" min={'2019-01-01'} max='2022-12-31' onChange={DateHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}
export default ExpenseForm;