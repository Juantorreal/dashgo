import { Avatar, Box, Flex, Text} from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({showProfileData=true}:ProfileProps) {
    return(
        <Flex
        align="center"
        >
           {showProfileData && (
                <Box
                mr="4"
                textAlign="right"
                >
    <Text>Juan Torreal</Text>
    <Text color="gray.300" fontSize="small">juantorreal@gmail.com</Text>
    
                </Box>
           )}
            <Avatar size="md" name="Juan Torreal" />
        </Flex>
    );
}