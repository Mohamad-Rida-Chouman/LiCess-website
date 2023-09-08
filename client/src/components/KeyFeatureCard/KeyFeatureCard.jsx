import React from 'react';
import './KeyFeatureCard.css';
import '../../base.css';
import Button from '../Button/Button';

const KeyFeatureCard = ({ title, body, buttonText, onButtonClick }) => {
	return (
		<div className="feature-card flex flex-col justify-center align-center padding-m gap-m">
			<h3>{title}</h3>
			<p>{body}</p>
			<Button className="button button-s width-100" onClick={onButtonClick}>
				{buttonText}
			</Button>
		</div>
	);
};

export default KeyFeatureCard;
