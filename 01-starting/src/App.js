import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {title : 'tandarma',amount : 1200,datb : new Date(2022,1,1)},
    {title : 'meew',amount : 1500,datb : new Date(2022,2,12)},
    {title : 'sukër',amount : 700,datb : new Date(2022,2,1)}, 
    {title : 'Thon',amount : 1000,datb : new Date(2022,4,4)}
  ]
  return (
    <div>
      <Expenses expenses = {expenses}/>
    </div>
  );
}

export default App;
