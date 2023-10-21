import styles from './Home.module.scss';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import SectText from '../../components/SectText/SectText';
import yoxd from '../../assets/yo.jpg';

const Home = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<article>
					<SectText
                    title='Presentación'
						img={yoxd}
						descripcion="Buenas tardes a todos los presentes, me llamo Carlos Jesús Moran Mauricio de la carrera de Ing. de Sistemas, valores y fortalezas seria quizá la puntualidad, ante todo el respeto y la amabilidad, me gusta jugar videojuegos, programar o escuchas música y en cuanto a las expectativas, espero llevarme bien con todos además de terminando el curso llevarme todos los conocimientos posibles para tener un mejor rendimiento en cuanto al siguiente curso. Gracias."
					/>
				</article>
			</main>
		</>
	);
};

export default Home;
