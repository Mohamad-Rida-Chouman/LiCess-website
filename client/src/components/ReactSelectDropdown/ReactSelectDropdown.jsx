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
				/>
			</div>
		</div>
	);
};

export default ReactSelectDropdown;
