import Title from '../Title/Title';
import styles from './SectText.module.scss';

interface SectTextInterface {
	title: string;
	img: string;
	descripcion: string;
}

const SectText = ({ title, img, descripcion }: SectTextInterface) => {
	return (
		<div className={styles.container}>
			<Title title={title} />
			<div className={styles.container__secttext}>
				<section className={styles.section}>
					<img src={img} />
				</section>
				<section className={styles.section}>
					<p>{descripcion}</p>
				</section>
			</div>
		</div>
	);
};

export default SectText;
