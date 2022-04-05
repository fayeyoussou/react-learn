import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App= ()=> {
  const expenses = [
    {title : 'tandarma',amount : 1200,datb : new Date(2022,1,1)},
    {title : 'meew',amount : 1500,datb : new Date(2020,2,12)},
    {title : 'sukër',amount : 700,datb : new Date(2020,2,1)}, 
    {title : 'Thon',amount : 1000,datb : new Date(2019,4,4)}
  ]
  const addExpenseHandler = expense=>{
    console.log('in app')
    console.log(expenses)
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
