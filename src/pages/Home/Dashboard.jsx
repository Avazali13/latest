import PostFormCard from "../../ui/PostFormCard";

import FeedPost from "./FeedPost";

function Dashboard() {
  return (
    <div className="flex mt-4 gap-4  md:mx-2 ">
      <div className="grow">
        <PostFormCard />
        <FeedPost />
        <FeedPost />
        <FeedPost />
      </div>
    </div>
  );
}

export default Dashboard;
