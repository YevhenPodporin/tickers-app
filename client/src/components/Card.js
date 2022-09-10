import './Card.css';

export default function Card(props) {
	let isPriceUp = props.changePrice.changePercent > 0;

	return (
		<div className="card">
			<div className={isPriceUp ? "card__icon price__up" : "card__icon price__down"}>
				{isPriceUp
					? (<span>&#129137;</span>)
					: (<span>&#129139;</span>)
				}
			</div>
			<div className="card__ticker">
				<div className="ticker__name">{props.value.ticker}</div>
				<div className="ticker__price">{props.value.price}</div>
			</div>
			<div className="card__change-price">
				<div className="change-percent">{props.changePrice.changePercent || 0} %</div>
				<div className="change-props">{props.changePrice.changeValue || 0} $</div>
			</div>

		</div>
	)
}