import { Avatar } from "@chakra-ui/react";
import { useState } from "react";

function SuggestedUser({ followers, name, avatar }) {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <div>
      <div className="flex mb-8 justify-between max-w-[520px]">
        <div className="flex gap-4 ">
          <Avatar src={avatar} name={name} size={"2xl"} />
          <div className="mt-4">
            <p className="mb-3">{name}</p>
            <p>{followers} followers</p>
          </div>
        </div>
        <button onClick={()=>setIsFollowed(val=>!val)} className="mt-10 font-bold">
          <h4 className="cursor-pointer hover:bg-black hover:text-white">{isFollowed ? 'Unfollow' : 'Follow'}</h4>
        </button>
      </div>
    </div>
  );
}

export default SuggestedUser;
