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
    "A beginner level Flutter Developer focused on building products with extra attention to detail",
  summary:
    "As a Flutter Enthusiast I possess expertise in designing and implementing user interfaces, integrating with backend services, and optimizing app performance.",
  avatarUrl: "https://avatars.githubusercontent.com/u/104904023?s",
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
      company: "SoftwareFlare",
      link: "https://softwareflare.com/",
      badges: ["Onsite"],
      title: "Intern Flutter Developer",
      logo: ClevertechLogo,
      start: "July 2023",
      end: "2023",
      description:
        "As a Flutter Intern, I have invested time in mastering the fundamental concepts of flutter, including responsive user interfaces,firebase and Api integration. I have also completed projects that demonstrate my ability to design and implement clean and maintainable code.",
    },
    {
    company: "Cygnetic Software",
      link: "https://softwareflare.com/",
      badges: ["Remote"],
      title: "Intern Flutter Developer",
      logo: ClevertechLogo,
      start: "June 2023",
      end: "July 2023",
      description:
        "As a Flutter Intern, I have invested time in mastering the fundamental concepts of flutter, including responsive user interfaces,firebase and Api integration. I have also completed projects that demonstrate my ability to design and implement clean and maintainable code.",
    },
  ],
  skills: [
    "Flutter",
    "Dart",

  ],
  projects: [
    {
      title: "Chat App",
      techStack: [
        "Message App",
        "Api's",
        "Flutter Packages",
        "Dart",
        "Firebase",
        "Getx",
      ],
      description: "Developed a chat application, demonstrating expertise in real-time communication, user authentication, and database integration.",
      logo: ConsultlyLogo,
     // link: {
       // label: "consultly.com",
       // href: "https://consultly.com/",
     // },
    },
    {
      title: "Tic Tac Toe",
      techStack: ["Dart", "Firebase", "Flutter Packages",],
      description:
        "Designed and implemented Tic-Tac-Toe application showcasing proficiency in software development, user interface design, and problem-solving skills.",
      logo: MonitoLogo,
     /* link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },*/
    },
    {
      title: "Twitter Redesign",
      techStack: ["Side Project", "Dart", "Getx", "Front-end"],
      description:
        "Executed a comprehensive redesign of the Twitter Mobile app using Dart and Getx state management, focusing on improving user interface (UI) and user experience (UX) while maintaining key functionalities",
      logo: JarockiMeLogo,
     /* link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },*/
    },
    {
      title: "OpenArt NFT's Buy and Sell",
      techStack: ["Side Project", "Dart", "Flutter"],
      description:
        "Developed a platform for buying and selling digital collectibles known as NFT’s (NonFungible Tokens). NFTs represent unique digital assets, such as artwork, music, or virtual items",
      logo: Minimal,
     /* link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },*/
    },
    {
      title: "ToDo App",
      techStack: ["Side Project", "Dart"],
      description:
        "Developed a mobile application using Flutter and Dart programming language to create a user-friendly and efficient TODO list management tools",
      logo: BarepapersLogo,
      /*link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },*/
    },
    
    {
      title: "SadaPay",
      techStack: [
        "Side Project",
        "Flutter",
        "Dart",
        "Packages",
      ],
      description:
        "I redesigned the SadaPay app by using different packages in Flutter. My main goal was to make the app look and feel better for users, while still keeping all the important financial features the same",
      logo: ParabolLogo,
     
    },
  
    
  ],
} as const;
