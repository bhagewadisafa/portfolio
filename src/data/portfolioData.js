// Portfolio Data for Safa Bhagewadi
// Aspiring Full-Stack Python Developer

export const personalInfo = {
  name: "Safa Bhagewadi",
  role: "Aspiring Full-Stack Python Developer",
  subRole: "MCA Student @ Chetan Business School",
  location: "Hubli, Karnataka, India",
  email: "bhagewadisafa@gmail.com",
  github: "https://github.com/bhagewadisafa",
  linkedin: "https://linkedin.com/in/safa-bhagewadi-b2a97b379",
  resumePath: "/resume.pdf",
  avatarPath: "/avatar.jpg",
  status: "Open to Entry-Level Software Developer Roles",
  relocation: "Hubli | Willing to Relocate | Open to Remote",
  bioSummary:
    "Pursuing Master of Computer Applications (MCA 2025–2027) at Chetan Business School in Hubli. Passionate about building reliable web applications, database-driven administrative systems, and machine learning solutions using Python, Flask, and modern relational/NoSQL databases.",
};

export const recruiterSnapshot = [
  {
    label: "Current Pursuit",
    value: "MCA (2025–2027), Chetan Business School, Hubli",
  },
  {
    label: "Undergraduate",
    value: "BCA (2021–2024), KLE PC Jabin Science College (70.4% CGPA)",
  },
  {
    label: "Core Stack",
    value: "Python, Flask, JavaScript, SQLite, MySQL, MongoDB",
  },
  {
    label: "Target Roles",
    value: "Python Developer, Junior Backend Developer, Full-Stack Trainee, Software Engineer",
  },
  {
    label: "Availability & Location",
    value: "Immediate for internships / entry-level roles (Hubli / Relocation ready)",
  },
];

export const skillCategories = [
  {
    id: "backend-prog",
    title: "Programming & Backend",
    iconName: "Code2",
    description: "Core programming languages and backend server-side framework",
    skills: [
      { name: "Python", level: "Core / Hands-on", highlight: true },
      { name: "Flask", level: "Web Server & REST APIs", highlight: true },
      { name: "JavaScript", level: "DOM & Scripting", highlight: false },
      { name: "C", level: "Procedural & Logic", highlight: false },
    ],
  },
  {
    id: "databases",
    title: "Databases & ORM",
    iconName: "Database",
    description: "Relational modeling, NoSQL document stores, and object-relational mapping",
    skills: [
      { name: "MySQL", level: "Relational Queries & Schemas", highlight: true },
      { name: "SQLite", level: "Application Database", highlight: true },
      { name: "MongoDB", level: "NoSQL Collections", highlight: false },
      { name: "SQL Server", level: "Relational Systems", highlight: false },
      { name: "SQLAlchemy", level: "Python ORM", highlight: true },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    iconName: "Layout",
    description: "Responsive interface structuring, styling, and basic component architecture",
    skills: [
      { name: "HTML5", level: "Semantic Structure", highlight: true },
      { name: "CSS3", level: "Responsive Layouts & Flexbox", highlight: true },
      { name: "React.js", level: "Basic / Foundational", highlight: false, isBasic: true },
    ],
  },
  {
    id: "datascience-ml",
    title: "Data Science & ML",
    iconName: "Cpu",
    description: "Data manipulation, similarity calculations, and recommendation pipelines",
    skills: [
      { name: "NumPy", level: "Array & Numerical Operations", highlight: true },
      { name: "Pandas", level: "Dataframes & Cleaning", highlight: true },
      { name: "Scikit-learn", level: "Vectorization & Cosine Sim", highlight: true },
      { name: "Content-Based Filtering", level: "ML Recommendation Logic", highlight: true },
    ],
  },
  {
    id: "tools",
    title: "Tools & Environments",
    iconName: "Terminal",
    description: "Development environments, version control, and rapid deployment",
    skills: [
      { name: "Git", level: "Version Control", highlight: true },
      { name: "GitHub", level: "Repository Management", highlight: true },
      { name: "VS Code", level: "Primary Development IDE", highlight: false },
      { name: "NetBeans", level: "IDE Environment", highlight: false },
      { name: "Streamlit", level: "ML Web Dashboarding", highlight: true },
    ],
  },
  {
    id: "fundamentals",
    title: "Computer Science Core",
    iconName: "BookOpen",
    description: "Theoretical and algorithmic grounding from BCA and MCA curriculum",
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: "Core Concepts", highlight: true },
      { name: "Database Management Systems (DBMS)", level: "Normalization & ACID", highlight: true },
      { name: "Computer Networking Basics", level: "Protocols & Web Basics", highlight: false },
      { name: "Data Structures", level: "Linear & Non-Linear Basics", highlight: false },
    ],
  },
];

