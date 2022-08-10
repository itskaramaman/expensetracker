import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import classes from "./ExpenseItem.module.css";
import { Trash3 } from "react-bootstrap-icons";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.expense.title);

  const clickHandler = () => {
    setTitle("Updated " + title);
  };

  return (
    <Container>
      <Card className={classes.card}>
        <Card.Body>
          <Row>
            <Col>{props.expense.date}</Col>
            <Col>{title}</Col>
            <Col>
              <span className={classes.cost}>{props.expense.amount}</span>
            </Col>
            <Col>
              <Trash3
                className={classes.trash}
                onClick={() => props.deleteHandler(props.expense.id)}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ExpenseItem;
