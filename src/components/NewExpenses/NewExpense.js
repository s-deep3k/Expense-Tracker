import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense =(props)=>{
    const NewExpenseHandler = (savedExpense)=>{
        props.onSaveExpense(savedExpense)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={NewExpenseHandler}></ExpenseForm>
        </div>
    )   
}

export default NewExpense