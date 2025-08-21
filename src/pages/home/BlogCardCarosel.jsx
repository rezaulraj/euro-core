import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      heading: "How AI is Transforming the Recruitment Process",
      slug: "ai-transforming-recruitment",
      description:
        "Explore how artificial intelligence is revolutionizing talent acquisition and candidate screening.",
      image:
        "https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?q=80&w=1032&auto=format&fit=crop",
    },
    {
      id: 3,
      heading: "The Ultimate Guide to Employer Branding",
      slug: "ultimate-guide-employer-branding",
      description:
        "Learn how to build a strong employer brand that attracts top talent to your organization.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      heading: "Diversity Hiring: Strategies That Actually Work",
      slug: "diversity-hiring-strategies",
      description:
        "Proven methods to improve diversity and inclusion in your hiring practices.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Left content changes
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [blogData.length]);

  // Duplicate data for infinite scroll
  const duplicatedData = [...blogData, ...blogData];

  // Animation controller
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: "-50%",
      transition: {
        ease: "linear",
        duration: 25,
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="relative w-full h-[600px] bg-[#F4F1F0] flex overflow-hidden">
      {/* LEFT TEXT */}
      <div className="w-2/5 flex flex-col justify-center px-12 text-white z-10">
        <h3 className="text-lg font-semibold mb-2 text-[#F37F21]">
          Inspiring Insights
        </h3>
        <motion.div
          key={blogData[currentIndex].id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#F37F21]">
            {blogData[currentIndex].heading}
          </h2>
          <p className="mb-6 text-gray-950">
            {blogData[currentIndex].description}
          </p>
          <Link
            to={`/blogs/${blogData[currentIndex].slug}`}
            className="inline-block bg-[#F37F21] px-6 py-3 rounded-full shadow hover:bg-[#eb710e] transition"
          >
            Read More →
          </Link>
        </motion.div>
      </div>

      {/* RIGHT CARDS (infinite scroll) */}
      <div className="w-3/5 flex items-center relative overflow-hidden">
        <motion.div className="flex space-x-6" animate={controls}>
          {duplicatedData.map((item, idx) => (
            <motion.div
              key={idx}
              className="w-64 h-80 rounded-2xl overflow-hidden shadow-lg flex-shrink-0 relative cursor-pointer"
              onHoverStart={() => controls.stop()} // ⏸ Stop scroll
              onHoverEnd={() =>
                controls.start({
                  x: "-50%",
                  transition: {
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity,
                  },
                })
              } // ▶ Resume scroll
            >
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-3">
                <p className="text-white text-sm text-center">{item.heading}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogCardCarousel;
