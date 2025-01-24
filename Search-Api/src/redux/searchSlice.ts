import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
    query:string;
}

const initialState: SearchState={
    query:'',
}

const searchSlice=createSlice({
    name:'search',
    initialState,
    reducers:{
        setQuery(state, action: PayloadAction<string>) { //new funciton to set the query parameter
            state.query = action.payload;
          },
          
          
    },
});

export const {setQuery}=searchSlice.actions;
export default searchSlice.reducer