import React, { useEffect, useState } from 'react';
import styles from './OptionCard.module.scss';

function OptionCard({ index, show, setChoices, removeoption, item }) {
	const [value, setvalue] = useState(item);
	useEffect(() => {
		setvalue(item);
	}, [item]);
	console.log(item);

	return (
		<div className={styles.optionCard}>
			<span
				className={styles.cross}
				onClick={() => {
					removeoption(index);
				}}>
				{show && 'X'}
			</span>
			<p className={styles.key}>{`option ${index + 1}:`}</p>
			<input
				value={Object.keys(value).length != 0 ? value : ''}
				className={styles.value}
				placeholder={`Type your option ${index + 1} here...`}
				onChange={e => (
					setChoices({ i: index, value: e.target.value }), setvalue(e.target.value)
				)}
			/>
		</div>
	);
}

export default OptionCard;
