import React from 'react';
import './Radio.css';
import '../../base.css';

const Radio = ({
	className,
	options,
	selectedOption,
	onChange,
	title,
	name,
}) => {
	const handleOptionChange = (e) => {
		const selectedValue = e.target.value;
		const selectedLabel = options.find(
			(option) => option.value === selectedValue
		).label;
		onChange(selectedLabel);
	};

	return (
		<div className="flex flex-col gap-s">
			<p className="flex justify-center padding-s border-underline bold">
				{title}: {selectedOption}
			</p>
			{options.map((option) => (
				<label key={option.value} className="flex align-center">
					<input
						className={className}
						type="radio"
						name={name}
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
