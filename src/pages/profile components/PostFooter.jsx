import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/Logo.jsx";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(100);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <Box mb={10} marginTop={"auto"} color={'white'}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>

      {/* {isProfilePage && (
        <Text fontSize="12" color={"gray"}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )} */}

      {!isProfilePage && (
        <>
          <Text fontSize="sm" fontWeight={700}>
            {creatorProfile?.username}{" "}
            <Text as="span" fontWeight={400}>
              {post.caption}
            </Text>
          </Text>
          {post.comments.length > 0 && (
            <Text
              fontSize="sm"
              color={"gray"}
              cursor={"pointer"}
          
            >
              View all {post.comments.length} comments
            </Text>
          )}
          {/* COMMENTS MODAL ONLY IN THE HOME PAGE */}
          {/* {isOpen ? (
            <CommentsModal isOpen={isOpen} onClose={onClose} post={post} />
          ) : null} */}
        </>
      )}

     
        <Flex
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          w={"full"}
        >
          <InputGroup>
            <Input
              variant={"flushed"}
              placeholder={"Add a comment..."}
              fontSize={14}
           
            />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
             
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      
    </Box>
  );
};

export default PostFooter;
