import { Text, Box } from "@rebass/emotion";

export default ({ id, student }) => (
    <Box
        m={5}
        css={{
            "&:hover": {
                border: `1px solid lightgrey`
            }
        }}
    >
        <Text color="red1" py={2} fontWeight={700} fontFamily="sans">
            {student.first_name} {student.last_name}
        </Text>
        <Text fontSize={0} fontFamily="mono">
            {student.email}
        </Text>
    </Box>
);
