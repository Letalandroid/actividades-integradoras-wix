import styles from '../Home/Home.module.scss';
import Header from '../../components/Header/Header';
import SectText from '../../components/SectText/SectText';
import storyboard from '../../assets/storyboard.pdf';

const Storyboard = () => {
    return (
			<>
				<Header />
				<main className={styles.main}>
					<SectText title="Storyboard" embed_url={storyboard} />
				</main>
			</>
		);
}

export default Storyboard