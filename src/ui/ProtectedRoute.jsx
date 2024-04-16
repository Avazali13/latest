// import styled from "styled-components";
// import { useUser } from "../features/authentication/useUser";
// import Spinner from "./Spinner";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const FullPage = styled.div`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: var(--color-grey-50);
// `;

// function ProtectedRoute({ children }) {
//   const { isLoading, isAuthenticated } = useUser();
//   const navigate = useNavigate();

//   useEffect(
//     function () {
//       if (!isAuthenticated && !isLoading) navigate("/login");
//     },
//     [isAuthenticated, isLoading, navigate]
//   );

//   if (isLoading)
//     return (
//       <FullPage>
//         <Spinner />;
//       </FullPage>
//     );

//   if(isAuthenticated) return children;
// }

// export default ProtectedRoute;
