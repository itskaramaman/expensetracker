import ExpenseList from "./components/Expense/ExpenseList";
import AddExpense from "./components/NewExpense/AddExpense";
import Header from "./layout/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ExpenseList />} />
        <Route path="/add-expense" element={<AddExpense />} />
      </Routes>
    </>
  );
}

export default App;
