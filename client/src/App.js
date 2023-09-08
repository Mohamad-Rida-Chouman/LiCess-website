import React, { useState } from 'react';
import './App.css';
import './base.css';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';
import Dropdown from './components/Dropdown/Dropdown';

function App() {
	// button related function(s)
	const handleClick = () => {
		console.log('Button clicked');
	};

	// checkbox related function(s)
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = (checked) => {
		setIsChecked(checked);
	};

	// dropdown related function(s)
	const options = [
		{ label: '7', value: 'window7' },
		{ label: '9', value: 'window9' },
		{ label: '11', value: 'window11' },
	];

	return (
		<div className="App flex flex-col">
			<h1>Hello, World!</h1>

			<h3>This is the Button component</h3>
			<Button className="button button-m" onClick={handleClick}>
				Click me
			</Button>
			<hr />

			<h3>This is the Checkbox component</h3>
			<Checkbox checked={isChecked} onChange={handleCheckboxChange}>
				Check this box!
			</Checkbox>
			<hr />

			<h3>This is the Dropdown component</h3>
			<Dropdown options={options} children="window size" />
		</div>
	);
}

export default App;
