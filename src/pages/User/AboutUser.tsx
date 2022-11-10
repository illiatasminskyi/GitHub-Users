import { FC } from 'react'
import { Card, Col, Row, Stack } from 'react-bootstrap'

interface AboutUserType {
	login: string
	name: string
	email: string
	gh: string
	avatar_url: string
	following: number
	followers: number
	blog: string
	bio: string
}

export const AboutUser: FC<AboutUserType> = ({
	login,
	name,
	email,
	gh,
	avatar_url,
	following,
	followers,
	blog,
	bio,
}) => {
	return (
		<Row>
			<Col md={4} className='mb-4'>
				<Card className='p-3'>
					<img src={avatar_url} alt='Avatar' />
				</Card>
			</Col>
			<Col>
				<Col md={12} className='mb-4'>
					<Card className='p-3'>
						{login !== null && <div className='my-1'>Login: {login}</div>}
						{name !== null && <div className='my-1'>Name: {name}</div>}

						{gh !== null && (
							<div className='my-1'>
								GitHub Page:{' '}
								<a href={gh} target='_blank'>
									Open
								</a>
							</div>
						)}

						<Stack direction='horizontal' gap={2} className='my-1'>
							<img
								src='https://img.icons8.com/material-rounded/24/null/conference-call.png'
								alt='followers'
								style={{
									height: '20px',
								}}
							/>
							<div>{followers} followers</div>
							<img
								src='https://img.icons8.com/material-rounded/24/null/user.png'
								alt='following'
								style={{
									height: '20px',
								}}
							/>

							<div>{following} following</div>
						</Stack>
						<div className='mt-3'>
							{blog !== null && (
								<div className='my-1'>
									Blog:{' '}
									<a href={blog} target='_blank'>
										Open
									</a>
								</div>
							)}
							{email !== null && (
								<div className='my-1'>
									Email: <a href={'mailto:' + email}>{email}</a>
								</div>
							)}
						</div>
					</Card>
				</Col>
				{email !== null && (
					<Col className='mt-4'>
						<Card className='p-3'>
							<div className='my-1'>{bio}</div>
						</Card>
					</Col>
				)}
			</Col>
		</Row>
	)
}
