import React from "react";
import HeroBlog from "./HeroBlog";
import BlogList from "./BlogList";

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <HeroBlog />
      <BlogList />
    </div>
  );
};

export default BlogPage;
