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
  avatarUrl:"https://avatars.githubusercontent.com/u/104904023?s=400&u=e4f9c78335cfadc1a2ea16ed2ca904f1eba87ecd&v=4",
  personalWebsiteUrl: 
  "https://jarocki.me",
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
        "As a Flutter Intern, I have invested time in mastering the fundamental concepts of flutter, including responsive user interfaces,firebase and Api integration. I have also completed projects that demonstrate my ability to design and implement clean and maintainable code.",
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
        "I've really dived into the basics of Flutter, like making sure apps look good on any device, hooking them up to Firebase for storing data, and connecting them with APIs for extra features. I've also wrapped up projects where I've made sure the code is neat and tidy, easy for others to understand and maintain. I'm excited to bring these skills to the table in any professional setting.",
    },
  ],
  skills: [
    "Flutter",
    "Dart",
    "Firebase",
    "Flutterweb",
    "Api",
    "Git",
    "Back4app",
    "FCM",
    "Sqlite",
    "ParseServer",
    "ZegoCloud",
    

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
        "Firebase Tokens",
        
      ],
      description: 
        "Developed a mobile application using Flutter and Dart to create an efficient and user-friendly chat app, inspired by WhatsApp. The app enables users to send messages and make calls, including both voice and video calls, powered by the ZEGOCLOUD SDK. Used Back4App (Parse Server) for the backend to handle data and enable real-time communication smoothly."
        //"Developed a chat application, demonstrating expertise in real-time communication, user authentication, and database integration.",
      logo: ConsultlyLogo,
     // link: {
       // label: "consultly.com",
       // href: "https://consultly.com/",
     // },
    },
  {
      title: "Upwork Project",
      techStack: ["Dart", "Firebase", "Flutter Packages",],
      description:
        "Received a project on Upwork to implement a like/unlike feature in a chat app. I integrated the functionality so users could like or unlike messages. Additionally, when a user likes a message, a notification is sent to the person whose message was liked. A total like counter is also displayed for each message.",
      logo: MonitoLogo,
     /* link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },*/
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
        "Executed a comprehensive redesign of the Twitter mobile app using Dart and GetX state management, focusing on improving the user interface (UI) and user experience (UX) while maintaining key functionalities. Users canalso add tweets, retweet, comment on tweets, and reply to comments, implemented using Firebase and GetX for state management."
       // "Executed a comprehensive redesign of the Twitter Mobile app using Dart and Getx state management, focusing on improving user interface (UI) and user experience (UX) while maintaining key functionalities",
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
        "Developed a SadaPay clone using SQLite as the backend, implementing full CRUD operations and incorporating functionality to upload and retrieve pictures from the database. The app was designed using the MVC (Model-View-Controller) architecture to ensure a clean and maintainable code structure.",
      logo: ParabolLogo,
     link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
  
    
  ],
} as const;
