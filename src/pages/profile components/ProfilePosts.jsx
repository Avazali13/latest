import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProfilePost from "./ProfilePost";

function ProfilePosts() {
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1,1fr)",
        md: "repeat(3,1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h="300px">contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <ProfilePost img="/src/assets/img1.jpg" />
          <ProfilePost img="/src/assets/img2.jpg" />
          <ProfilePost img="/src/assets/img3.jpg" />
          <ProfilePost img="/src/assets/img4.jpg" />
        </>
      )}
    </Grid>
  );
}

export default ProfilePosts;
