import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  const eachItem = props.items.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
  ));
  const msg = <h2 className="expenses-list__fallback">No expenses in this Year</h2>;
  return (
      <ul className="expenses-list">
        {props.items.length > 0 ? eachItem : msg}
      </ul>
  );
};
export default ExpenseList;
