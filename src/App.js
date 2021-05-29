import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: 1,
      title: "Car Insurance",
      amount: 239.46,
      date: new Date(2021, 6, 4),
    },
    {
      id: 2,
      title: "Toilet paper",
      amount: 4,
      date: new Date(2021, 3, 1),
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
      date: new Date(2021, 9, 11),
    },
    {
      id: 5,
      title: "Loan",
      amount: 35661,
      date: new Date(2021, 0, 1),
    },
  ];
  return (
    <div>
      <h2>Lets start React!</h2>
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
    </div>
  );
}

export default App;
