import { combineReducers } from "redux";
import { setDataOfTickers } from "./setDataTickerRedux";
import { configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
	setDataOfTickers,
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
})
