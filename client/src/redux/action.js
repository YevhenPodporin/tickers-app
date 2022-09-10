import { GET_DATA_OF_TICKERS} from "./types"

export function getDataOfTickers(payload) {
	return {
		type: GET_DATA_OF_TICKERS,
		payload
	}
}
