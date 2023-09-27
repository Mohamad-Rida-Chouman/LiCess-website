import React, { useEffect } from 'react';
import './ToggleDN.css';

const ToggleDN = () => {
	useEffect(() => {
		const cookie = checkCookie('Licess-day');
		if (!cookie) {
			setChecked();
		} else {
			changeColorsDay();
		}
	}, []);

	const setChecked = () => {
		document.getElementById('checkbox').checked = true;
	};
	const changeColorsDay = () => {
		document.body.style.backgroundColor = '#ffffff';
		document.body.style.color = '#020d17';
	};
	const changeColorsNight = () => {
		document.body.style.backgroundColor = '#020d17';
		document.body.style.color = '#ffffff';
	};

	const checkCookie = (name) => {
		return document.cookie
			.split(';')
			.some((item) => item.trim().startsWith(`${name}=`));
	};

	const toggleColors = (e) => {
		if (e.target.checked) {
			document.cookie =
				'Licess-day=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
			changeColorsNight();
		} else {
			document.cookie = 'Licess-day=true';
			changeColorsDay();
		}
	};
	return (
		<div className="toggle-button">
			<label className="bb8-toggle">
				<input
					className="bb8-toggle__checkbox"
					id="checkbox"
					type="checkbox"
					onChange={toggleColors}
				/>
				<div className="bb8-toggle__container">
					<div className="bb8-toggle__scenery">
						<div className="bb8-toggle__star"></div>
						<div className="bb8-toggle__star"></div>
						<div className="bb8-toggle__star"></div>
						<div className="bb8-toggle__star"></div>
						<div className="bb8-toggle__star"></div>
						<div className="bb8-toggle__star"></div>
						<div className="bb8-toggle__star"></div>
						<div className="tatto-1"></div>
						<div className="tatto-2"></div>
						<div className="gomrassen"></div>
						<div className="hermes"></div>
						<div className="chenini"></div>
						<div className="bb8-toggle__cloud"></div>
						<div className="bb8-toggle__cloud"></div>
						<div className="bb8-toggle__cloud"></div>
					</div>
					<div className="bb8">
						<div className="bb8__head-container">
							<div className="bb8__antenna"></div>
							<div className="bb8__antenna"></div>
							<div className="bb8__head"></div>
						</div>
						<div className="bb8__body"></div>
					</div>
					<div className="artificial__hidden">
						<div className="bb8__shadow"></div>
					</div>
				</div>
			</label>
		</div>
	);
};

export default ToggleDN;
