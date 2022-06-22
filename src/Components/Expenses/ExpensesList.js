import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
// import "./Expenses.css";
import "./ExpensesList.css";

const ExpenseList = (props) => {
  console.log(props.data);
  if (props.data.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.data.map((expense, index) => (
        <ExpenseItem
          key={index}
          data={expense}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
