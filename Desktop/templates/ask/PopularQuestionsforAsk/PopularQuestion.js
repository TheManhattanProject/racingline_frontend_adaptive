import Link from 'next/link';
import React from 'react';
import styles from './PopularQuestion.module.scss';

function PopularQuestion({ description, quuid }) {
	return (
		<div className={styles.question}>
			<Link href={`/question/${quuid}`} style={{textDecoration: "none"}}>
				<p>{description}</p>
			</Link>
			<hr />
		</div>
	);
}

export default PopularQuestion;
