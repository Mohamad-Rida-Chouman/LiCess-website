import React from 'react';
import './KeyFeatureCard.css';
import '../../base.css';
import Button from '../Button/Button';

const KeyFeatureCard = ({ title, body, buttonText, onButtonClick, linkTo }) => {
	return (
		<div className="feature-card flex flex-col justify-center align-center padding-m gap-m">
			<h3>{title}</h3>
			<p>{body}</p>
			<div className="width-100">
				<Button
					className="button button-s width-100"
					onClick={onButtonClick}
					linkTo={linkTo}
				>
					{buttonText}
				</Button>
			</div>
		</div>
	);
};

export default KeyFeatureCard;
