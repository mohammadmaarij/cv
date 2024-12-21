import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Muhammad Maarij",
  initials: "MM",
  location: "Islamabad, Pakistan, PKT",
  locationLink: "https://www.google.com/maps/place/Islamabad",
  about:
    "A beginner-level Flutter Developer focused on building products with extra attention to detail.",
  summary:
    "As a Flutter Enthusiast, I possess expertise in designing and implementing user interfaces, integrating with backend services, and optimizing app performance.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/104904023?s=400&u=e4f9c78335cfadc1a2ea16ed2ca904f1eba87ecd&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "maarijmohammad@gmail.com",
    tel: "+923165156617",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/mohammadmaarij",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mohammad-maarij-a10823239/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/MaarijMohammad",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Capital University of Science and Technology",
      degree: "Bachelor's Degree in Computer Science",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Techanion",
      link: "https://techanion.com/",
      badges: ["Onsite"],
      title: "Intern Flutter Developer",
      logo: ClevertechLogo,
      start: "Feb 2024",
      end: "2024",
      description:
        "As a Flutter Intern, I have invested time in mastering fundamental concepts of Flutter, including responsive user interfaces, Firebase, and API integration. I have completed projects demonstrating my ability to design and implement clean and maintainable code.",
    },
    {
      company: "Cygnetic Software",
      link: "https://cygnetic.net/",
      badges: ["Remote"],
      title: "Intern Flutter Developer",
      logo: ConsultlyLogo,
      start: "Nov 2023",
      end: "Jan 2024",
      description:
        "Focused on building responsive UIs, integrating Firebase, and connecting APIs for advanced features. Completed projects with clean, maintainable code ready for production environments.",
    },
  ],
  skills: [
    "Flutter",
    "Dart",
    "Firebase",
    "Flutter Web",
    "API Integration",
    "Git",
    "Back4App",
    "SQLite",
    "FCM",
    "ZEGOCLOUD",
  ],
  projects: [
    {
      title: "Chat App",
      techStack: ["Flutter", "Dart", "Firebase", "Back4App", "ZEGOCLOUD"],
      description:
        "Developed a user-friendly chat app inspired by WhatsApp. Integrated real-time messaging with Back4App and added voice/video call features using ZEGOCLOUD SDK.",
      logo: ConsultlyLogo,
    },
    {
      title: "Upwork Project",
      techStack: ["Flutter", "Dart", "Firebase"],
      description:
        "Implemented a like/unlike feature in a chat app. Notifications are sent to users when their messages are liked, with a total like counter displayed.",
      logo: MonitoLogo,
    },
    {
      title: "Tic Tac Toe",
      techStack: ["Flutter", "Dart"],
      description:
        "Designed and implemented a Tic-Tac-Toe app showcasing strong UI design and problem-solving skills.",
      logo: Minimal,
    },
    {
      title: "Twitter Redesign",
      techStack: ["Flutter", "Dart", "GetX"],
      description:
        "Redesigned the Twitter mobile app, focusing on UI/UX improvements while maintaining essential features. Implemented tweet posting, retweets, and comments using Firebase and GetX.",
      logo: JarockiMeLogo,
    },
    {
      title: "OpenArt NFTs",
      techStack: ["Flutter", "Dart"],
      description:
        "Created a platform for buying and selling NFTs (Non-Fungible Tokens), enabling users to trade unique digital assets like artwork and music.",
      logo: Minimal,
    },
    {
      title: "ToDo App",
      techStack: ["Flutter", "Dart"],
      description:
        "Built a ToDo app for efficient task management using Flutter and Dart.",
      logo: BarepapersLogo,
    },
    {
      title: "SadaPay Clone",
      techStack: ["Flutter", "Dart", "SQLite"],
      description:
        "Developed a SadaPay clone with full CRUD functionality and image upload capabilities, built using MVC architecture for maintainable code.",
      logo: ParabolLogo,
    },
  ],
};
