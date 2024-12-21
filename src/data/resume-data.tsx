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
    "As a Flutter enthusiast, I possess expertise in designing and implementing user interfaces, integrating with backend services, and optimizing app performance.",
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
        "As a Flutter Intern, I have mastered fundamental concepts of Flutter, including responsive user interfaces, Firebase, and API integration. I have also completed projects that demonstrate my ability to design and implement clean and maintainable code.",
    },
    {
      company: "Cygnetic Software",
      link: "https://cygnetic.net/",
      badges: ["Remote"],
      title: "Intern Flutter Developer",
      logo: ClevertechLogo,
      start: "Nov 2023",
      end: "Jan 2024",
      description:
        "As a Flutter Intern, I focused on building responsive user interfaces, integrating Firebase, and connecting APIs for advanced features. I also completed projects with clean and maintainable code.",
    },
  ],
  skills: [
    "Flutter",
    "Dart",
    "Firebase",
    "Flutterweb",
    "API Integration",
    "Git",
    "Back4App",
    "FCM",
    "SQLite",
    "Parse Server",
    "ZegoCloud",
  ],
  projects: [
    {
      title: "Chat App",
      techStack: [
        "Flutter",
        "Dart",
        "Firebase",
        "Back4App",
        "ZegoCloud",
        "GetX",
      ],
      description:
        "Developed a mobile application inspired by WhatsApp, enabling users to send messages and make voice and video calls. Integrated ZEGOCLOUD SDK for calling functionality and Back4App (Parse Server) for real-time backend communication.",
      logo: ConsultlyLogo,
    },
    {
      title: "Upwork Project",
      techStack: ["Flutter", "Dart", "Firebase"],
      description:
        "Implemented a like/unlike feature in a chat app. Users can like messages, and a notification is sent to the user whose message was liked. A total like counter is displayed for each message.",
      logo: MonitoLogo,
    },
    {
      title: "Tic Tac Toe",
      techStack: ["Flutter", "Dart"],
      description:
        "Designed and implemented a Tic-Tac-Toe game, demonstrating skills in user interface design and problem-solving.",
      logo: MonitoLogo,
    },
    {
      title: "Twitter Redesign",
      techStack: ["Flutter", "Dart", "GetX", "Firebase"],
      description:
        "Redesigned the Twitter mobile app to improve UI and UX. Added features for posting tweets, retweets, and comments, implemented using GetX for state management and Firebase for backend support.",
      logo: JarockiMeLogo,
    },
    {
      title: "OpenArt NFTs",
      techStack: ["Flutter", "Dart"],
      description:
        "Developed a platform for buying and selling NFTs (Non-Fungible Tokens), enabling users to trade unique digital assets such as artwork and music.",
      logo: Minimal,
    },
    {
      title: "ToDo App",
      techStack: ["Flutter", "Dart"],
      description:
        "Created a user-friendly ToDo app for efficient task management using Flutter and Dart.",
      logo: BarepapersLogo,
    },
    {
      title: "SadaPay Clone",
      techStack: ["Flutter", "Dart", "SQLite"],
      description:
        "Developed a SadaPay clone using SQLite as the backend, featuring CRUD operations and functionality to upload and retrieve pictures. Built using the MVC architecture for clean and maintainable code.",
      logo: ParabolLogo,
    },
  ],
};
