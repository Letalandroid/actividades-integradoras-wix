import { useState } from 'react';
import styles from './Header.module.scss'
import logo from '/logo.png'

const Header = () => {

	const [nav, setNav] = useState(false);

	return (
		<header className={styles.header}>
			<button onClick={() => setNav(!nav)} className={styles.btn__nav}>
				<i className="fas fa-bars"></i>
			</button>
			<img className={styles.header__logo} src={logo} />

			{nav ? (
				<nav style={{ top: 0 }} className={styles.header__nav}>
					<a href="/">Inicio</a>
					<a href="/presentacion">Presentación Equipo</a>
					<a href="/mapa-de-contexto">Mapa de Contexto</a>
					<a href="/narracion-colectiva">Narración colectiva</a>
					<a href="/mapa-recorrido">Mapa Recorrido</a>
					<a href="/exposicion">Exposición</a>
					<a href="/objetivos">Objetivos</a>
					<a
						href="https://app.animaker.com/animo/tuvId6rmLNCA5pKk/"
						target="_blank">
						SpotPublicitario
					</a>
					<a href="/collage">Collage</a>
					<a href="/guion">Guion</a>
					<a href="/juego-roles">Juego de Roles</a>
					<a href="/storyboard">StoryBoard</a>
					<a href="/ficha-monitoreo">Ficha Monitoreo</a>
					<a href="/examen-final">E. Final</a>
				</nav>
			) : (
				<nav className={styles.header__nav}>
					<a href="/">Inicio</a>
					<a href="/presentacion">Presentación Equipo</a>
					<a href="/mapa-de-contexto">Mapa de contexto</a>
					<a href="/narracion-colectiva">Narración colectiva</a>
					<a href="/mapa-recorrido">Mapa de recorrido</a>
					<a href="/exposicion">Exposición</a>
					<a href="/objetivos">Objetivos</a>
					<a
						href="https://app.animaker.com/animo/tuvId6rmLNCA5pKk/"
						target="_blank">
						SpotPublicitario
					</a>
					<a href="/collage">Collage</a>
					<a href="/guion">Guion</a>
					<a href="/juego-roles">Juego de Roles</a>
					<a href="/storyboard">StoryBoard</a>
					<a href="/ficha-monitoreo">Ficha de Monitoreo</a>
					<a href="/examen-final">E. Final</a>
				</nav>
			)}
		</header>
	);
};

export default Header