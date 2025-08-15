import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    heading: "Remote Recruitment: Best Practices for Hiring Distributed Teams",
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

const BlogList = () => {
  return (
    <div
      id="news-feed"
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-900 text-center mb-4"
        >
          Recruitment Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto"
        >
          Discover the latest trends, strategies, and best practices in talent
          acquisition and recruitment.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.heading}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors duration-300">
                  <Link to={`/blogs/${blog.slug}`}>{blog.heading}</Link>
                </h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
