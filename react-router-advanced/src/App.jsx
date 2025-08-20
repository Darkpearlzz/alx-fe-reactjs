import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext.jsx";
import Layout from "./layout/Layout.jsx";

import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Profile from "./pages/profile/Profile.jsx";
import ProfileDetails from "./pages/profile/ProfileDetails.jsx";
import ProfileSettings from "./pages/profile/ProfileSettings.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="blog">
              <Route index element={<Blog />} />
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            >
              <Route index element={<ProfileDetails />} />
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
