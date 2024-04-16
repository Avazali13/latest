import { Avatar, Flex, Text } from "@chakra-ui/react";

function Comment({ createdAt, username, profilePic, text }) {
  return (
    <div className="text-white">
      <Flex gap={4} >
        <Avatar src={profilePic} name={username} size={"sm"} />
        <Flex direction={"column"}>
          <Flex gap={2} >
            <Text fontWeight={"bold"} fontSize={12} minWidth={'100px'}>
              {username}
            </Text>
            <Text fontSize={12} color={"gray.500"}>
              {text}
            </Text>
          </Flex>
            <Text fontSize={12} color={"gray"}>
              {createdAt}
            </Text>
        </Flex>
      </Flex>
    </div>
  );
}

export default Comment;
