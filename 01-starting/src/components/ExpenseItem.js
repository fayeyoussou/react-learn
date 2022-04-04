import './ExpenseItem.css'
function ExpenseItem() {
    const expenseDate = new Date(2021,4,4);
    const expenseTitle = "tandarma"
    const expenseAmount = 1200
    return (<div className="expense-item">
        <div >{expenseDate.toISOString()}</div>
        <div className="expense-item__description">
            <h2 >{expenseTitle}</h2>
            <div className = "expense-item__price ">{expenseAmount} F </div>
        </div>
    </div>)
}

export default ExpenseItem;