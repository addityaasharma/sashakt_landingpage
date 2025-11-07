import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import ContactUs from "./pages/ContactUs";
import { pageView } from "./blogs/FacebookPixel";
import LinkPage from "./components/LinkPage";
import Category from "./pages/Category";
import GroupDetails from "./components/GroupDetails";

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
          <Route path="/category/:categorySlug" element={<Category />} />
          <Route path="/blog/:category/:blogIndex" element={<BlogDetail />} />
          <Route path="/group/:groupId" element={<GroupDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<LinkPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:category/:blogIndex" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;