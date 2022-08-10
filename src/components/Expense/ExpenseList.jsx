import { useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem";

import { Container } from "react-bootstrap";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    setExpenses([
      {
        id: 1,
        date: "Mon Aug 08 2022",
        title: "House Rent",
        amount: "$425",
      },
      {
        id: 2,
        date: "Mon Jan 02 2022",
        title: "Clothes",
        amount: "$300",
      },
      {
        id: 3,
        date: "Mon Aug 012 2022",
        title: "Food",
        amount: "$300",
      },
    ]);
  }, []);

  const deleteHandler = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <Container>
      <h2>Here is your expense history</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteHandler={deleteHandler}
        />
      ))}
    </Container>
  );
};

export default ExpenseList;
