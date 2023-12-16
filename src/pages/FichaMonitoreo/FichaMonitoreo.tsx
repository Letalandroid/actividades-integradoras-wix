import styles from '../Home/Home.module.scss';
import Header from '../../components/Header/Header';
import SectText from '../../components/SectText/SectText';
import ficha from '../../assets/ficha_monitoreo.pdf';

const FichaMonitoreo = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<SectText title="Ficha de Monitoreo" embed_url={ficha} />
			</main>
		</>
	);
};

export default FichaMonitoreo;
