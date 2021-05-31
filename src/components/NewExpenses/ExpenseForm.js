import {useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm =(props)=>{
    // const [UserInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // })
    // //Then in each handler
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredTitle:event.target.value}
    // })
    const [enteredTitle,setTitleHandler] = useState('')
    const TitleHandler=(event)=>{
       // console.log(event.target.value);
       setTitleHandler(event.target.value)
    }
    const [enteredAmount,setAmountHandler] = useState('')
    const AmountHandler=(event)=>{
        //console.log(event.target.value);
        setAmountHandler(event.target.value)
    }
    const [enteredDate,setDateHandler] = useState('')
    const DateHandler=(event)=>{
        //console.log(event.target.value);
        setDateHandler(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault(); //no reloading page while submitting
        const expense={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
            id:Math.random().toString()
        }
        props.onSaveExpense(expense)
        // console.log(expense);
        setDateHandler('')
        setAmountHandler('')
        setTitleHandler('')
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={TitleHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={AmountHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={DateHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    )   
}

export default ExpenseForm