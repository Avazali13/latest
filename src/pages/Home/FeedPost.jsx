import { NavLink } from "react-router-dom";
import { useState} from "react";

import Avatar from "../../ui/Avatar";

import Card from "../../ui/Card";
import { NotificationsLogo, UnlikeLogo, CommentLogo } from "../../assets/Logo";

import {
  FaRegBell,
  FaRegComment,
  FaRegHeart,
  FaRegImage,
  FaShare,
} from "react-icons/fa";
import { IoIosMore } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import ClickOutHandler from "react-clickout-handler";
import { GrHide } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import styled from "styled-components";
import { Text } from "@chakra-ui/react";
import PostFooter from "../profile components/PostFooter";

export const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 8px;
    color: var(--color-grey-600);
    /* color: green; */
    font-size: 1.5rem;
    font-weight: 500;
    /* padding: 1.2rem 1.8rem; */
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active {
    color: var(--color-grey-800);
    /* color: red; */
    background-color: var(--color-brand-200);
    border-radius: var(--border-radius-sm);
  }
`;

function FeedPost() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoading,setIsLoading]=useState(true)

  
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);
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
    // {isLoading && [0,1,2,3,].map((_,idx)=>(
    //   <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
    //   <Flex gap={2}></Flex>
    //   </VStack>

    // ))}
    <Card>
      <div className="flex gap-3">
        <div>
          <NavLink to="/profile" className="cursor-pointer">
            <Avatar />
          </NavLink>
        </div>
        <div className="grow">
          <p>
            <NavLink to="/profile" className="font-semibold hover:underline">
              username
            </NavLink>{" "}
            shared a<NavLink className="text-sky-500"> post</NavLink>
          </p>
          <p className="text-gray-500 text-[1.3rem]">2 hours ago</p>
        </div>
        <div className="relative">
          <button
            className="text-gray-500"
            onClick={() => {
              setDropdownOpen((val) => !val);
            }}
          >
            {/* <IoIosMore /> */}
          </button>
          {dropdownOpen && (
            <div className="bg-red w-7 h-7 absolute top-0"></div>
          )}
          {isAuthenticated ? (
            <ClickOutHandler
              onClickOut={() => {
                setDropdownOpen(false);
              }}
            >
              <div className="relative">
                {dropdownOpen && (
                  <div className=" border border-gray-100 absolute right-6 bg-white shadow-md shadow-gray-300 p-3 rounded-sm w-[18rem] z-10 ">
                    <StyledNavLink>
                      <FaRegBookmark />
                      Save
                    </StyledNavLink>
                    <StyledNavLink>
                      <FaRegBell />
                      Turn notification
                    </StyledNavLink>
                    <StyledNavLink>
                      <GrHide />
                      Hide post
                    </StyledNavLink>
                    <StyledNavLink>
                      <FaRegTrashCan />
                      Delete
                    </StyledNavLink>
                    <StyledNavLink>
                      <AiOutlineExclamationCircle />
                      Report
                    </StyledNavLink>
                  </div>
                )}
              </div>
            </ClickOutHandler>
          ) : (
            <Text
              fontSize={12}
              color={"blue.500"}
              fontWeight={"bold"}
              _hover={{
                color: "red",
              }}
              transition={"0.2s ease-in-out"}
            >
              Unfollow
            </Text>
          )}
        </div>
      </div>
      <div>
        <p className="my-3 text-[1.3rem] ">
          You can also use variant modifiers to target media queries like
          responsive breakpoints, dark mode, prefers-reduced-motion, and more.
          For example, use md:mt-8 to apply the mt-8 utility at only medium
          screen sizes and above.
        </p>
        <div className="rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="post-img"
          />
        </div>
      </div>
      {/* <div className="flex mt-5 gap-8">
        <button className="flex gap-2 items-center" onClick={handleLike}>
          {liked ? <UnlikeLogo /> : <NotificationsLogo />}
          {likes}
        </button>
        <button className="flex gap-2 items-center">
          <CommentLogo />
        </button>
        <>View all comments</>
      </div>
      <div className="flex mt-4 gap-3 items-center">
        <div>
          <Avatar />
        </div>
        <div className="border grow rounded-full relative">
          <textarea
            className=" block grow p-3 w-full px-4 overflow-hidden h-16 rounded-full"
            placeholder="Leave a comment"
          ></textarea>
          <button className="absolute top-3 right-3 text-gray-400 ">
            Post
          </button>
        </div>
      </div> */}
      <PostFooter isProfilePage={true}/>
    </Card>
  );
}

export default FeedPost;
