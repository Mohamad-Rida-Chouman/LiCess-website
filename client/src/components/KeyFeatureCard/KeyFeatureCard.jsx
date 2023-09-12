import React from 'react';
import './KeyFeatureCard.css';
import '../../base.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const KeyFeatureCard = ({ title, body, buttonText, onButtonClick, linkTo }) => {
	return (
		<div className="feature-card flex flex-col justify-center align-center padding-m gap-m">
			<h3>{title}</h3>
			<p>{body}</p>
			<Link className="width-100" to={linkTo}>
				<Button className="button button-s width-100" onClick={onButtonClick}>
					{buttonText}
				</Button>
			</Link>
		</div>
	);
};

export default KeyFeatureCard;
