import { Row, Col, Button, Card } from 'react-bootstrap'
import { v4 } from 'uuid'

const img =
	'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1817194669f%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1817194669f%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.6640625%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'

const UsersArr = [
	{
		title: 'Card Title',
		text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
	},
	{
		title: 'Card Title',
		text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
	},
	{
		title: 'Card Title',
		text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
	},
	{
		title: 'Card Title',
		text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
	},
	{
		title: 'Card Title',
		text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
	},
	{
		title: 'Card Title',
		text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
	},
]

export const Home = () => {
	return (
		<Row className='justify-content-center '>
			{UsersArr.map(user => (
				<Col xs='auto' key={v4()}>
					<Card style={{ width: '16rem', margin: '15px 0' }}>
						<Card.Img variant='top' src={img} />
						<Card.Body>
							<Card.Title>{user.title}</Card.Title>
							<Card.Text>{user.text}</Card.Text>
							<Button variant='primary'>Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	)
}
