import styles from '../Home/Home.module.scss';
import Header from '../../components/Header/Header';
import SectText from '../../components/SectText/SectText';
import mapa from '../../assets/mapa_recorrido.pdf';

const MapaRecorrido = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<SectText title="Mapa de Recorrido" embed_url={mapa} />
			</main>
		</>
	);
};

export default MapaRecorrido;
