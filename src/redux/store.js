import  userReducer  from './userReducer'
import watchlistReducer from './watchlistReducer'


import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    user : userReducer,
    watchlist : watchlistReducer,
  },
})

