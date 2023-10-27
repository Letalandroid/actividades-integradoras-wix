import styles from '../Home/Home.module.scss';
import Header from '../../components/Header/Header';
import SectText from '../../components/SectText/SectText';
import presentacion from '../../assets/presentacion.pdf';

const Presentacion = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<SectText title="Presentación" embed_url={presentacion} />
			</main>
		</>
	);
};

export default Presentacion;
