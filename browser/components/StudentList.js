import React from "react";

export default function StudentList(props) {
	const { students, getSingleStudent, getStudentTests } = props;
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>Name</th>
						<th>Tests</th>
					</tr>
					{props.students.map((student) => {
						return (
							<tr key={students.id} students={props.students}>
								<td>{student.fullName}</td>
								<td
									onClick={() => {
										getSingleStudent(student.id),
                    getStudentTests(student.id);
									}}
								>
									Details
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
