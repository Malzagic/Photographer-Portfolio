import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery-page" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
