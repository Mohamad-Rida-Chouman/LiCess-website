import React, { useState } from 'react';
import '../../base.css';
import Select from 'react-select';
import Button from '../Button/Button';

const ReactSelectDropdown = (props) => {
	const [selectedOptions, setSelectedOptions] = useState();

	function handleSelect(data) {
		setSelectedOptions(data);
	}

	return (
		<div className="main-dropdown-container">
			<div className="dropdown-container">
				<Select
					closeMenuOnSelect={false}
					options={props.optionList}
					placeholder="Select Window Size(s)"
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
