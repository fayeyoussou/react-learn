import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  //   res = res.length ===0 ? <p>No Expense Found</p>:res
  return (
    <ul className="expenses-list">
      {props.expenses.map((item) => {
        return (
          <li><ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          /></li>
        );
      })}
    </ul>
  );
};
export default ExpenseList;
