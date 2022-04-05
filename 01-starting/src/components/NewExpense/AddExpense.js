import './NewExpense.css'
const AddExpense = props => {
  return (
    <div className="new-expense button">
      <button onClick={props.change}>Add New Expense</button>
    </div>
  )
}
export default AddExpense