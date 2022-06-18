import { Dispatch, FC, memo, SetStateAction, useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { v4 } from 'uuid'
import api from '../../core/api'

interface HomeType {
	searchUser: string
	setSearchUser: Dispatch<SetStateAction<string>>
}

const Home: FC<HomeType> = ({ searchUser, setSearchUser }) => {
	const [UsersArr, setUsersArr] = useState<any[]>([])
	const [countUsers, setcountUsers] = useState<number>(8)

	const getUsers = async () => {
		try {
			const resUsers = await api.get(`/users?per_page=${countUsers}`)
			const Users: any[] = []
			await resUsers.data.map((resItem: any) =>
				Users.push({
					login: resItem.login,
					avatar_url: resItem.avatar_url,
				})
			)
			setUsersArr(Users)
		} catch (error) {
			console.error(error)
		}
	}

	const getSearchUsers = async () => {
		try {
			const resUsers = await api.get(`/search/users?q=${searchUser}`)

			const Users: any[] = []
			await resUsers.data.items.map((resItem: any) =>
				Users.push({
					login: resItem.login,
					avatar_url: resItem.avatar_url,
				})
			)
			setUsersArr(Users)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		let timer = setTimeout(() => {
			if (searchUser !== '') getSearchUsers()
			else if (searchUser === '') getUsers()
		}, 500)
		return () => clearTimeout(timer)
	}, [searchUser])

	useEffect(() => {
		getUsers()
	}, [countUsers])

	return (
		<>
			<Row className='justify-content-center '>
				{UsersArr.map((user: any) => (
					<Col xs='auto' key={v4()}>
						<Card style={{ width: '16rem', margin: '15px 0' }}>
							<Card.Img variant='top' src={user.avatar_url} />
							<Card.Body>
								<Card.Title>{user.login}</Card.Title>
								<Button variant='primary' onClick={() => setSearchUser('')}>
									<Link
										to={'user/' + user.login}
										style={{ color: 'white', textDecoration: 'none' }}
									>
										Go to page
									</Link>
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
			<Row className='justify-content-center my-5'>
				<Col xs='auto'>
					<Button variant='light' onClick={() => setcountUsers(countUsers + 8)}>
						<img
							src={'https://cdn-icons-png.flaticon.com/512/748/748137.png'}
							alt='Add users'
							style={{ width: '35px', color: 'white' }}
						></img>
					</Button>
				</Col>
			</Row>
		</>
	)
}

export default memo(Home)
