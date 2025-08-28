import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:category" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;