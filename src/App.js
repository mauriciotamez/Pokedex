import { HashRouter, Routes, Route } from 'react-router-dom'
import NameInput from './components/NameInput'
import ProtectedRoutes from './components/ProtectedRoutes'
import Pokedex from './components/Pokedex'
import './styles.css'
import PokemonDetail from './components/PokemonDetail '

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<NameInput />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:name' element={<PokemonDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
