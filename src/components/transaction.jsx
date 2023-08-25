import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const {deleteTransaction} = useContext(GlobalContext)
  
  return (
    <div>
      <li className={transaction.amount<0 ? 'minus' : 'plus'}>
        {transaction.text}{" "}
        <span>
          {sign}₹{Math.abs(transaction.amount)}
        </span>
        <button onClick = {()=> deleteTransaction(transaction.id)} className="delete-btn">x</button>
      </li>
    </div>
  );
};
