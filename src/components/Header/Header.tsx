import styles from './Header.module.scss'
import logo from '/logo.png'

const Header = () => {
	return (
		<header className={styles.header}>
			<img className={styles.header__logo} src={logo} />
			<nav className={styles.header__nav}>
				<a href="/">Inicio</a>
				<a href="#presentación">Presentación</a>
				<a href="/mapa-recorrido">Mapa de contexto</a>
				<a href="/narracion-colectiva">Narración colectiva</a>
				<a href="/mapa-contexto">Mapa de recorrido</a>
				<a href="/expo">Exposición</a>
			</nav>
		</header>
	);
};

export default Header