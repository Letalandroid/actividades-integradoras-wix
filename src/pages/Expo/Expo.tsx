import styles from '../Home/Home.module.scss';
import Header from '../../components/Header/Header';
import SectText from '../../components/SectText/SectText';

const Expo = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<SectText
					title="Exposición"
					iframe_url={'https://www.youtube.com/embed/tDKLMSJS9ts'}
				/>
			</main>
		</>
	);
};

export default Expo;
