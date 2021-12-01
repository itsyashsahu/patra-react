import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    searchStock:"",
    showOptions:false,
    showOptionsStock:null,
    // watchlistArr : null,
    watchlistArr : []
  }
// both the given code perform same task bas yeh thoda kam code 
// likhna pada aur purane parameters bhi pass nhi krne pade


export const watchlistReducer = createSlice({
    name:"watchlist",
    initialState,
    reducers:{
        setWatchlist: (state,action)=>{
            const payload = action.payload;
            console.log("heeloo action",action);
            
                state.watchlistArr.push(payload)



        },
        setSearchStock: (state,action)=> {

            // console.log(action.payload);

            state.searchStock = action.payload;

            // console.log(state.searchStock);

        },
        setShowOptions: (state,action)=>{
            state.showOptions = state.showOptions ? false : true;
            var data = action.payload;
            state.showOptionsStock = {
                stockName: data.stockName,
                stockSymbol: data.stockSymbol
            }

        },
        removeStockEntry:(state,action)=>{
            const stockSymbol = action.payload;
            console.log("taking from remove stockentry",stockSymbol);
            state.watchlistArr.splice( state.watchlistArr.findIndex(item => item.stockSymbol === stockSymbol), 1);
            
        }

    }
})

export const {setWatchlist,setSearchStock,setShowOptions,removeStockEntry} = watchlistReducer.actions; 

export default watchlistReducer.reducer;




