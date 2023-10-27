import styles from './Header.module.scss'
import logo from '/logo.png'

const Header = () => {
	return (
		<header className={styles.header}>
			<img className={styles.header__logo} src={logo} />
			<nav className={styles.header__nav}>
				<a href="/">Inicio</a>
				<a href="/presentacion">Presentación</a>
				<a href="/mapa-de-contexto">Mapa de contexto</a>
				<a href="/narracion-colectiva">Narración colectiva</a>
				<a href="/mapa-recorrido">Mapa de recorrido</a>
				<a href="/objetivos">Objetivos</a>
				<a href="/exposicion">Exposición</a>
			</nav>
		</header>
	);
};

export default Header