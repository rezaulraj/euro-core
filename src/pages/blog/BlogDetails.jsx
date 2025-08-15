import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiArrowRight,
  FiShare2,
  FiBookmark,
  FiTag,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
} from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

// Expanded blog database with more detailed content
const blogDatabase = {
  "essential-skills-for-modern-recruiters": {
    id: 1,
    title: "10 Essential Skills for Modern Recruiters in 2023",
    slug: "essential-skills-for-modern-recruiters",
    author: "Sarah Johnson",
    authorRole: "Chief Talent Officer",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    publishDate: "2023-05-15",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Recruiting", "Skills", "HR Trends"],
    content: [
      {
        type: "paragraph",
        text: "The recruitment landscape has evolved dramatically in recent years, requiring recruiters to develop new competencies beyond traditional hiring skills. In today's competitive market, successful recruiters need a diverse skill set that combines human intuition with technological savvy.",
      },
      {
        type: "heading",
        text: "1. Data Literacy and Analytics",
      },
      {
        type: "paragraph",
        text: "Modern recruiters must be comfortable working with recruitment metrics and analytics. Understanding key performance indicators like time-to-hire, cost-per-hire, and quality-of-hire allows for data-driven decision making.",
      },
      {
        type: "paragraph",
        text: "Tools like Google Analytics, Tableau, and specialized HR analytics platforms are becoming essential in a recruiter's toolkit. The ability to interpret data visualizations and extract actionable insights can significantly improve hiring outcomes.",
      },
      {
        type: "heading",
        text: "2. Employer Branding Expertise",
      },
      {
        type: "paragraph",
        text: "With candidates increasingly evaluating companies as much as companies evaluate them, recruiters need to become storytellers who can effectively communicate their organization's culture and values.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Team building exercise",
        caption:
          "Building a strong employer brand starts with authentic workplace culture",
      },
      {
        type: "heading",
        text: "3. Digital Recruitment Marketing",
      },
      {
        type: "paragraph",
        text: "From social media recruiting to programmatic job advertising, today's recruiters need to understand digital marketing principles to attract top talent in crowded online spaces.",
      },
      {
        type: "quote",
        text: "The best recruiters are now equal parts marketer and matchmaker. They understand how to position opportunities in ways that resonate with today's candidates.",
        author: "Michael Chen, Talent Acquisition Innovator",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Develop data analysis skills to make evidence-based hiring decisions",
          "Learn storytelling techniques to enhance your employer brand",
          "Master social media and digital platforms for talent sourcing",
          "Combine tech skills with emotional intelligence for best results",
        ],
      },
    ],
    relatedBlogIds: [2, 3, 7],
  },
  "ai-transforming-recruitment": {
    id: 2,
    title: "How AI is Transforming the Recruitment Process",
    slug: "ai-transforming-recruitment",
    author: "David Kim",
    authorRole: "AI Recruitment Specialist",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    publishDate: "2023-06-22",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1694903110330-cc64b7e1d21d?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["AI", "Technology", "Automation"],
    content: [
      {
        type: "paragraph",
        text: "Artificial Intelligence is revolutionizing the recruitment industry, automating repetitive tasks and enabling recruiters to focus on strategic decision-making and human connections.",
      },
      {
        type: "heading",
        text: "1. Automated Candidate Sourcing",
      },
      {
        type: "paragraph",
        text: "AI-powered tools can now scan thousands of profiles across multiple platforms to identify potential candidates who match specific job requirements, significantly reducing sourcing time.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1677442135136-760c813a743e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "AI technology visualization",
        caption:
          "AI algorithms can process vast amounts of candidate data in seconds",
      },
      {
        type: "heading",
        text: "2. Intelligent Screening",
      },
      {
        type: "paragraph",
        text: "Machine learning models can analyze resumes and applications, ranking candidates based on how well they match the job description and predicting their likelihood of success in the role.",
      },
      {
        type: "quote",
        text: "AI doesn't replace recruiters—it empowers them to work more efficiently and make better decisions.",
        author: "Dr. Lisa Wong, HR Technology Expert",
      },
      {
        type: "heading",
        text: "3. Chatbot Interviews",
      },
      {
        type: "paragraph",
        text: "AI chatbots can conduct initial screening interviews, asking standardized questions and evaluating responses to shortlist qualified candidates for human review.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "AI can reduce time-to-hire by automating repetitive tasks",
          "Machine learning improves candidate matching accuracy",
          "Chatbots provide 24/7 candidate engagement",
          "Human oversight remains crucial for final decisions",
        ],
      },
    ],
    relatedBlogIds: [1, 5, 10],
  },
  "ultimate-guide-employer-branding": {
    id: 3,
    title: "The Ultimate Guide to Employer Branding",
    slug: "ultimate-guide-employer-branding",
    author: "Maria Rodriguez",
    authorRole: "Employer Brand Strategist",
    authorImage: "https://randomuser.me/api/portraits/women/63.jpg",
    publishDate: "2023-04-10",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Branding", "HR", "Marketing"],
    content: [
      {
        type: "paragraph",
        text: "In today's competitive job market, your employer brand is just as important as your corporate brand. A strong employer brand can reduce hiring costs by 50% and improve quality of hire.",
      },
      {
        type: "heading",
        text: "1. Defining Your EVP",
      },
      {
        type: "paragraph",
        text: "Your Employee Value Proposition (EVP) is the foundation of your employer brand. It clearly articulates what employees gain from working at your company beyond just salary.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Team working together",
        caption:
          "Authentic workplace culture is the cornerstone of strong employer branding",
      },
      {
        type: "heading",
        text: "2. Employee Advocacy",
      },
      {
        type: "paragraph",
        text: "Your current employees are your best brand ambassadors. Encourage them to share their genuine experiences on social media and review platforms.",
      },
      {
        type: "quote",
        text: "People trust people, not corporations. Authentic employee stories are 8x more engaging than corporate content.",
        author: "James Peterson, Employer Brand Consultant",
      },
      {
        type: "heading",
        text: "3. Measuring Impact",
      },
      {
        type: "paragraph",
        text: "Track metrics like offer acceptance rates, employee referrals, and Glassdoor ratings to measure the effectiveness of your employer branding efforts.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Develop a clear Employee Value Proposition",
          "Leverage employee-generated content",
          "Be authentic and transparent",
          "Continuously measure and refine your strategy",
        ],
      },
    ],
    relatedBlogIds: [1, 4, 6],
  },
  "diversity-hiring-strategies": {
    id: 4,
    title: "Diversity Hiring: Strategies That Actually Work",
    slug: "diversity-hiring-strategies",
    author: "Tyrone Williams",
    authorRole: "Diversity & Inclusion Director",
    authorImage: "https://randomuser.me/api/portraits/men/75.jpg",
    publishDate: "2023-03-18",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Diversity", "Inclusion", "HR"],
    content: [
      {
        type: "paragraph",
        text: "Diverse teams are more innovative, make better decisions, and drive better business results. Yet many organizations struggle with implementing effective diversity hiring strategies.",
      },
      {
        type: "heading",
        text: "1. Expanding Talent Pools",
      },
      {
        type: "paragraph",
        text: "Partner with diverse professional organizations, historically black colleges and universities (HBCUs), and women in tech groups to access broader talent networks.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Diverse group of professionals",
        caption:
          "Diverse teams bring varied perspectives that drive innovation",
      },
      {
        type: "heading",
        text: "2. Structured Interviewing",
      },
      {
        type: "paragraph",
        text: "Implement standardized interview questions and scoring rubrics to reduce unconscious bias in the evaluation process.",
      },
      {
        type: "quote",
        text: "Diversity is being invited to the party; inclusion is being asked to dance.",
        author: "Vernā Myers, Diversity Expert",
      },
      {
        type: "heading",
        text: "3. Inclusive Job Descriptions",
      },
      {
        type: "paragraph",
        text: "Use gender-neutral language and focus on essential requirements rather than 'nice-to-haves' that may disproportionately exclude certain groups.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Broaden your sourcing channels",
          "Standardize evaluation criteria",
          "Train hiring teams on unconscious bias",
          "Track diversity metrics at each hiring stage",
        ],
      },
    ],
    relatedBlogIds: [3, 6, 9],
  },
  "remote-recruitment-best-practices": {
    id: 5,
    title: "Remote Recruitment: Best Practices for Hiring Distributed Teams",
    slug: "remote-recruitment-best-practices",
    author: "Emma Chen",
    authorRole: "Remote Work Consultant",
    authorImage: "https://randomuser.me/api/portraits/women/28.jpg",
    publishDate: "2023-02-05",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Remote Work", "Hiring", "Virtual"],
    content: [
      {
        type: "paragraph",
        text: "The shift to remote work has fundamentally changed recruitment practices. Hiring for distributed teams requires new approaches to assessing skills, cultural fit, and remote work competencies.",
      },
      {
        type: "heading",
        text: "1. Assessing Remote Readiness",
      },
      {
        type: "paragraph",
        text: "Look for candidates who demonstrate self-motivation, strong communication skills, and experience with remote collaboration tools.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Person working remotely",
        caption:
          "Remote work requires different skills than office-based roles",
      },
      {
        type: "heading",
        text: "2. Virtual Interview Techniques",
      },
      {
        type: "paragraph",
        text: "Conduct video interviews to assess communication skills and use collaborative platforms like Miro or Figma for skills assessments.",
      },
      {
        type: "quote",
        text: "Hiring for remote isn't just about finding people who can work from home—it's about finding people who can thrive in a distributed environment.",
        author: "Emma Chen, Remote Work Consultant",
      },
      {
        type: "heading",
        text: "3. Onboarding at a Distance",
      },
      {
        type: "paragraph",
        text: "Develop comprehensive virtual onboarding programs that help new hires build relationships and understand company culture without physical proximity.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Evaluate remote-specific competencies",
          "Leverage technology for assessments",
          "Adapt onboarding for virtual environments",
          "Focus on asynchronous communication skills",
        ],
      },
    ],
    relatedBlogIds: [2, 7, 10],
  },
  "candidate-experience-strategies": {
    id: 6,
    title: "Candidate Experience: Turning Applicants into Advocates",
    slug: "candidate-experience-strategies",
    author: "Olivia Park",
    authorRole: "Candidate Experience Manager",
    authorImage: "https://randomuser.me/api/portraits/women/52.jpg",
    publishDate: "2023-07-30",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Candidate Experience", "Employer Brand", "HR"],
    content: [
      {
        type: "paragraph",
        text: "A positive candidate experience can turn rejected applicants into brand advocates, while a negative one can damage your employer reputation. Here's how to get it right.",
      },
      {
        type: "heading",
        text: "1. Communication is Key",
      },
      {
        type: "paragraph",
        text: "Keep candidates informed at every stage of the process, even if there's no update. Silence is the number one complaint in candidate experience surveys.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Candidate interviewing",
        caption: "Transparent communication builds trust with candidates",
      },
      {
        type: "heading",
        text: "2. Streamlined Application Process",
      },
      {
        type: "paragraph",
        text: "Optimize your application flow to be mobile-friendly and take no more than 15 minutes to complete. Each additional field reduces completion rates by 10%.",
      },
      {
        type: "quote",
        text: "Your application process is the first real interaction candidates have with your company—make it reflect your values and culture.",
        author: "Olivia Park, Candidate Experience Manager",
      },
      {
        type: "heading",
        text: "3. Feedback for Rejected Candidates",
      },
      {
        type: "paragraph",
        text: "Provide constructive feedback to candidates who invested significant time in your process. This goodwill can turn them into customers or future applicants.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Communicate frequently and transparently",
          "Simplify the application process",
          "Provide closure to all candidates",
          "Treat candidates like valued customers",
        ],
      },
    ],
    relatedBlogIds: [3, 4, 8],
  },
  "future-of-work-recruitment-trends": {
    id: 7,
    title: "The Future of Work: Recruitment Trends to Watch",
    slug: "future-of-work-recruitment-trends",
    author: "Raj Patel",
    authorRole: "Future of Work Strategist",
    authorImage: "https://randomuser.me/api/portraits/men/65.jpg",
    publishDate: "2023-08-12",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Future Trends", "Innovation", "HR Tech"],
    content: [
      {
        type: "paragraph",
        text: "The world of work is changing faster than ever. Here are the emerging trends that will shape recruitment strategies in the coming years.",
      },
      {
        type: "heading",
        text: "1. Skills-Based Hiring",
      },
      {
        type: "paragraph",
        text: "Companies are moving away from degree requirements and focusing on demonstrable skills through assessments, portfolios, and project-based evaluations.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Futuristic technology",
        caption: "Emerging technologies are reshaping how we evaluate talent",
      },
      {
        type: "heading",
        text: "2. Internal Talent Marketplaces",
      },
      {
        type: "paragraph",
        text: "Organizations are prioritizing internal mobility, using AI-powered platforms to match existing employees with project opportunities and career paths.",
      },
      {
        type: "quote",
        text: "The future of recruitment isn't just about hiring new people—it's about unlocking the potential of the talent you already have.",
        author: "Raj Patel, Future of Work Strategist",
      },
      {
        type: "heading",
        text: "3. Continuous Recruitment",
      },
      {
        type: "paragraph",
        text: "Rather than reactive hiring for specific roles, companies are building ongoing relationships with potential candidates through talent communities.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Focus on skills over credentials",
          "Develop internal mobility programs",
          "Build talent pipelines before needs arise",
          "Leverage predictive analytics for workforce planning",
        ],
      },
    ],
    relatedBlogIds: [1, 2, 5],
  },
  "writing-effective-job-descriptions": {
    id: 8,
    title: "How to Write Job Descriptions That Attract Top Talent",
    slug: "writing-effective-job-descriptions",
    author: "Sophie Martin",
    authorRole: "Talent Acquisition Content Specialist",
    authorImage: "https://randomuser.me/api/portraits/women/33.jpg",
    publishDate: "2023-01-20",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Job Descriptions", "Content", "Hiring"],
    content: [
      {
        type: "paragraph",
        text: "Your job description is often the first point of contact with potential candidates. A well-crafted JD can significantly improve both the quantity and quality of applicants.",
      },
      {
        type: "heading",
        text: "1. Start With Why",
      },
      {
        type: "paragraph",
        text: "Begin with a compelling overview of why the role matters and how it contributes to the company's mission. Candidates want purpose, not just a list of duties.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Person writing job description",
        caption: "Clear, compelling job descriptions attract better candidates",
      },
      {
        type: "heading",
        text: "2. Focus on Outcomes",
      },
      {
        type: "paragraph",
        text: "Rather than listing every possible responsibility, describe what success looks like in the role and the impact the hire will make.",
      },
      {
        type: "quote",
        text: "The best job descriptions read like invitations to meaningful work, not like legal contracts.",
        author: "Sophie Martin, Talent Acquisition Content Specialist",
      },
      {
        type: "heading",
        text: "3. Optimize for Search",
      },
      {
        type: "paragraph",
        text: "Use keywords that candidates actually search for (not internal jargon) and structure content for easy scanning on mobile devices.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Lead with purpose and impact",
          "Keep requirements realistic and inclusive",
          "Use inclusive language",
          "Test with current employees for clarity",
        ],
      },
    ],
    relatedBlogIds: [4, 6, 9],
  },
  "technical-recruitment-strategies": {
    id: 9,
    title: "Technical Recruitment: Finding the Right Developers",
    slug: "technical-recruitment-strategies",
    author: "Alex Wong",
    authorRole: "Technical Recruiter",
    authorImage: "https://randomuser.me/api/portraits/men/22.jpg",
    publishDate: "2023-09-05",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Technical", "Developers", "Engineering"],
    content: [
      {
        type: "paragraph",
        text: "With tech talent in high demand, recruiting skilled developers requires specialized approaches that go beyond traditional hiring methods.",
      },
      {
        type: "heading",
        text: "1. Technical Sourcing Strategies",
      },
      {
        type: "paragraph",
        text: "Go beyond LinkedIn—engage with developers on GitHub, Stack Overflow, and niche tech communities where they showcase their work.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Developer working on code",
        caption:
          "Technical recruiting requires understanding developers' work environments",
      },
      {
        type: "heading",
        text: "2. Real-World Assessments",
      },
      {
        type: "paragraph",
        text: "Replace whiteboard interviews with practical coding challenges that mirror actual work scenarios and allow candidates to use their preferred tools.",
      },
      {
        type: "quote",
        text: "The best developers want to solve interesting problems, not jump through arbitrary hoops. Your hiring process should reflect that.",
        author: "Alex Wong, Technical Recruiter",
      },
      {
        type: "heading",
        text: "3. Selling Your Tech Stack",
      },
      {
        type: "paragraph",
        text: "Top developers care about the technologies they'll work with. Highlight your stack's strengths and opportunities for learning and growth.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Engage developers where they already congregate online",
          "Focus on practical skills assessment",
          "Showcase your engineering culture",
          "Involve your tech team in the hiring process",
        ],
      },
    ],
    relatedBlogIds: [2, 5, 10],
  },
  "recruitment-metrics-that-matter": {
    id: 10,
    title: "Metrics That Matter: Measuring Recruitment Success",
    slug: "recruitment-metrics-that-matter",
    author: "Natalie Chen",
    authorRole: "HR Analytics Lead",
    authorImage: "https://randomuser.me/api/portraits/women/41.jpg",
    publishDate: "2023-10-15",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Metrics", "Analytics", "Data"],
    content: [
      {
        type: "paragraph",
        text: "What gets measured gets improved. Tracking the right recruitment metrics helps optimize your hiring process and demonstrate HR's impact on business outcomes.",
      },
      {
        type: "heading",
        text: "1. Time-to-Hire",
      },
      {
        type: "paragraph",
        text: "Measure the elapsed time from when a position is opened to when an offer is accepted. Industry benchmarks vary by role and seniority level.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        alt: "Data analytics dashboard",
        caption: "Data-driven recruitment leads to better hiring decisions",
      },
      {
        type: "heading",
        text: "2. Quality of Hire",
      },
      {
        type: "paragraph",
        text: "Track performance ratings, retention rates, and hiring manager satisfaction to assess the long-term success of your recruitment efforts.",
      },
      {
        type: "quote",
        text: "The most sophisticated talent analytics combine operational metrics with business outcomes to tell the full story.",
        author: "Natalie Chen, HR Analytics Lead",
      },
      {
        type: "heading",
        text: "3. Candidate Conversion Rates",
      },
      {
        type: "paragraph",
        text: "Analyze conversion rates between each stage of your hiring funnel to identify bottlenecks and drop-off points in your process.",
      },
      {
        type: "heading",
        text: "Key Takeaways",
      },
      {
        type: "list",
        items: [
          "Focus on metrics that align with business goals",
          "Combine efficiency and quality measures",
          "Benchmark against industry standards",
          "Use data to continuously improve processes",
        ],
      },
    ],
    relatedBlogIds: [1, 2, 7],
  },
};

