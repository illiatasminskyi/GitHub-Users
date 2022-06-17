import axios from 'axios'
import { useEffect, useState } from 'react'
import { AboutUser } from './AboutUser'
import { Repos } from './Repos'
import { Card, Col, Table } from 'react-bootstrap'
import { v4 } from 'uuid'

/*
+ login
+ name
+ email
public_repos
+ followers
+ following
+ avatar_url
+ html_url

repos_url
*/

/*
name
html_url
clone_url
*/

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

	useEffect(() => {
		async function getUser() {
			try {
				const res = await axios.get(`https://api.github.com/users/illia-com`)
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
				const resRepos = await axios.get(
					`https://api.github.com/users/illia-com/repos`
				)
				const resItems: any[] = []

				await resRepos.data.map((resItem: any) =>
					resItems.push({
						name: resItem.name,
						html_url: resItem.html_url,
						clone_url: resItem.clone_url,
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
			<Col className='mt-4'>
				<Card className='p-3'>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th>Name</th>
								<th>GitHub</th>
								<th>HTTPS</th>
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
