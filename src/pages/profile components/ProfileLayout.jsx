import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

import Avatar from "../../ui/Avatar";
import Card from "../../ui/Card";

import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoIosImages } from "react-icons/io";
import { PiUsersThree } from "react-icons/pi";
// import PostCard from "../ui/PostCard";

const StyledNav = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    border-bottom: solid 0.2rem white;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-blue-200);
    border-radius: var(--border-radius-sm);
  }
`;

function ProfileLayout() {
  return (
    <>
      <Card noPadding={true}>
        <div className="relative overflow-hidden rounded-xl">
          <div className="h-80 overflow-hidden flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="post-img"
            />
          </div>
          <div className="absolute top-60 left-4">
            <Avatar size="lg" />
          </div>
          <div className="p-4 pt-1 md:pt-4 pb-0 ">
            <div className="ml-48 md:ml-60 flex flex-col gap-5">
              <h1 className="text-3xl font-bold">John Doe</h1>
              <div className="text-gray-500 leading-4 pt-4 flex gap-5">
                <p>
                  <span className="font-bold text-black">4 </span> Posts
                </p>
                <p>
                  <span className="font-bold text-black">149 </span> Followers
                </p>
                <p>
                  <span className="font-bold text-black">132 </span> Following
                </p>
              </div>
              <div >
                <p className="font-bold mb-2">As a programmer</p>
                <p className="text-gray-500">You can deserve it because of your hardworking</p>
              </div>
            </div>
            <div className="md:mt-24 mt-16 flex justify-between md:justify-normal  md:gap-9 ">
              <StyledNav to="posts">
                <span className="text-4xl">
                  <IoDocumentTextOutline />
                </span>
                <span className="hidden sm:block">Posts</span>
              </StyledNav>
              <StyledNav to="about">
                <span className="text-4xl">
                  <IoIosInformationCircleOutline />
                </span>

                <span className="hidden sm:block">About</span>
              </StyledNav>
              <StyledNav to="friends">
                <span className="text-4xl">
                  <PiUsersThree />
                </span>

                <span className="hidden sm:block">Friends</span>
              </StyledNav>
              <StyledNav to="photos">
                <span className="text-4xl">
                  <IoIosImages />
                </span>

                <span className="hidden sm:block">Photos</span>
              </StyledNav>
            </div>
          </div>
        </div>
      </Card>
      <Outlet />
    </>
  );
}

export default ProfileLayout;
