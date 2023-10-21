import styles from '../Home/Home.module.scss';
import Header from '../../components/Header/Header';
import SectText from '../../components/SectText/SectText';

const NarracionConectiva = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<SectText
					title="Mapa de Contexto"
					iframe_url={'https://www.youtube.com/embed/7m25KtP3XYk'}
				/>
			</main>
		</>
	);
};

export default NarracionConectiva;
