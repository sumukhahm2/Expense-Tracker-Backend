import { createSlice } from "@reduxjs/toolkit";

const defaultValue={
   expenses:[],
   totalPages:1

}


const LeaderBoardSlice=createSlice({
    name:'leaderboard',
    initialState:defaultValue,
    reducers:{
       addExpense(state,action){
        //console.log(action.payload)
          state.expenses=[]
          state.expenses=state.expenses.concat(action.payload.expenses)
          state.totalPages=action.payload.totalPages
          //console.log(state.expenses)
       }
    }
})

export const leaderboardAction=LeaderBoardSlice.actions

export default LeaderBoardSlice.reducer