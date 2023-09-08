import React from 'react';
import './Radio.css';
import '../../base.css';

const Radio = ({ className, options, selectedOption, onChange }) => {
	const handleOptionChange = (e) => {
		const selectedValue = e.target.value;
		const selectedLabel = options.find(
			(option) => option.value === selectedValue
		).label;
		onChange(selectedLabel);
	};

	return (
		<div className="flex flex-col">
			<p>Selected option: {selectedOption}</p>
			{options.map((option) => (
				<label key={option.value} className="flex align-center">
					<input
						className={className}
						type="radio"
						name="radioOptions"
						value={option.value}
						checked={selectedOption === option.label}
						onChange={handleOptionChange}
					/>
					<span className="radio"></span>
					{option.label}
				</label>
			))}
		</div>
	);
};

export default Radio;
