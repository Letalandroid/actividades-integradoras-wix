import Title from '../Title/Title';
import styles from './SectText.module.scss';

interface SectTextInterface {
	title: string;
	img?: string;
	descripcion?: string;
	iframe_url?: string;
	embed_url?: string;
}

const SectText = ({
	title,
	img,
	descripcion,
	iframe_url,
	embed_url,
}: SectTextInterface) => {
	return (
		<div className={styles.container}>
			<Title title={title} />
			<div className={styles.container__secttext}>
				{img ? (
					<section className={styles.section}>
						<img src={img} />
					</section>
				) : (
					''
				)}
				<section className={styles.section}>
					{iframe_url ? (
						<iframe
							width="1519"
							height="595"
							src={iframe_url}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen></iframe>
					) : descripcion ? (
						<p>{descripcion}</p>
					) : (
						<embed src={embed_url} type="application/pdf" />
					)}
				</section>
			</div>
		</div>
	);
};

export default SectText;
