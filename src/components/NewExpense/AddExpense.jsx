import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import classes from "./AddExpense.module.css";
const AddExpense = () => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const submitHandler = (e) => {
    console.log("submit handler works");
    e.preventDefault();
    const expenseData = {
      title: formData.title,
      amount: formData.amount,
      date: new Date(formData.date),
    };

    console.log(expenseData);
    setFormData({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <Card.Header>
          <h3>Enter Expense Info</h3>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Control
              className={classes.input}
              type="text"
              placeholder="Expense Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
            <Form.Control
              className={classes.input}
              type="number"
              placeholder="Expense Cost"
              value={formData.amount}
              min="0.01"
              step="0.01"
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
            />
            <Form.Control
              className={classes.input}
              type="date"
              placeholder="Expense Date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
            <Button type="submit" className={classes.button}>
              Add
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddExpense;
