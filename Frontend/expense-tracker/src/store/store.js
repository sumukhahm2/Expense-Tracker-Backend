import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './authSlice'
import ExpenseReducer from './expenseSlice'
import LeaderboardAction  from './leaderboardSlice'
import DarkModeAction from './darkModeSlice'
const store=configureStore({
    reducer:{auth:AuthReducer,expense:ExpenseReducer,leaderboard:LeaderboardAction,theme:DarkModeAction}
}) 

export default store