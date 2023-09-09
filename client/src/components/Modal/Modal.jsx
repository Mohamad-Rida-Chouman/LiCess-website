import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
	useEffect(() => {
		const handleEscapeKeyPress = (event) => {
			if (event.keyCode === 27) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('keydown', handleEscapeKeyPress);
		}

		return () => {
			document.removeEventListener('keydown', handleEscapeKeyPress);
		};
	}, [isOpen, onClose]);

	const handleOverlayClick = (event) => {
		if (event.target === event.currentTarget) {
			onClose();
		}
	};

	return (
		<>
			{isOpen && (
				<div className="modal-overlay" onClick={handleOverlayClick}>
					<div className="modal">
						<button className="close-button" onClick={onClose}>
							X
						</button>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
