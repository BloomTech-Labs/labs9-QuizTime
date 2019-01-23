import {StudentElement, BoxText, Button} from "../design-system/primitives"; 
export default ({ id, student }) => (
    <StudentElement>
        <BoxText> {student.first_name} {student.last_name}</BoxText>
        <BoxText>{student.email}</BoxText>
        <BoxText>Average: </BoxText>
        <Button variant="error">Remove</Button>
    </StudentElement>
);
