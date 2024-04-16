/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import LoginForm from "./authentication/LoginForm";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
      <Heading as="h2">
        <NavLink to="/signup">Qaqass hesabin yoxdusa qeydiyyat ele</NavLink>{" "}
      </Heading>
    </LoginLayout>
  );
}

export default Login;
