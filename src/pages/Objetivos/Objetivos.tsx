import styles from '../Home/Home.module.scss';
import Header from '../../components/Header/Header';
import SectText from '../../components/SectText/SectText';
import objetivos from '../../assets/objetivos.pdf'

const Objetivos = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<SectText title="Objetivos" embed_url={objetivos} />
			</main>
		</>
	);
};

export default Objetivos;
