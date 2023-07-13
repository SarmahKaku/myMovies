import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from '../shared/Loader/loderSlice';

export const store = configureStore({
    reducer: {
        loader: loaderReducer
    }
})