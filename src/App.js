import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 239.46,
    date: new Date(2019, 6, 4),
  },
  {
    id: 2,
    title: "Toilet paper",
    amount: 4,
    date: new Date(2020, 3, 1),
  },
  {
    id: 3,
    title: "Book",
    amount: 33,
    date: new Date(2021, 6, 4),
  },
  {
    id: 4,
    title: "Iphone",
    amount: 999,
    date: new Date(2019, 9, 11),
  },
  {
    id: 5,
    title: "Loan",
    amount: 35661,
    date: new Date(2020, 0, 1),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const NewExpenseHandler = (savedExpense) => {
    setExpenses((previousExp) => [savedExpense, ...previousExp]);
  };
  return (
    <div>
      <h2>Lets start React!</h2>
      <NewExpense onSaveExpense={NewExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
