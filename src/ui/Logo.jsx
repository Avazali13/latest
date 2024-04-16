import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
height: 4.8rem;
  width: auto;
  @media only screen and (min-width: 768px) {
    height: 9.6rem;

  }
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/public/Logo.svg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
