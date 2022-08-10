import classes from "./Header.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <h2>Expense Tracker</h2>

      <Container>
        <Row>
          <Col>
            <Link className={classes.link} to="/">
              Expense List
            </Link>
          </Col>
          <Col>
            <Link className={classes.link} to="/add-expense">
              Add Expense
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
