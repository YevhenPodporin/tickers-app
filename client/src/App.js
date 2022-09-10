import './App.css';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataOfTickers } from './redux/action';
import { calcPercentChange } from './helpers/helpers';
import { ChangeFetchInterval } from './components/ChangeFetchInterval';

const { io } = require("socket.io-client");
const socket = io.connect('http://localhost:4000');

function App() {
	let dispatch = useDispatch();

	let dataOfTickers = useSelector(value => {
		return value.setDataOfTickers.data
	});

	let prevDataOfTickers = useSelector(value => {
		return value.setDataOfTickers.prevData
	})
	let [changePrice, setChangePrice] = useState([]);

	useEffect(() => {
		let result = prevDataOfTickers.reduce((accum, currentObject, index) => {
			accum.push({
				changePercent: calcPercentChange(currentObject.price, dataOfTickers[index].price),
				changeValue: (dataOfTickers[index].price - currentObject.price).toFixed(2)
			})

			return accum;
		}, [])

		setChangePrice(result);
	}, [prevDataOfTickers, dataOfTickers])

	useEffect(() => {
		socket.emit('start');
		socket.on('ticker', function (response) {
			dispatch(getDataOfTickers(response));
		});
	}, [dispatch])

	return (
		<div className="App">
			<div className='container-lg'>
				<ChangeFetchInterval socket={socket} />
				<div className='cards__container'>
					{dataOfTickers.map((value, id) => {
						return (
							<Card
								value={value}
								key={id}
								id={id}
								changePrice={changePrice[id] || 0} />
						)
					})}
				</div>
			</div>
		</div>
	);
}

export default App;