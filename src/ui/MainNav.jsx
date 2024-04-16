/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TiMessage } from "react-icons/ti";
import { TbLogout2 } from "react-icons/tb";
import { GoBookmark } from "react-icons/go";
import useLogOut from "../hooks/useLogOut";

const NavList = styled.ul`
  display: flex;
  gap: 0.2rem;
  flex-wrap: wrap;
  @media only screen and (min-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 0.8rem;
    align-items: flex-start;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    margin: 0 auto;
    gap: 0.5rem;

    color: var(--color-grey-600);
    font-size: 0.5rem;
    padding: 0rem 0rem;
    transition: all 0.3s;
    font-weight: 500;

    @media only screen and (min-width: 768px) {
      padding: 1.2rem 2.4rem;
      font-size: 1.6rem;
      padding-right: 0.4rem;
      gap: 1.2rem;
      margin: 0 0;
    }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

// function MainNav() {
//   return (
//     <nav className="border-b border-blue-400 ">
//       <NavList>
//         <StyledNavLink to="/dashboard">
//           <HiOutlineHome />
//           <span className="invisible md:visible">Home</span>
//         </StyledNavLink>
//         <StyledNavLink to="/messages">
//           <TiMessage />
//           <span className="invisible md:visible">Messages</span>
//         </StyledNavLink>{" "}
//         <StyledNavLink to="/notification">
//           <IoMdNotificationsOutline />
//           <span className="invisible md:visible">Notifications</span>
//         </StyledNavLink>{" "}
//         <StyledNavLink to="profile/friends">
//           <HiOutlineUsers />
//           <span className="invisible md:visible">Friends List</span>
//         </StyledNavLink>{" "}
//         <StyledNavLink to="saved">
//           <GoBookmark />
//           <span className="invisible md:visible">Bookmarks</span>
//         </StyledNavLink>{" "}
//         <StyledNavLink to="/login">
//           <TbLogout2 />
//           <span className="invisible md:visible">Logout</span>
//         </StyledNavLink>
//       </NavList>{" "}
//     </nav>
//   );
// }

function MainNav() {
  const { handleLogout, isLoggingout, error } = useLogOut();
  return (
    <nav className="border-b border-blue-400 shadow-sky-300 shadow-md md:shadow-none ">
      <NavList>
        <StyledNavLink to="/dashboard">
          <HiOutlineHome />
          <span className="hidden md:block">Home</span>
        </StyledNavLink>
        <StyledNavLink to="/messages">
          <TiMessage />
          <span className="hidden md:block">Messages</span>
        </StyledNavLink>{" "}
        <StyledNavLink to="/notification">
          <IoMdNotificationsOutline />
          <span className="hidden md:block">Notifications</span>
        </StyledNavLink>{" "}
        <StyledNavLink to="suggested">
          <HiOutlineUsers />
          <span className="hidden md:block">Suggested Users</span>
        </StyledNavLink>{" "}
        <StyledNavLink to="saved">
          <GoBookmark />
          <span className="hidden md:block">Bookmarks</span>
        </StyledNavLink>{" "}
        <StyledNavLink to="/login" >
          <TbLogout2 />
          <button disabled={isLoggingout} className="hidden md:block">Logout</button>
        </StyledNavLink>
      </NavList>{" "}
    </nav>
  );
}

export default MainNav;
