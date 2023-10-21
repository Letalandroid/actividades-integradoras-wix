import styles from './Title.module.scss'

interface TitleInterface {
    title: string
}

const Title = ({ title }: TitleInterface) => {
	return <h1 className={styles.h1}>{title}</h1>;
};

export default Title