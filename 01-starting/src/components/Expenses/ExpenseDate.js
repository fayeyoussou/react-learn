import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const month = props.datb.toLocaleString("fr-FR", { month: "long" });
  const day = props.datb.toLocaleString("fr-FR", { day: "2-digit" });
  const year = props.datb.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};
export default ExpenseDate;
