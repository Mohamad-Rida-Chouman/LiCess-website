import React, { useState } from 'react';
import '../../base.css';
import Select from 'react-select';
import './ReactSelectDropdown.css';

const ReactSelectDropdown = (props) => {
	const [selectedOptions, setSelectedOptions] = useState();

	function handleSelect(data) {
		setSelectedOptions(data);
		props.parentCallback(data);
	}

	const customStyles = {
		option: (defaultStyles, state) => ({
			...defaultStyles,
			color: state.isSelected ? '#ffffff' : '#4b97e8',
			backgroundColor: state.isSelected ? '#4b97e8' : '#ffffff',
		}),

		control: (defaultStyles) => ({
			...defaultStyles,
			backgroundColor: '#4b97e8',
			padding: '0.5px',
			border: 'none',
			borderRadius: '5px',
			boxShadow: 'none',
			minHeight: '0px',
			cursor: 'pointer',
		}),
		singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#ffffff' }),
		container: (defaultStyles) => ({
			...defaultStyles,
			padding: '0px',
			minHeight: '0px',
			borderRadius: '5px',
			cursor: 'pointer',
		}),
		placeholder: (defaultStyles) => ({ ...defaultStyles, color: '#ffffff' }),
		valueContainer: (defaultStyles) => ({ ...defaultStyles, color: '#ffffff' }),
		clearIndicator: (defaultStyles) => ({ ...defaultStyles, color: '#ffffff' }),
		input: (defaultStyles) => ({ ...defaultStyles, color: '#ffffff' }),
		dropdownIndicator: (defaultStyles) => ({
			...defaultStyles,
			color: '#ffffff',
		}),
		menu: (defaultStyles) => ({
			...defaultStyles,
			padding: '0px',
			minHeight: '0px',
			borderRadius: '5px',
		}),
		menuList: (defaultStyles) => ({
			...defaultStyles,
			maxHeight: '36vh',
			scrollbarColor: 'aliceblue aliceblue',
			borderRadius: '5px',
		}),
		scrollbar: (defaultStyles) => ({
			...defaultStyles,
			maxHeight: '36vh',
			color: 'aliceblue',
			borderRadius: '5px',
		}),
	};

	return (
		<div className="main-dropdown-container">
			<div className="dropdown-container">
				<Select
					className="dropdown-select"
					closeMenuOnSelect={false}
					options={props.optionList}
					placeholder={props.placeholder}
					value={selectedOptions}
					onChange={handleSelect}
					isSearchable={true}
					isMulti
					styles={customStyles}
				/>
			</div>
		</div>
	);
};

export default ReactSelectDropdown;
