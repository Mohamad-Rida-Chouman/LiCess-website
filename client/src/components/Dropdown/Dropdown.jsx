import React, { useState } from 'react';
import './Dropdown.css';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';

const Dropdown = ({ options, className, children, parentCallback }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOptions, setSelectedOptions] = useState([]);

	const handleOptionToggle = (option) => {
		const isSelected = selectedOptions.includes(option);
		let updatedOptions = [];

		if (isSelected) {
			updatedOptions = selectedOptions.filter(
				(selectedOption) => selectedOption !== option
			);
		} else {
			updatedOptions = [...selectedOptions, option];
		}

		setSelectedOptions(updatedOptions);
		parentCallback(updatedOptions);
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const getSelectedOptionsText = () => {
		return selectedOptions.map((option) => option.label).join(', ');
	};

	return (
		<div>
			<Button
				className="button-dropdown button-s width-100"
				onClick={toggleDropdown}
			>
				{selectedOptions.length > 0
					? `${selectedOptions.length} ${children}(s) selected`
					: `Select ${children}(s)`}
			</Button>
			<div className={className}>
				{isOpen && (
					<ul>
						{options.map((option) => (
							<li className="no-style-list" key={option.value}>
								<Checkbox
									checked={selectedOptions.includes(option)}
									onChange={() => handleOptionToggle(option)}
								>
									{option.label}
								</Checkbox>
							</li>
						))}
					</ul>
				)}
				{!isOpen && selectedOptions.length > 0 && (
					<div>
						Selected {children}(s): {getSelectedOptionsText()}
					</div>
				)}
			</div>
		</div>
	);
};

export default Dropdown;
