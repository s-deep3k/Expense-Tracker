import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
function Expenses(props) {
  const [Year, setYearHandler] = useState("2021");
  const expenses = props.expenses;
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

        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[4].title}
          amount={expenses[4].amount}
          date={expenses[4].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}
export default Expenses;
