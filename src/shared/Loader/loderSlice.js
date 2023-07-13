import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show : false
}

export const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        showloader:(state,action) => {
            state.show = action.payload
        }
    }
})

export const { showloader } = loaderSlice.actions;
export default loaderSlice.reducer;