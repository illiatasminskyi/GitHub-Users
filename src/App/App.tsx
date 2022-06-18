import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menu } from '../components/Menu/Menu'
import Home from '../pages/Home/Home'
import { User } from '../pages/User/User'
import './App.css'

const App = () => {
	const [searchUser, setSearchUser] = useState<string>('')

	return (
		<div className='App'>
			<BrowserRouter>
				<Menu searchUser={searchUser} setSearchUser={setSearchUser} />
				<Container fluid='md'>
					<Routes>
						<Route
							path='/'
							element={
								<Home searchUser={searchUser} setSearchUser={setSearchUser} />
							}
						/>
						<Route path='/user/:login' element={<User />} />
					</Routes>
				</Container>
			</BrowserRouter>
		</div>
	)
}

export default App
