export function calcPercentChange(prevValue, currentValue) {
	return (((currentValue - prevValue) / prevValue) * 100).toFixed(2);
}
