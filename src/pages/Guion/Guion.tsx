import styles from '../Home/Home.module.scss';
import Header from '../../components/Header/Header';
import SectText from '../../components/SectText/SectText';
import guion from '../../assets/guion.pdf';

const Guion = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<SectText title="Guion Literario" embed_url={guion} />
			</main>
		</>
	);
};

export default Guion;