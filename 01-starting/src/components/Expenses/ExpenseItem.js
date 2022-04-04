import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => (
  <Card className="expense-item">
    <div className="expense-item__description">
      <ExpenseDate datb={props.expense.datb} />
      <h2>{props.expense.title}</h2>
      <div className="expense-item__price ">{props.expense.amount} F </div>
    </div>
  </Card>
);

export default ExpenseItem;
