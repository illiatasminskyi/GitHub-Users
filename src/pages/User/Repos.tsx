export const Repos = ({ ...props }) => {
	return (
		<tr>
			<td>{props.name}</td>
			<td className='d-none d-md-block'>
				<a href={props.html_url} target='_blank'>
					{props.full_name}
				</a>
			</td>
		</tr>
	)
}
