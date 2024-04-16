import Avatar from "./Avatar";

function FriendInfo() {
  return (
    <div className="flex gap-2 border-b p-6 border-b-gray-100">
      <Avatar />
      <div>
        <h3 className="font-bold text-xl">JohnDoe</h3>
      </div>
    </div>
  );
}

export default FriendInfo;
