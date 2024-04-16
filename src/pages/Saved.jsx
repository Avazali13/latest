import Heading from "../ui/Heading";
import PostCard from "./Home/FeedPost";

function Saved() {
  return (
    <>
      <Heading className="mb-4 text-gray-500" as="h1">
        Saved posts
      </Heading>
      <PostCard />
      <PostCard />
    </>
  );
}

export default Saved;
