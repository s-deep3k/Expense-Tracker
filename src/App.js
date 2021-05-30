import Expenses from "./components/Expenses";
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
    <div >
      <h2>Lets start React!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
