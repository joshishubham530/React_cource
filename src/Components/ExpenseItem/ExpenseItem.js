import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props?.title);
  // const clickHandler = () => {
  //   console.log("ExpenseItem.js", props.data);
  //   setTitle(props.amount);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props?.date} />
      <div className="expense-item__description">
        <h2>{props?.title}</h2>
        <div className="expense-item__price">${props?.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Click</button> */}
    </Card>
  );
};
export default ExpenseItem;
