export const portfolioData = {
  hero: {
    greeting: "Hi, my name is",
    name: "Madhavan B",
    role: "Software & Data Engineer",
    description: "I am an engineering student and developer passionate about building scalable web applications, data pipelines, and AI-powered tools. Currently pursuing my B.Tech in CSE at Sri Venkateshwaraa College of Engineering and Technology.",
    resumeUrl: "#", // Add your resume PDF link here
  },
  about: {
    title: "About Me",
    content: [
      "Hello! I'm Madhavan, a passionate software and data engineer from Puducherry. I enjoy creating robust applications that solve real-world problems. My experience spans across full-stack web development, backend engineering, and data warehousing.",
      "Recently, I worked as a Data Engineer Intern at Decision Minds, where I contributed to both backend and frontend development, integrated enterprise platforms like Jira, and worked extensively with Snowflake for data warehousing.",
      "I am constantly exploring new technologies and building projects like AI resume builders, trading automation bots, and image optimization platforms to push the boundaries of what I can create."
    ],
    skills: [
      "Python",
      "JavaScript",
      "React.js & Next.js",
      "SQL & Snowflake",
      "C & C++",
      "GCP & Cloud Run"
    ]
  },
  experience: [
    {
      id: 1,
      title: "Data Engineer Intern",
      company: "Decision Minds",
      period: "Feb 2026 – Aug 2026",
      description: [
        "Worked on the backend development of an Alert Management Platform for an enterprise project.",
        "Integrated Jira with the Alert Management Platform to streamline issue tracking and operational workflows.",
        "Worked with Snowflake for data warehousing, SQL query development, data loading, and data management.",
        "Contributed to frontend development by implementing UI enhancements and resolving bugs.",
        "Collaborated with cross-functional teams to troubleshoot issues, improve system performance, and ensure successful project delivery."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "YaliVox – AI Resume Builder & Auto Job Applier",
      description: "An AI-powered platform for generating ATS-friendly resumes and an automated job application system to streamline the job search process.",
      techStack: ["React", "Python", "FastAPI", "SQL", "Netlify"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop", // Placeholder image
      githubUrl: "https://github.com/blackeagle-25-5",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Minifypic.com",
      description: "An enterprise image optimization platform providing a responsive user interface and Python backend services for image compression and processing.",
      techStack: ["Next.js", "React", "Python", "GCP", "Netlify"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", // Placeholder image
      githubUrl: "https://github.com/blackeagle-25-5",
      liveUrl: "#" // Link to Live if you have it
    },
    {
      id: 3,
      title: "Enterprise Alert Management Platform",
      description: "An alert management system featuring Jira integration for issue tracking, Approval Management, and Role-Based Access Control (RBAC) modules.",
      techStack: ["Python", "SQL", "React", "Jira API", "Snowflake"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Placeholder image
      githubUrl: "https://github.com/blackeagle-25-5",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Quotex Trading Automation Bot",
      description: "An automated trading bot that analyzes candlestick patterns and executes trades based on predefined strategies to improve trading efficiency.",
      techStack: ["Python", "Automation", "Trading Algorithms"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop", // Placeholder image
      githubUrl: "https://github.com/blackeagle-25-5",
      liveUrl: "#"
    }
  ],
  contact: {
    title: "Get In Touch",
    message: "I am currently looking for new opportunities in software and data engineering. Whether you have a question or just want to say hi, my inbox is always open. I'll try my best to get back to you!",
    email: "madhavan200428@gmail.com",
    github: "https://github.com/blackeagle-25-5",
    linkedin: "https://www.linkedin.com/in/madhavan3",
    twitter: "https://twitter.com" // You can remove this or update in Footer if you don't use Twitter
  }
};
