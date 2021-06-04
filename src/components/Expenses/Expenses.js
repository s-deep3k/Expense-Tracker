import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [Year, setYearHandler] = useState("2021");
  const yearHandler = (setYear) => {
    setYearHandler(setYear);
  };
  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === Year)
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={Year}
          onSetYear={yearHandler}
        ></ExpensesFilter>
        <ExpensesChart items={filteredExpenses}></ExpensesChart>
        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </div>
  );
}
export default Expenses;
