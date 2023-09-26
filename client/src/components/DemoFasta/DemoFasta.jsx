import React from 'react';
import Button from '../Button/Button';
import '../../base.css';
import { saveAs } from 'file-saver';
import Fasta from '../../assets/Proteins.fasta';

const DemoFasta = () => {
	const fastaFile = Fasta;

	const downloadDemo = async () => {
		fetch(fastaFile)
			.then(function (response) {
				return response.text();
			})
			.then(function (data) {
				var n = 500;
				var matches = data.match(/>sp\|.*\|.*\n[^>]+/g);
				function shuffleArray(array) {
					for (let i = array.length - 1; i > 0; i--) {
						const j = Math.floor(Math.random() * (i + 1));
						[array[i], array[j]] = [array[j], array[i]];
					}
				}
				shuffleArray(matches);
				var selectedProteins = matches.slice(0, n);
				var newProteinString = selectedProteins.join('\n');

				const blob = new Blob([newProteinString], {
					type: 'text/plain;charset=utf-8',
				});

				saveAs(blob, 'proteins_demo' + '.fasta');
			});
	};
	return (
		<div>
			<Button onClick={downloadDemo} className="button button-m">
				Download Demo
			</Button>
		</div>
	);
};

export default DemoFasta;
