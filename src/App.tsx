import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { BlogProvider } from "./context/BlogContext";

function App() {
  return (
    <BlogProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery/:id" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;
