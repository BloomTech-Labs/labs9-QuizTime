import {StudentElement, BoxText, Button} from "../design-system/primitives"; 
const StudentBar = ({ id, student }) => (
    <StudentElement>
        <BoxText> {student.first_name} {student.last_name}</BoxText>
        <BoxText>{student.email}</BoxText>
        <BoxText>Average: </BoxText>
        <Button variant="error">X</Button>
    </StudentElement>
);

export default StudentBar;