
export function ChangeFetchInterval(props) {
	const INTERVALS = [1, 2, 3, 4, 5];

	const changeInterval = function (event) {
		props.socket.emit('changeInterval', event.target.value);
	}

	return (
		<div className="intervals__wrapper" >
			<h4 className="text-success" >Please choice the interval of update price</h4>
			<hr className="border border-1 opacity-1"></hr>
			<div className="intervals__container">
				{INTERVALS.map((value, index) => {
					return (
						<div
							onClick={changeInterval}
							className="interval__item" key={index}>
							<button
								value={value}
								type="button"
								className="btn btn-secondary">
								{value} s
							</button>
						</div>)
				})}
			</div>
		</div>
	)
}