import React from 'react';
import '../../base.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const ReactSelectDropdown = (defaultValue, dropdownOptions) => {
	<Select
		closeMenuOnSelect={false}
		components={animatedComponents}
		defaultValue={defaultValue}
		isMulti
		options={dropdownOptions}
	/>;
};

export default ReactSelectDropdown;
