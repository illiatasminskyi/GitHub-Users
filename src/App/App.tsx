import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from '../components/Menu/Menu'
import { Home } from '../pages/Home/Home'
import { User } from '../pages/User/User'
import './App.css'

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Menu />
				<Container fluid='md'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/user' element={<User />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</div>
	)
}

export default App
