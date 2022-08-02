import Card from "../Card/Card";
import ExpensesFilter from "../FilterExpenses/ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";
import "./Expenses.css";

export default function Expenses(props) {
  const [option, setOption] = useState("2021 ");

  const filterChangeHandler = (selectedYear) => {
    setOption(selectedYear);
  };

  const filteredYear = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === option;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter select={option} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredYear}/>
        <ExpensesList data={filteredYear} />
      </Card>
    </div>
  );
}
