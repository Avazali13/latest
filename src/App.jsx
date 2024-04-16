import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Dashboard from "./pages/Home/Dashboard";
import Messages from "./pages/Messages";
import Notification from "./pages/Notification";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import GloabalStyles from "./styles/GlobalStyles";
// import FriendsList from "./pages/FriendsList";
import Settings from "./pages/Settings";

import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProfileLayout from "./pages/profile components/ProfileLayout";
import Posts from "./pages/profile components/ProfilePosts";
import About from "./pages/profile components/About";
import Photos from "./pages/profile components/Photos";
import Friends from "./pages/profile components/Friends";
import Saved from "./pages/Saved";
import SuggestedUsers from "./pages/SuggestedUsers/SuggestedUsers";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <GloabalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="login" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="notification" element={<Notification />} />
            <Route path="messages" element={<Messages />} />
            <Route path="saved" element={<Saved />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
            <Route path="suggested" element={<SuggestedUsers />} />
            <Route path="profile" element={<ProfileLayout />}>
              <Route index element={<Navigate replace to="posts" />} />
              <Route path="posts" element={<Posts />} />
              <Route path="friends" element={<Friends />} />
              <Route path="about" element={<About />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
