/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sujit Sarkar",
  title: "Hi all, I'm Sujit",
  subTitle: emoji(
    "Cloud Infrastructure Engineer with 4+ years of experience managing enterprise Linux and cloud platforms in Banking and Large-Scale enterprise environments."
  ),
  resumeLink: "./src/containers/greeting/Sujit_Sarkar_CV_5_2026.pdf", // Add a Google Drive link to your PDF resume here, or leave empty to hide
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sarkar-s1497",
  linkedin: "https://linkedin.com/in/sujit-sarkar-767146156",
  gmail: "sarkar.s1497@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CLOUD INFRASTRUCTURE ENGINEER SPECIALIZING IN AUTOMATION AND PLATFORM RELIABILITY",
  skills: [
    emoji(
      "⚡ Provision and administer Azure and AWS cloud resources and architecture"
    ),
    emoji(
      "⚡ Manage and maintain enterprise Linux servers (RHEL, AIX, Solaris)"
    ),
    emoji(
      "⚡ Develop Infrastructure as Code solutions using Terraform and automate workflows with Ansible"
    ),
    emoji(
      "⚡ Deploy, support, and monitor Kubernetes-based application environments"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "RedHat",
      fontAwesomeClassname: "fab fa-redhat"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Terminal",
      fontAwesomeClassname: "fas fa-terminal"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ramrao Adik Institute of Technology",
      logo: require("./assets/images/RAIT.png"), // You will need to add a default logo image or custom logo to your assets folder
      subHeader: "Master of Technology (M.Tech) in Computer Engineering",
      duration: "Graduated June 2024",
      desc: " DY Patil University | Navi Mumbai, Maharashtra, India",
      descBullets: [
        "Achieved an 8.24 CGPA",
        "Published research on hybrid LDP and AES encryption for recommendation systems (Springer)"
      ]
    },
    {
      schoolName:
        "Chhatrapati Shivaji Maharaj Institute of Technology",
      logo: require("./assets/images/CSMIT.png"),
      subHeader: "Bachelor of Engineering (B.E) in Computer Engineering",
      duration: "Graduated June 2021",
      desc: "Mumbai University | Panvel, Maharashtra, India",
      descBullets: ["Achieved a 6.74 CGPA"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud & DevOps (Azure/AWS/Terraform)",
      progressPercentage: "90%"
    },
    {
      Stack: "Linux Administration (RHEL/AIX)",
      progressPercentage: "95%"
    },
    {
      Stack: "Containers & Monitoring (K8s/Docker/Splunk)",
      progressPercentage: "89%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Tech Mahindra (Client: State Bank of India)",
      companylogo: require("./assets/images/Tech_Mahindra.png"), // Make sure to add a generic placeholder image to your assets
      date: "April 2025 – Present",
      desc: "Manage and maintain 200+ production Linux servers across RHEL, AIX and Solaris environments supporting critical banking workloads.",
      descBullets: [
        "Automated operational workflows using Ansible Playbooks and Shell scripting, reducing manual administration effort by 40%.",
        "Implemented centralized monitoring and log management across 100+ systems using Splunk.",
        "Executed enterprise RHEL lifecycle upgrades across 50+ servers using Leapp migration framework.",
        "Performed security hardening and vulnerability remediation maintaining 99.99% availability."
      ]
    },
    {
      role: "Senior Linux Administrator",
      company: "Quess Corp (Client: Reliance Industries Limited)",
      companylogo: require("./assets/images/Quess_Corp.png"),
      date: "Dec 2023 – April 2025",
      desc: "Managed infrastructure operations across 1000+ Linux servers spanning production and non-production enterprise environments.",
      descBullets: [
        "Provisioned and administered Azure resources including VMs, Storage Accounts, VNets, and NSGs.",
        "Developed Infrastructure as Code solutions using Terraform and Azure ARM Templates.",
        "Supported Kubernetes-based application environments and implemented ELK Stack and Grafana monitoring."
      ]
    },
    {
      role: "Linux Administrator",
      company: "ACL Digital (Client: Reliance Industries Limited)",
      companylogo: require("./assets/images/ACL_Digital.png"),
      date: "Nov 2021 – Nov 2023",
      desc: "Administered Linux servers including patch management, storage administration, user management and system performance optimization.",
      descBullets: [
        "Supported application and database infrastructure across multiple environments maintaining 99.9% uptime.",
        "Developed Bash scripts for log management, disk utilization monitoring and routine automation."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */

const openSource = {
  showGithubProfile: "true",
  display: false
};

// Some big projects you have worked on
// Note: Since GitHub pinned projects will show automatically, we can use this section to highlight your Technical Projects from your CV

const bigProjects = {
  title: "Technical Projects",
  subtitle: "KEY ARCHITECTURE AND AUTOMATION IMPLEMENTATIONS",
  projects: [
    {
      //image: require("./assets/images/defaultProjectLogo.jpg"),
      projectName: "Enterprise Kubernetes Platform",
      projectDesc:
        "Designed and deployed a multi-tier application architecture on Kubernetes using namespaces, services, persistent volumes and RBAC controls.",
      footerLink: []
    },
    {
      //image: require("./assets/images/defaultProjectLogo.jpg"),
      projectName: "IaC Automation Framework",
      projectDesc:
        "Automated provisioning of Azure infrastructure using Terraform and ARM templates to reduce deployment effort and configuration drift.",
      footerLink: []
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle: "Professional IT and Cloud Certifications",

  achievementsCards: [
    {
      title: "Microsoft Certified",
      subtitle: "Azure 104 (Azure Administrator Associate)",
      image: require("./assets/images/Microsoft_Azure.png"),
      imageAlt: "Azure Logo",
      footerLink: []
    },
    {
      title: "Oracle Cloud Infrastructure",
      subtitle:
        "Certified Data Science Professional & Generative AI Professional",
      image: require("./assets/images/OCI.png"),
      imageAlt: "OCI Logo",
      footerLink: []
    },
    {
      title: "Simplilearn Master's Programs",
      subtitle: "Cloud Solution Architect & DevOps Engineer",
      image: require("./assets/images/simplilearn.png"),
      imageAlt: "Simplilearn Logo",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Disabled as per CV
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",
  talks: [],
  display: false // Disabled as per CV
};

// Podcast Section

const podcastSection = {
  title: "",
  subtitle: "",
  podcast: [],
  display: false // Disabled as per CV
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9619465792",
  email_address: "sarkar.s1497@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true; // Set to true to show you are open to opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
