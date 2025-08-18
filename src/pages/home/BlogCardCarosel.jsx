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

  const [visibleIndexes, setVisibleIndexes] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndexes((prev) => {
        const nextIndex = (prev[prev.length - 1] + 1) % blogData.length;
        return [...prev.slice(1), nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [blogData.length]);

  return (
    <div
      className="relative w-full h-[600px] flex overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(${blogData[visibleIndexes[0]].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 w-2/5 flex flex-col justify-center px-10 text-white">
        <h3 className="text-lg font-semibold mb-2">Inspiring Insights</h3>
        <AnimatePresence mode="wait">
          <motion.div
            key={blogData[visibleIndexes[0]].id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2 className="text-3xl font-bold mb-4">
              {blogData[visibleIndexes[0]].heading}
            </h2>
            <p className="mb-6 text-gray-200">
              {blogData[visibleIndexes[0]].description}
            </p>
            <Link
              to={`/blogs/${blogData[visibleIndexes[0]].slug}`}
              className="inline-block bg-[#F37F21] text-white px-5 py-2 rounded-full shadow hover:bg-[#eb710e] transition"
            >
              Read More →
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 w-3/5 flex items-center justify-center space-x-6">
        <AnimatePresence>
          {visibleIndexes.map((idx, position) => (
            <motion.div
              key={blogData[idx].id}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: position === 0 ? 1.1 : 0.95 }}
              exit={{ opacity: 0, y: -60, scale: 0.8 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className={`rounded-xl overflow-hidden shadow-lg transition-all ${
                position === 0 ? "w-64 h-80 z-20" : "w-48 h-64 opacity-80"
              }`}
              style={{
                backgroundImage: `url(${blogData[idx].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full h-full bg-black/40 flex items-end justify-center text-white p-2">
                <p className="text-sm text-center">{blogData[idx].heading}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BlogCardCarousel;
