import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const BlogCarosel = () => {
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
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Recruitment Insights & Strategies
        </h2>
        <div className="w-20 h-1 bg-[#F37F21] mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the latest trends, proven strategies, and innovative
          approaches to transform your talent acquisition process and build
          high-performing teams.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Column - Value Proposition */}
        <div className="lg:col-span-1 bg-gradient-to-br from-[#F37F21] to-orange-500 rounded-xl p-8 text-white shadow-lg flex flex-col">
          <div className="flex-grow">
            <h3 className="text-2xl font-bold mb-6">Why Our Insights Matter</h3>
            <p className="mb-6 text-orange-100">
              In today's competitive hiring landscape, staying ahead means
              accessing the right knowledge. We distill complex recruitment
              challenges into actionable solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Data-driven recruitment strategies</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Proven employer branding techniques</span>
              </div>
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 mr-3 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Future-ready hiring practices</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Blog Carousel */}
        <div className="lg:col-span-3">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="h-full pb-12"
          >
            {blogData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 group border border-gray-100">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={blog.image}
                      alt={blog.heading}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-[#F37F21] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      New
                    </span>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#F37F21] transition-colors duration-300 line-clamp-2">
                      <Link to={`/blogs/${blog.slug}`}>{blog.heading}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.description}
                    </p>
                  </div>
                  <div className="px-6 pb-6">
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="inline-flex items-center text-[#F37F21] font-medium hover:text-orange-700 transition-colors duration-300 group-hover:underline"
                    >
                      Read Article
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BlogCarosel;
