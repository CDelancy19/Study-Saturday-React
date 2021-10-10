import React from "react";

export default function SingleStudent(props) {
	const { selectedStudent, selectedTests } = props;
  const [ grade ] = selectedTests
	return (
		<div>
			<h3>{selectedStudent.fullName}</h3>
			<table>
				<tbody>
					<tr>
						<th>Subject</th>
						<th>Grade</th>
					</tr>
					{selectedTests.map((test) => {
						return (
							<tr key={test.id}>
								<td>{test.subject}</td>
								<td>{test.grade}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
