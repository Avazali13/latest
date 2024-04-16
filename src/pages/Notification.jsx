import { NavLink } from "react-router-dom";
import Avatar from "../ui/Avatar";
import Card from "../ui/Card";
import Heading from "../ui/Heading";

function Notification() {
  return (
    <>
      <Heading className="mb-4 text-gray-500" as="h1">
        Notifications
      </Heading>
      <Card noPadding={true}>
        <div className="">
          <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
            <NavLink>
              <Avatar />
            </NavLink>
            <div>
              <NavLink className="font-semibold hover:underline">
                John doe
              </NavLink>{" "}
              liked <NavLink className="text-blue-400">your photo</NavLink>{" "}
            </div>
          </div>
          <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
            <NavLink>
              <Avatar />
            </NavLink>
            <div>
              <NavLink className="font-semibold hover:underline">
                John doe
              </NavLink>{" "}
              liked <NavLink className="text-blue-400">your photo</NavLink>{" "}
            </div>
          </div>
          <div className="flex gap-2 items-center border-b border-b-gray-100 p-4">
            <NavLink>
              <Avatar />
            </NavLink>
            <div>
              <NavLink className="font-semibold hover:underline">
                John doe
              </NavLink>{" "}
              liked <NavLink className="text-blue-400">your photo</NavLink>{" "}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Notification;
