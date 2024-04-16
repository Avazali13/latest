import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  /* padding: 3.2rem 2.4rem; */
  padding: 1.6rem 1.3rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 768px) {
    gap: 3.2rem;
    padding: 3.2rem 2.4rem;
  }
  gap: 1.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
