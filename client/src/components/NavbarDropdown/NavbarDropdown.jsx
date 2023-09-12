import React, { useState, useEffect, useRef } from 'react';
import './NavbarDropdown.css';
import Button from '../Button/Button';
import SvgIcon from '../SvgIcon/SvgIcon';
import Hamburger from '../../assets/hamburger.svg';

const NavbarDropdown = ({ options, className, dropdown }) => {
	const dropdownRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);
	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};
	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);
	return (
		<div>
			<Button className="button-navbar button-xs" onClick={toggleDropdown}>
				<SvgIcon
					className="small-icon flex align-center"
					src={Hamburger}
					alt="Hamburger icon"
				/>
				<div
					className={`grey-background dropdown-menu ${isOpen ? 'open' : ''}`}
					ref={dropdownRef}
				>
					{isOpen && (
						<ul className="flex flex-col gap-s">
							{options.map((option) => (
								<li className="no-style-list" key={option.value}>
									<Button
										className="button-navbar-dropdown button-s width-100"
										linkTo={option.link}
										onClick={option.click}
									>
										{option.label}
									</Button>
								</li>
							))}
						</ul>
					)}
				</div>
			</Button>
			{isOpen && <div className="dropdown-overlay" />}
		</div>
	);
};

export default NavbarDropdown;
