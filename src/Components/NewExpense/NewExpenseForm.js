import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const [enteredAmount, setEnteredAmount] = useState("");

  const [enteredDate, setEnteredDate] = useState("");
  
  const [form, setform] = useState(true);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate),
    };
    
    props.onExpenseSaveData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const formClose = (e) => {
    props?.setButton(false);
   
  };

  return (
    <>
      {form && (
        <form onSubmit={onClickHandler}>
          <div div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>

            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>

            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-02"
                max="2022-01-03"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>

          <div className="new-expense__actions">
            <button type="button" onClick={formClose}>
              Cancel
            </button>
            <button type="submit">Add expenses</button>
          </div>
        </form>
      )}
    </>
  );
};

export default NewExpenseForm;
