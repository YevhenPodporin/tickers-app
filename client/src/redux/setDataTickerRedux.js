import { GET_DATA_OF_TICKERS } from "./types";

const initialState = {
	data: [],
	prevData: []
}

export function setDataOfTickers(state = initialState, action) {
	switch (action.type) {
		case GET_DATA_OF_TICKERS:
			return { ...state, prevData: state.data, data: action.payload };
		default: return state
	}
}