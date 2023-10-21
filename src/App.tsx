import './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import MapaContexto from './pages/MapaContexto/MapaContexto'
import NarracionConectiva from './pages/NarracionColectiva/NarracionColectiva'
import Error from './pages/error'

function App() {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/mapa-de-contexto" element={<MapaContexto />} />
			<Route path="/narracion-colectiva" element={<NarracionConectiva />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App
