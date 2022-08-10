import { createContext, useState } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  return (
    <ExpenseContext.Provider value={{ item: 1 }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
