import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TfiAnnouncement } from "react-icons/tfi";

const InfinityTextSlider = ({ atTop }) => {
  const [contactOpen, setContactOpen] = useState(false);
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
  const extended = [...blogData, ...blogData];
  const IsContactButtonOpen = () => {
    setContactOpen((open) => !open);
  };
  return (
    <div
      className={`relative overflow-hidden ${
        atTop ? "bg-[#F37F21]/30" : "bg-white"
      } `}
    >
      <div
        className="hidden sm:block sm:absolute w-52 -left-1 z-10 h-full bg-[#F37F21] text-gray-100 font-medium font-poppins p-2"
        style={{
          clipPath:
            "polygon(1% 100%,0% 0%,96% 0%,96% 34%,100% 50%,96% 67%,96% 100%)",
        }}
      >
        <span className="flex items-center text-center gap-2">
          <TfiAnnouncement />
         Explore News Feed
        </span>
      </div>
      <div className="slider-track flex whitespace-nowrap will-change-transform">
        {extended.map((text, i) => (
          <ul
            key={i}
            className="flex-shrink-0 m-2 flex items-center justify-center rounded-lg"
          >
            <li>
              <Link
                to={`/blogs/${text.slug}`}
                className={`flex items-center gap-5 ${
                  atTop ? "text-white" : "text-gray-800"
                }  border-r px-4 font-medium cursor-pointer`}
              >
                <p>{text.heading}</p>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default InfinityTextSlider;
