export default ({ id, student }) => (
	<div>
		<h2>
			{student.first_name} {student.last_name}
		</h2>
		<p>{student.email}</p>
		<style jsx>
			{`
				div {
					margin-left: 30%;
				}
			`}
		</style>
	</div>
);
