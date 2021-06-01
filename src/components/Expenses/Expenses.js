import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expenses(props) {
  const [Year, setYearHandler] = useState("2021");
  const yearHandler = (setYear) => {
    setYearHandler(setYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={Year}
          onSetYear={yearHandler}
        ></ExpensesFilter>
        {props.expenses.map((expense) => 
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        )}
      </Card>
    </div>
  );
}
export default Expenses;
