import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const BlogCardCarousel = () => {
  const blogData = [
    {
      id: 1,
      heading: "10 Essential Skills for Modern Recruiters in 2023",
      slug: "essential-skills-for-modern-recruiters",
      description:
        "Discover the top skills every recruiter needs to master in today's competitive hiring landscape.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      heading: "How AI is Transforming the Recruitment Process",
      slug: "ai-transforming-recruitment",
      description:
        "Explore how artificial intelligence is revolutionizing talent acquisition and candidate screening.",
      image:
        "https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      heading: "The Ultimate Guide to Employer Branding",
      slug: "ultimate-guide-employer-branding",
      description:
        "Learn how to build a strong employer brand that attracts top talent to your organization.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      heading: "Diversity Hiring: Strategies That Actually Work",
      slug: "diversity-hiring-strategies",
      description:
        "Proven methods to improve diversity and inclusion in your hiring practices.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      heading:
        "Remote Recruitment: Best Practices for Hiring Distributed Teams",
      slug: "remote-recruitment-best-practices",
      description:
        "Master the art of hiring remote employees with these effective strategies.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      heading: "Candidate Experience: Turning Applicants into Advocates",
      slug: "candidate-experience-strategies",
      description:
        "How to create a positive candidate experience that benefits your employer brand.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      heading: "The Future of Work: Recruitment Trends to Watch",
      slug: "future-of-work-recruitment-trends",
      description:
        "Stay ahead of the curve with these emerging trends in recruitment and talent acquisition.",
      image:
        "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      heading: "How to Write Job Descriptions That Attract Top Talent",
      slug: "writing-effective-job-descriptions",
      description:
        "Craft compelling job postings that stand out and attract qualified candidates.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 9,
      heading: "Technical Recruitment: Finding the Right Developers",
      slug: "technical-recruitment-strategies",
      description:
        "Specialized approaches for identifying and hiring top technical talent.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 10,
      heading: "Metrics That Matter: Measuring Recruitment Success",
      slug: "recruitment-metrics-that-matter",
      description:
        "Key performance indicators to track for optimizing your hiring process.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prev) => (prev + 1) % blogData.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [blogData.length, isHovered]);

  const getCardPosition = (index) => {
    const total = blogData.length;
    const relativeIndex = (index - activeIndex + total) % total;

    if (relativeIndex === total - 1)
      return { x: -180, z: 0, scale: 0.8, opacity: 0.7 };
    if (relativeIndex === 0) return { x: 0, z: 50, scale: 1, opacity: 1 };
    if (relativeIndex === 1) return { x: 180, z: 0, scale: 0.8, opacity: 0.7 };
    return { x: 0, z: -100, scale: 0, opacity: 0 };
  };

  return (
    <div className="relative w-full h-[600px] flex flex-col md:flex-row overflow-hidden shadow-lg">
      <div
        className="absolute inset-0 bg-black/60 z-0"
        style={{
          backgroundImage: `url(${blogData[activeIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease",
        }}
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center px-6 md:px-10 py-10 text-white">
        <h3 className="text-lg font-semibold mb-2">Inspiring Insights</h3>
        <AnimatePresence mode="wait">
          <motion.div
            key={blogData[activeIndex].id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {blogData[activeIndex].heading}
            </h2>
            <p className="mb-6 text-gray-200">
              {blogData[activeIndex].description}
            </p>
            <Link
              to={`/blogs/${blogData[activeIndex].slug}`}
              className="inline-block bg-[#F37F21] text-white px-5 py-2 rounded-full shadow hover:bg-gray-200 transition"
            >
              Read More →
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-full md:w-1/2 flex items-center justify-center overflow-visible">
        <div
          className="relative h-[400px] w-full flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {blogData.map((blog, index) => {
            const position = getCardPosition(index);

            return (
              <motion.div
                key={blog.id}
                className={`absolute cursor-pointer rounded-xl overflow-hidden shadow-lg`}
                initial={false}
                animate={{
                  x: position.x,
                  zIndex: index === activeIndex ? 50 : position.z,
                  scale: position.scale,
                  opacity: position.opacity,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onClick={() => setActiveIndex(index)}
                style={{
                  width: 260,
                  height: 320,
                  backgroundImage: `url(${blog.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="w-full h-full bg-black/40 flex items-end p-4">
                  <motion.p
                    className="text-white text-sm font-medium"
                    animate={{
                      opacity: position.scale === 1 ? 1 : 0.7,
                      fontSize: position.scale === 1 ? "1rem" : "0.875rem",
                    }}
                  >
                    {blog.heading}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}

          <button
            className="absolute left-4 z-60 cursor-pointer bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm"
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + blogData.length) % blogData.length
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute right-4 cursor-pointer z-60 bg-white/30 hover:bg-white/50 rounded-full p-2 backdrop-blur-sm"
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % blogData.length)
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {blogData.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCardCarousel;
