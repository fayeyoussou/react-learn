import ExpenseDate from "./ExpenseDate";
import { useState }  from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
    const [title,setTitle]=useState(
        props.expense.title
    ) 
    const clickHandler = ()=> {
        setTitle("Youssou")
    }
        return (
  <Card className="expense-item">
    <div className="expense-item__description">
      <ExpenseDate datb={props.expense.datb} />
      <h2>{title}</h2>
      <div className="expense-item__price ">{props.expense.amount} F </div>
    </div>
    <button onClick={clickHandler}>change title</button>
  </Card>
)}

export default ExpenseItem;
