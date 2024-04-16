import {
  Avatar,
  Box,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "./Comment";
import PostFooter from "./PostFooter";

function ProfilePost({ img }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={"50"}>
            <Flex color={"white"}>
              <AiFillHeart size={20} />
              <Text fontWeight={"BOLD"} ml={2}>
                7
              </Text>
            </Flex>
            <Flex color={"white"}>
              <FaComment size={20} />
              <Text fontWeight={"BOLD"} ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "3xl", md: "6xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton color={"white"} size={"4"} />
          <ModalBody bg={"black"} pb={5}>
            <Flex
              gap="4"
              w={{ base: "90%", sm: "70%", md: "full" }}
              mx={"auto"}
            >
              <Box
                borderRadius={4}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
              >
                <Image src={img} alt="ptofile post" />
              </Box>
              <Flex
                flex={1}
                flexDir={"column"}
                px={10}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src="../../assets/img1.jpg"
                      size={"sm"}
                      name="As a programmer"
                    />
                    <Text color={"white"} fontWeight={"bold"} fontSize={12}>
                      asaprogrammer
                    </Text>
                  </Flex>
                  <Box
                    _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4}
                    p={1}
                  >
                    <MdDelete color="white" size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
                <Divider my={4} bg={"gray.500"} />
                <VStack
                  w="full"
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                >
                  <Comment
                    createdAt="1d ago"
                    username="asaprogrammer"
                    profilePic="../../assets/img3.jpg"
                    text={"Dummy images from"}
                  />
                  <Comment
                    createdAt="12h ago"
                    username="asaprogrammer"
                    profilePic="../../assets/img2.jpg"
                    text={"Dummy images fromsssskjw qwnsknqksq ksikqnsksfromsssskjw qwnsknqksq ksikqnsks fromsssskjw qwnsknqksq ksikqnsks"}
                  />
                  <Comment
                    createdAt="13w ago"
                    username="asaprogrammer"
                    profilePic="../../assets/img4.jpg"
                    text={"Dummy images from"}
                  />
                   <Comment
                    createdAt="13w ago"
                    username="asaprogrammer"
                    profilePic="../../assets/img4.jpg"
                    text={"Dummy images from"}
                  />
                   <Comment
                    createdAt="13w ago"
                    username="asaprogrammer"
                    profilePic="../../assets/img4.jpg"
                    text={"Dummy images from"}
                  />
                   <Comment
                    createdAt="13w ago"
                    username="asaprogrammer"
                    profilePic="../../assets/img4.jpg"
                    text={"Dummy images from"}
                  />
                   <Comment
                    createdAt="13w ago"
                    username="asaprogrammer"
                    profilePic="../../assets/img4.jpg"
                    text={"Dummy images from"}
                  />
                   <Comment
                    createdAt="13w ago"
                    username="asaprogrammer"
                    profilePic="../../assets/img4.jpg"
                    text={"Dummy images from"}
                  />
                   <Comment
                    createdAt="13w ago"
                    username="asaprogrammer"
                    profilePic="../../assets/img4.jpg"
                    text={"Dummy images from"}
                  />
                   <Comment
                    createdAt="13w ago"
                    username="asaprogrammer"
                    profilePic="../../assets/img4.jpg"
                    text={"Dummy images from"}
                  />
                </VStack>
                <Divider my={4} bg={'gray.8000'}/>
                <PostFooter isProfilePage={true}/>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProfilePost;
