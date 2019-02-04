import {StudentElement, BoxText, Button} from "../design-system/primitives"; 

const StudentBar = ({ id, student }) => (
    <StudentElement>
        <BoxText> {student.first_name} {student.last_name}</BoxText>
        <BoxText>{student.email}</BoxText>
    </StudentElement>
);

export default StudentBar;