import PollsCard from './PollsCard';
import styles from './PollsList.module.scss';

function PollsList({ polls }) {
	console.log(polls);
	return (
		<div className={styles.listContainer}>
			{polls &&
				polls.length > 0 &&
				polls.map((item, i) => {
					return <PollsCard key={i} {...item} />;
				})}
		</div>
	);
}

export default PollsList;
