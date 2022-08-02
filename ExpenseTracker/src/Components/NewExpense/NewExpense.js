import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [button, setButton] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
    };
    props?.onNewExpense(expenseData);
  };
  const showForm = () => {
    setButton(true);
  };
  return (
    <div className="new-expense">
      {!button && <button onClick={showForm}>Add New Expenses</button>}
      {button && (
        <NewExpenseForm
          onExpenseSaveData={saveExpenseDataHandler}
          button={button}
          setButton={setButton}
        />
      )}
    </div>
  );
};
export default NewExpense;
