import store from "./store";

import { createSlice } from "@reduxjs/toolkit";

const defaultValue={
   expenses:[],
   totalPages:1,

}


const ExpenseSlice=createSlice({
    name:'expense',
    initialState:defaultValue,
    reducers:{
       addExpenses(state,action){
        //console.log(action.payload)
          state.expenses=state.expenses.concat(action.payload.expenses)
          state.totalPages=action.payload.totalPages
          console.log(state.totalPages)
       },
       addExpense(state,action){
       state.expenses=state.expenses.concat(action.payload.expenses)
       },
       deleteExpense(state,action){
        console.log(action.payload)
         state.expenses=state.expenses.filter(expense=>expense.id!=action.payload)
       }
    }
})

export const expenseAction=ExpenseSlice.actions

export default ExpenseSlice.reducer