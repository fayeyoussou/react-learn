import './ExpenseDate.css'
function ExpenseDate (props) {
    const month  = props.datb.toLocaleString('fr-FR',{month :'long'})
    const day  = props.datb.toLocaleString('fr-FR',{day :'2-digit'})
    const year = props.datb.getFullYear()
    return (
        <div >
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}
export default ExpenseDate;