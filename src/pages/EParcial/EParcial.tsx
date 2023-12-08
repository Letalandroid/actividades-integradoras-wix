import styles from '../Home/Home.module.scss';
import Header from '../../components/Header/Header';
import SectText from '../../components/SectText/SectText';

const EParcial = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<SectText
					title="Examen Final"
					iframe_url={'https://www.youtube.com/embed/we9cZRUvEDE'}
				/>
			</main>
		</>
	);
};

export default EParcial;
