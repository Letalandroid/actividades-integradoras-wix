import styles from '../Home/Home.module.scss';
import Header from '../../components/Header/Header';
import SectText from '../../components/SectText/SectText';

const SpotPublicitario = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<SectText
					title="Spot Publicitario"
					iframe_url={'https://app.animaker.com/animo/tuvId6rmLNCA5pKk/'}
				/>
			</main>
		</>
	);
};

export default SpotPublicitario;
