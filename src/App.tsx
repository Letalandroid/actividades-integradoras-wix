import './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Presentacion from './pages/Presentacion/Presentacion';
import MapaContexto from './pages/MapaContexto/MapaContexto'
import NarracionConectiva from './pages/NarracionColectiva/NarracionColectiva'
import MapaRecorrido from './pages/MapaRecorrido/MapaRecorrido'
import SpotPublicitario from './pages/SpotPublicitario/SpotPublicitario';
import Objetivos from './pages/Objetivos/Objetivos'
import Expo from './pages/Expo/Expo'
import Collage from './pages/Collage/Collage';
import Guion from './pages/Guion/Guion';
import JuegoRoles from './pages/JuegoRoles/JuegoRoles';
import Storyboard from './pages/Storyboard/Storyboard';
import FichaMonitoreo from './pages/FichaMonitoreo/FichaMonitoreo';
import EParcial from './pages/EParcial/EParcial';
import Error from './pages/error'

function App() {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/presentacion" element={<Presentacion />} />
			<Route path="/mapa-de-contexto" element={<MapaContexto />} />
			<Route path="/narracion-colectiva" element={<NarracionConectiva />} />
			<Route path="/mapa-recorrido" element={<MapaRecorrido />} />
			<Route path="/spot-publicitario" element={<SpotPublicitario />} />
			<Route path="/objetivos" element={<Objetivos />} />
			<Route path="/exposicion" element={<Expo />} />
			<Route path="/collage" element={<Collage />} />
			<Route path="/guion" element={<Guion />} />
			<Route path="/juego-roles" element={<JuegoRoles />} />
			<Route path="/storyboard" element={<Storyboard />} />
			<Route path="/ficha-monitoreo" element={<FichaMonitoreo />} />
			<Route path="/examen-final" element={<EParcial />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App
