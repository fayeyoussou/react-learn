import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const newExpense = (props) => {
  const saveExpense = (enteredExpense) => {
    const expenseData = { ...enteredExpense, id: Math.random().toString() }
    props.onAddExpense(expenseData)
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpense} />
    </div>
  );
};
export default newExpense;
