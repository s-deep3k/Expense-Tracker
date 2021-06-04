import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const [Form, showForm] = useState(false);
  const NewExpenseHandler = (savedExpense) => {
    props.onSaveExpense(savedExpense);
  };
  const showFormHandler = () => {
    showForm(!Form);
  };
  return (
    <div className="new-expense">
      {Form ? (
        <ExpenseForm onCancel={showFormHandler} onSaveExpense={NewExpenseHandler}></ExpenseForm>
      ) : (
        <button onClick={showFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
