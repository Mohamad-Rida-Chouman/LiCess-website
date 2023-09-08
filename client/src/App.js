import { useState } from 'react';
import './App.css';
import './base.css';
import Button from './components/Button/Button';
import Checkbox from './components/Checkbox/Checkbox';

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

	return (
		<div className="App flex flex-col">
			<h1>Hello, World!</h1>

			<h3>This is the Button component</h3>
			<Button className="button button-m" onClick={handleClick}>
				Click me
			</Button>

			<h3>This is the Checkbox component</h3>
			<Checkbox checked={isChecked} onChange={handleCheckboxChange}>
				Check this box!
			</Checkbox>
		</div>
	);
}

export default App;