export const projects = [
  {
    id: "moto-dealer",
    title: "Moto Dealer Website",
    category: "Full-Stack Web Application",
    badgeColor: "cyan",
    technologies: ["Python", "Flask", "SQLite", "HTML5", "CSS3", "JavaScript"],
    image: "/projects/moto-dealer.jpg",
    problem:
      "Small-to-medium motorcycle showrooms frequently encounter misplaced paperwork, inventory stock discrepancies, double-booking errors for test rides, and tedious manual invoice drafting.",
    implementation:
      "Engineered an end-to-end Flask web portal backed by a normalized SQLite database. Built secure admin session authentication, vehicle inventory status tracking, customer test-ride booking workflow with OTP verification for order validation, and automated PDF invoice generation.",
    value:
      "Provides transparent inventory visibility, eliminates booking conflicts, reduces paperwork turnaround from hours to seconds, and provides clean audit trails for management.",
    features: [
      "Motorcycle inventory catalog with real-time availability status",
      "Customer test-ride and motorcycle booking workflow",
      "Role-based admin authentication and secure session management",
      "OTP verification logic for order confirmations",
      "Automated PDF invoice generation and export",
      "Customer transaction history and sales records",
    ],
    architecture: {
      title: "Moto Dealer Architecture Flow",
      nodes: [
        { name: "Customer & Admin UI", desc: "HTML5/CSS3/JS booking & inventory dashboard" },
        { name: "Flask Web Controller", desc: "Routing, Session Handler & OTP Engine" },
        { name: "SQLite Relational DB", desc: "Bikes, Bookings, Users & Invoice tables" },
        { name: "Invoice & Alert Service", desc: "Digital receipt generation & validation" },
      ],
    },
    githubUrl: "https://github.com/bhagewadisafa",
    liveUrl: null,
  },
  {
    id: "fees-reminder",
    title: "College Fees Reminder System",
    category: "Database-Driven Automation",
    badgeColor: "emerald",
    technologies: [
      "Python",
      "Flask",
      "MySQL / SQLite",
      "SQLAlchemy",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    image: "/projects/fees-reminder.jpg",
    problem:
      "College administration offices waste significant manual hours maintaining disconnected spreadsheets, cross-checking payment statuses, and individually emailing or calling students with overdue dues.",
    implementation:
      "Developed an automated administrative web system using Flask and SQLAlchemy ORM. Designed relational models for student profiles, course tuition brackets, and payment history. Built admin authentication, session-protected dashboard filters (Paid, Pending, Overdue), automated overdue email dispatch, and financial audit report exports.",
    value:
      "Automates critical administrative communication, ensures immediate detection of pending balances, saves administrative staff days of repetitive outreach, and improves timely fee collections.",
    features: [
      "Centralized student academic and tuition record database",
      "Real-time fee status filtering (Paid, Pending, Overdue)",
      "Admin login with protected session state and audit logs",
      "Automated email notification scheduler for fee reminders",
      "SQLAlchemy ORM integration for clean schema abstraction",
      "Exportable tuition summary and administrative audit reports",
    ],
    architecture: {
      title: "Fee Reminder Architecture Flow",
      nodes: [
        { name: "Admin Portal", desc: "Interactive student records table & status filters" },
        { name: "Flask Logic & Auth", desc: "Session handling, due date checks & queries" },
        { name: "SQLAlchemy ORM", desc: "MySQL/SQLite models for students & fee records" },
        { name: "Email Reminder Worker", desc: "Automated alert dispatch to overdue students" },
      ],
    },
    githubUrl: "https://github.com/bhagewadisafa",
    liveUrl: null,
  },
  {
    id: "movie-rec",
    title: "Movie Recommendation System",
    category: "Machine Learning & Streamlit",
    badgeColor: "amber",
    technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
    image: "/projects/movie-rec.jpg",
    problem:
      "With expansive movie libraries, users face information fatigue. Generic rating lists fail to capture individual stylistic, narrative, and genre preferences.",
    implementation:
      "Engineered an interactive content-based recommendation application using Python and Streamlit. Utilized Pandas to parse and sanitize multi-feature movie metadata (genres, plot keywords, cast, and directors). Applied Scikit-learn's CountVectorizer to convert text tags into multidimensional feature vectors and computed Cosine Similarity matrices to rank closest neighbors.",
    recommendationLogic:
      "Recommendation Logic: Each movie's metadata (genre tags, plot keywords, and cast elements) is merged into a unified metadata text soup. Scikit-learn converts this text into numerical vectors. When a user selects a title, the system calculates the Cosine Similarity (angle between high-dimensional vectors) between the selected movie and all other titles. The top-ranked movies with the highest similarity scores are returned instantly.",
    value:
      "Demonstrates practical implementation of machine learning pipelines, natural language vector comparison, mathematical similarity ranking, and clean UI deployment with Streamlit.",
    features: [
      "Content-based filtering using movie metadata attributes",
      "Data preprocessing and cleansing pipeline using Pandas",
      "Text feature vectorization with Scikit-learn CountVectorizer",
      "Cosine Similarity calculation for multi-dimensional distance ranking",
      "Interactive Streamlit web dashboard for real-time movie queries",
      "Visual similarity score metrics for top recommended titles",
    ],
    architecture: {
      title: "ML Recommendation Pipeline Flow",
      nodes: [
        { name: "Streamlit UI", desc: "User search query & interactive movie selector" },
        { name: "Pandas Pipeline", desc: "Metadata cleaning, missing values & feature soup" },
        { name: "Scikit-learn Engine", desc: "CountVectorizer tokenization & vector matrix" },
        { name: "Cosine Distance Matrix", desc: "Top-N nearest neighbor similarity ranking" },
      ],
    },
    githubUrl: "https://github.com/bhagewadisafa",
    liveUrl: null,
  },
];

export const educationHistory = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Chetan Business School, Hubli",
    period: "2025 – 2027",
    status: "Currently Pursuing",
    summary:
      "Deepening practical software engineering, advanced web frameworks, machine learning paradigms, enterprise database management, and system architecture.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "KLE PC Jabin Science College, Hubli",
    period: "2021 – 2024",
    status: "Graduated with 70.4% CGPA",
    summary:
      "Built a solid foundation in computer science core principles, algorithms, procedural and object-oriented programming, relational databases, and web technologies.",
  },
];

