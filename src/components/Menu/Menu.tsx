import React from 'react'
import {
	Navbar,
	Container,
	Nav,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const Menu = () => {
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
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/user'>
							<Nav.Link>UserTest</Nav.Link>
						</LinkContainer>
					</Nav>
					<Form className='d-flex'>
						<FormControl
							type='search'
							placeholder='Search'
							className='me-2'
							aria-label='Search'
						/>
						<Button variant='outline-success'>Search</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
