import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import {
	Navbar,
	Container,
	Nav,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useNavigate } from 'react-router-dom'

interface MenuType {
	searchUser: string
	setSearchUser: Dispatch<SetStateAction<string>>
}

export const Menu: FC<MenuType> = ({ searchUser, setSearchUser }) => {
	const navigate = useNavigate()
	return (
		<Navbar bg='light' expand='lg' className='mb-3'>
			<Container fluid='md'>
				<Navbar.Brand>
					<LinkContainer to='/'>
						<Nav.Link>GitHub Users</Nav.Link>
					</LinkContainer>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav className='me-auto my-2 my-lg-0' navbarScroll>
						<LinkContainer to='/'>
							<Nav.Link className='ml-5'>Home</Nav.Link>
						</LinkContainer>
					</Nav>
					<Form className='d-flex'>
						<FormControl
							type='text'
							value={searchUser}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								navigate('/')
								setSearchUser(e.target.value)
							}}
							placeholder='Search'
							className='me-2'
							aria-label='Search'
						/>
						<Button variant='outline-success' onClick={() => setSearchUser('')}>
							Clear
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
