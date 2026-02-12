const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Nov 25, 2025",
        title:
            "Comprehensive Guide to NestJS",
        image: "/images/blog1.png",
        link: "https://www.linkedin.com/posts/cadz_nestjs-beginners-guide-activity-7398965303906467840-a0wg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF3H2rABa1-TR-GenRRFFTRNVqUmGIPjGAY",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "The Ultimate Guide to Mastering Three.js for 3D Development",
        image: "/images/blog2.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "The Ultimate Guide to Mastering GSAP Animations",
        image: "/images/blog3.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "NestJS", "Hono"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/cadzcodes",
    },
    {
        id: 2,
        text: "Email",
        icon: "/icons/email.svg",
        bg: "#4bcb63",
        link: "mailto:raymundjoelcadiz0@gmail.com",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/cadzcodes",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/cadz/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Elixir Emporium",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "ElixirEmporium.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Elixir Emporium is a modern, full-stack e-commerce platform built for scalability, security, and a smooth shopping experience.",
                        "It focuses on clean product discovery, fast search, reliable inventory syncing, and a checkout flow that minimizes friction.",
                        "Under the hood you'll find modular services, secure authentication, and APIs designed to handle real traffic without surprises.",
                        "The frontend prioritizes performance and accessibility, while the backend emphasizes maintainability, observability, and safe deployments.",
                        "I paid special attention to clear error handling, automated tests, and Docker-based deployments so the app behaves nicely in production.",
                        "All together it’s a practical, production-ready store that’s pleasant for customers and straightforward for teams to operate.",
                    ],
                },
                {
                    id: 2,
                    name: "elixiremporium.git",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/cadzcodes/ElixirEmporium?tab=readme-ov-file",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "elixir.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://github.com/cadzcodes/ElixirEmporium/blob/main/public/images/Mockup.png",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "AI Resume Analyzer",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "AI Resume Analyzer Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
                        "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
                        "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
                        "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
                    ],
                },
                {
                    id: 2,
                    name: "ai-resume-analyzer.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "ai-resume-analyzer.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Food Delivery App",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Food Delivery App Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
                        "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
                        "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
                        "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
                    ],
                },
                {
                    id: 2,
                    name: "food-delivery-app.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "food-delivery-app.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/cadz.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/cadz-2.jpg",
        },
        {
            id: 3,
            name: "vi_event-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/cadz-3.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/cadz.jpg",
            description: [
                "Hey! I’m Cadz 👋 — a backend developer who loves building reliable servers and polishing APIs that scale.",
                "I specialize in JavaScript, PHP, NestJS, React, and Laravel — I enjoy wiring up fast backends and smoothing out the full-stack experience.",
                "I care about solid architecture, clean code, and observability that actually helps during debugging.",
                "When I'm off the clock, you'll find me deploying pet projects at midnight, optimizing Dockerfiles, or hoarding obscure server stickers 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };