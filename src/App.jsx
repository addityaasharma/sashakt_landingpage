import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

/* -------- Public Pages -------- */
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import ContactUs from "./pages/ContactUs";
import Category from "./pages/Category";
import GroupDetails from "./components/GroupDetails";
import LinkPage from "./components/LinkPage";

/* -------- Admin -------- */
import Login from "./admin/auth/Login";
import AdminLayout from "./admin/layout/AdminLayout";
import ProtectedAdmin from "./admin/auth/ProtectedAdmin";

import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Blogs from "./admin/pages/Blogs";
import Settings from "./admin/pages/Settings";
import { pageView } from "./blogs/FacebookPixel";
import Categories from "./admin/pages/Categories";
import AddBlog from "./admin/pages/Dashboard";
import BlogEditor from "./admin/pages/Dashboard";

const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    pageView();
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <TrackPageViews />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:category/:blogIndex" element={<BlogDetail />} />
          <Route path="/category/:categorySlug" element={<Category />} />
          <Route path="/group/:groupId" element={<GroupDetails />} />
          <Route path="/product" element={<LinkPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>

        <Route path="admin/sashaktlogin" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedAdmin>
              <AdminLayout />
            </ProtectedAdmin>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<BlogEditor />} />
          <Route path="users" element={<Users />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="settings" element={<Settings />} />
          <Route path="category" element={<Categories />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;