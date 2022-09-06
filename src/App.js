import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeCocktail from './pages/HomeCocktail'
import CocktailDetail from './pages/CocktailDetail'
import Err from './pages/Err'
import {CocktailProvider} from './CocktailContext'
import CocktailNav from './components/CocktailNav'
import About from './pages/About'

function App() {
	return (
		<div>
			<CocktailProvider>
				<BrowserRouter>
			<CocktailNav />

					<Routes>
						<Route path='/' element={<HomeCocktail />} />
						<Route path='/about' element={<About />} />

						<Route
							path='/cocktail/:id'
							element={<CocktailDetail />}
						/>
						<Route path='*' element={<Err />} />
                        
					</Routes>
				</BrowserRouter>
			</CocktailProvider>
		</div>
	)
}

export default App
