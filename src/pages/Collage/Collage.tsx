import styles from '../Home/Home.module.scss';
import Header from '../../components/Header/Header';
import SectText from '../../components/SectText/SectText';
import collage from '../../assets/collage.pdf';

const Collage = () => {
    return (
			<>
				<Header />
				<main className={styles.main}>
						<SectText
							title="Collage"
							embed_url={collage}
						/>
				</main>
			</>
		);
}

export default Collage