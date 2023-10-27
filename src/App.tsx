import './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Presentacion from './pages/Presentacion/Presentacion';
import MapaContexto from './pages/MapaContexto/MapaContexto'
import NarracionConectiva from './pages/NarracionColectiva/NarracionColectiva'
import MapaRecorrido from './pages/MapaRecorrido/MapaRecorrido'
import Objetivos from './pages/Objetivos/Objetivos'
import Expo from './pages/Expo/Expo'
import Error from './pages/error'

function App() {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/presentacion" element={<Presentacion />} />
			<Route path="/mapa-de-contexto" element={<MapaContexto />} />
			<Route path="/narracion-colectiva" element={<NarracionConectiva />} />
			<Route path="/mapa-recorrido" element={<MapaRecorrido />} />
			<Route path="/objetivos" element={<Objetivos />} />
			<Route path="/exposicion" element={<Expo />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App
