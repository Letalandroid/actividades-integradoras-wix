import styles from '../Home/Home.module.scss';
import Header from '../../components/Header/Header';
import SectText from '../../components/SectText/SectText';

const JuegoRoles = () => {
	return (
		<>
			<Header />
			<main className={styles.main}>
				<SectText
					title="Juego de Roles"
					iframe_url={'https://www.youtube.com/embed/1vdHjhdmH6s'}
				/>
			</main>
		</>
	);
};

export default JuegoRoles;