export const relevantCoursework = [
  "Data Structures & Algorithms",
  "Database Management Systems (DBMS)",
  "Operating Systems",
  "Software Engineering",
  "Web Technologies",
  "Computer Networks",
  "Data Mining",
  "Linear Algebra",
];

export const certificationsAndActivities = [
  {
    title: "Full Stack Development Course",
    organization: "Professional Development Certification",
    date: "Completed April 2026",
    type: "Certification",
    iconName: "Code",
    description:
      "Hands-on program covering modern frontend design, backend RESTful web services with Python/Flask, database schemas, and integration workflows.",
  },
  {
    title: "Microsoft Azure Course",
    organization: "Microsoft Learn (in collaboration with FICE)",
    date: "Certified",
    type: "Certification",
    iconName: "Cloud",
    description:
      "Explored core cloud concepts, Azure architectural components, virtual machines, cloud databases, and foundational cloud security principles.",
  },
  {
    title: "Core Member, Datawarehouse Club",
    organization: "Chetan Business School, Hubli",
    date: "Active Member",
    type: "Leadership & Club",
    iconName: "Users",
    description:
      "Active participant and organizer of technical workshops, peer programming sessions, and knowledge sharing on database design and data tools.",
  },
  {
    title: "Hackathon 1.0 & Hackathon 2.0 Participant",
    organization: "Competitive College Hackathons",
    date: "2026",
    type: "Hackathon",
    iconName: "Award",
    description:
      "Collaborated in fast-paced teams to architect, code, and pitch functional software solutions under tight time constraints.",
  },
];
