import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => (
  <div>
  <ExpensesFilter/>
  <Card className="expenses">
    <ExpenseItem expense={props.expenses[0]} />
    <ExpenseItem expense={props.expenses[1]} />
    <ExpenseItem expense={props.expenses[2]} />
    <ExpenseItem expense={props.expenses[3]} />
  </Card>
  </div>
);

export default Expenses;
