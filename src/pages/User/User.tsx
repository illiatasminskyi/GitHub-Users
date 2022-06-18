import { useEffect, useState } from 'react'
import { Card, Col, Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { v4 } from 'uuid'
import api from '../../core/api'
import { AboutUser } from './AboutUser'
import { Repos } from './Repos'

export const User = () => {
	const [userData, setUserData] = useState({
		login: '',
		name: '',
		email: '',
		gh: '',
		avatar_url: '',
		following: 0,
		followers: 0,
		blog: '',
		bio: '',
	})
	const [reposData, setReposData] = useState<any[]>([])
	const { login } = useParams()

	useEffect(() => {
		async function getUser() {
			try {
				const res = await api.get(`/users/${login}`)
				await setUserData({
					login: res.data.login,
					name: res.data.name,
					email: res.data.email,
					gh: res.data.html_url,
					avatar_url: res.data.avatar_url,
					following: res.data.following,
					followers: res.data.followers,
					blog: res.data.blog,
					bio: res.data.bio,
				})
				const resRepos = await api.get(`users/${login}/repos`)
				const resItems: any[] = []
				await resRepos.data.map((resItem: any) =>
					resItems.push({
						name: resItem.name,
						html_url: resItem.html_url,
						full_name: resItem.full_name,
					})
				)
				setReposData(resItems)
			} catch (error) {
				console.error(error)
			}
		}
		getUser()
	}, [])

	return (
		<>
			<AboutUser {...userData} />
			<Col className='mb-4'>
				<Card className='p-3'>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Name repositories</th>
								<th className='d-none d-md-block'>GitHub</th>
							</tr>
						</thead>
						<tbody>
							{reposData.map(repo => (
								<Repos key={v4()} {...repo} />
							))}
						</tbody>
					</Table>
				</Card>
			</Col>
		</>
	)
}
