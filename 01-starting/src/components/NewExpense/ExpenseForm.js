import './ExpenseForm.css'
const ExpenseForm = ()=>{
    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text"/>
                    <label>Amount</label>
                    <input type="number" min='100' step={5}/>
                    <label>Date</label>
                    <input type="date" min={'2019-01-01'} max='2022-12-31'/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}
export default ExpenseForm;