export const Repos = ({ ...props }) => {
	console.log(props)

	return (
		<tr>
			<td>{props.name}</td>
			<td>
				<a href={props.html_url} target='_blank'>
					{props.full_name}
				</a>
			</td>
			<td>{props.clone_url}</td>
		</tr>
	)
}
