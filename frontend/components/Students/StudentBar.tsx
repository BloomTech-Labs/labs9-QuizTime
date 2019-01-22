import { Text, Box } from "@rebass/emotion";
import StudentElement from "../design-system/primitives"; 
export default ({ id, student }) => (
    <StudentElement>
        <Text color="red1" py={2} fontWeight={700} fontFamily="sans">
            {student.first_name} {student.last_name}
        </Text>
        <Text fontSize={0} fontFamily="mono">
            {student.email}
        </Text>
    </StudentElement>
);