// All available blogs for related posts randomization
const allBlogs = [
  {
    id: 1,
    title: "10 Essential Skills for Modern Recruiters in 2023",
    slug: "essential-skills-for-modern-recruiters",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    publishDate: "2023-05-15",
    readTime: "8 min read",
    tags: ["Recruiting", "Skills"],
  },
  {
    id: 2,
    title: "How AI is Transforming the Recruitment Process",
    slug: "ai-transforming-recruitment",
    image:
      "https://images.unsplash.com/photo-1677442135136-760c813a743e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    publishDate: "2023-06-22",
    readTime: "6 min read",
    tags: ["AI", "Technology"],
  },
  {
    id: 3,
    title: "The Ultimate Guide to Employer Branding",
    slug: "ultimate-guide-employer-branding",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    publishDate: "2023-04-10",
    readTime: "10 min read",
    tags: ["Branding", "HR"],
  },
  {
    id: 4,
    title: "Diversity Hiring: Strategies That Actually Work",
    slug: "diversity-hiring-strategies",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    publishDate: "2023-03-18",
    readTime: "9 min read",
    tags: ["Diversity", "Inclusion"],
  },
  {
    id: 5,
    title: "Remote Recruitment: Best Practices for Hiring Distributed Teams",
    slug: "remote-recruitment-best-practices",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    publishDate: "2023-02-05",
    readTime: "7 min read",
    tags: ["Remote Work", "Hiring"],
  },
  {
    id: 6,
    title: "Candidate Experience: Turning Applicants into Advocates",
    slug: "candidate-experience-strategies",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    publishDate: "2023-07-30",
    readTime: "5 min read",
    tags: ["Candidate Experience", "Employer Brand"],
  },
  {
    id: 7,
    title: "The Future of Work: Recruitment Trends to Watch",
    slug: "future-of-work-recruitment-trends",
    image:
      "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    publishDate: "2023-08-12",
    readTime: "9 min read",
    tags: ["Future Trends", "Innovation"],
  },
  {
    id: 8,
    title: "How to Write Job Descriptions That Attract Top Talent",
    slug: "writing-effective-job-descriptions",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    publishDate: "2023-01-20",
    readTime: "6 min read",
    tags: ["Job Descriptions", "Content"],
  },
  {
    id: 9,
    title: "Technical Recruitment: Finding the Right Developers",
    slug: "technical-recruitment-strategies",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    publishDate: "2023-09-05",
    readTime: "7 min read",
    tags: ["Technical", "Developers"],
  },
  {
    id: 10,
    title: "Metrics That Matter: Measuring Recruitment Success",
    slug: "recruitment-metrics-that-matter",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    publishDate: "2023-10-15",
    readTime: "8 min read",
    tags: ["Metrics", "Analytics"],
  },
];

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      // Simulate API fetch
      setTimeout(() => {
        const foundBlog =
          blogDatabase[slug] ||
          blogDatabase["essential-skills-for-modern-recruiters"];
        setBlog(foundBlog);

        // Get related blogs - first try predefined, then random
        let related = [];
        if (foundBlog.relatedBlogIds) {
          related = allBlogs.filter(
            (b) =>
              foundBlog.relatedBlogIds.includes(b.id) && b.id !== foundBlog.id
          );
        }

        // If not enough related blogs, add random ones
        while (related.length < 3) {
          const randomBlog =
            allBlogs[Math.floor(Math.random() * allBlogs.length)];
          if (!related.some((b) => b.id === randomBlog.id)) {
            related.push(randomBlog);
          }
        }

        setRelatedBlogs(related.slice(0, 3));
        setIsLoading(false);
      }, 500);
    }
  }, [slug]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const renderContent = (item, index) => {
    switch (item.type) {
      case "heading":
        return (
          <motion.h2
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="text-2xl font-semibold text-gray-800 mt-8 mb-4"
          >
            {item.text}
          </motion.h2>
        );
      case "paragraph":
        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="text-gray-700 mb-4 leading-relaxed"
          >
            {item.text}
          </motion.p>
        );
      case "image":
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="my-6 rounded-lg overflow-hidden"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-auto rounded-lg"
            />
            {item.caption && (
              <p className="text-center text-sm text-gray-500 mt-2">
                {item.caption}
              </p>
            )}
          </motion.div>
        );
      case "quote":
        return (
          <motion.blockquote
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="border-l-4 border-blue-500 italic my-6 pl-4 text-gray-600"
          >
            "{item.text}"
            {item.author && (
              <footer className="mt-2 text-gray-500">— {item.author}</footer>
            )}
          </motion.blockquote>
        );
      case "list":
        return (
          <motion.ul
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="list-disc pl-5 my-4 space-y-2"
          >
            {item.items.map((listItem, i) => (
              <li key={i} className="text-gray-700">
                {listItem}
              </li>
            ))}
          </motion.ul>
        );
      default:
        return null;
    }
  };

  if (isLoading || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Full-width image with gray overlay */}
      <div className="relative w-full h-96 bg-gray-900">
        <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white text-center px-4"
          >
            {blog.title}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:w-2/3"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-xl shadow-md p-8 mb-8"
            >
              <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
                <div className="flex items-center">
                  <FiUser className="mr-2" />
                  <span>
                    {blog.author} • {blog.authorRole}
                  </span>
                </div>
                <div className="flex items-center">
                  <FiCalendar className="mr-2" />
                  <span>{formatDate(blog.publishDate)}</span>
                </div>
                <div className="flex items-center">
                  <FiClock className="mr-2" />
                  <span>{blog.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                  >
                    <FiTag className="mr-1" size={14} />
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="prose max-w-none">
                {blog.content.map((item, index) => renderContent(item, index))}
              </div>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-xl shadow-md p-6 mb-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="flex items-center mb-4 sm:mb-0">
                  <img
                    src={blog.authorImage}
                    alt={blog.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{blog.author}</h4>
                    <p className="text-sm text-gray-500">{blog.authorRole}</p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                    <FiLinkedin size={20} />
                  </button>
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                    <FiTwitter size={20} />
                  </button>
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                    <FiFacebook size={20} />
                  </button>
                </div>
              </div>
            </motion.div> */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Recruiting",
                  "Hiring",
                  "Talent",
                  "AI",
                  "Diversity",
                  "Remote Work",
                  "HR Tech",
                  "Interviewing",
                ].map((tag, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-center space-x-4">
                <button className="flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                  <FiShare2 className="mr-2" />
                  Share Article
                </button>
                <button className="flex items-center px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                  <FiBookmark className="mr-2" />
                  Save for Later
                </button>
              </div>
              <div className="text-gray-500 text-sm">
                Last updated: {formatDate(new Date().toISOString())}
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-16 mb-6 z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Related Articles
              </h3>
              <div className="space-y-6">
                {relatedBlogs.map((blog) => (
                  <motion.div
                    key={blog.id}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}

                    // href={`/blogs/${blog.slug}`}
                    // onClick={() => router.push(`/blogs/${blog.slug}`)}
                  >
                    <Link
                      to={`/blogs/${blog.slug}`}
                      className="flex items-start gap-4 cursor-pointer group"
                    >
                      <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                          {blog.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <FiCalendar className="mr-1" size={14} />
                          <span>{formatDate(blog.publishDate)}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <FiClock className="mr-1" size={14} />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Recruiting",
                  "Hiring",
                  "Talent",
                  "AI",
                  "Diversity",
                  "Remote Work",
                  "HR Tech",
                  "Interviewing",
                ].map((tag, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </motion.button>
                ))}
              </div>
            </div> */}

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl shadow-md p-6 text-white relative z-0"
            >
              <h3 className="text-xl font-bold mb-4">Subscribe to Updates</h3>
              <p className="mb-4 opacity-90">
                Get the latest recruitment insights delivered to your inbox
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 bg-white/20 backdrop-blur-sm rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-white/70"
                />
                <button className="bg-white text-blue-600 px-4 py-3 rounded-r-lg font-medium hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs mt-2 opacity-70">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogDetails;
