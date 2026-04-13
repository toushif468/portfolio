export interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    tools: string[]
    category: string[];
    gitURL: string;
    demoLink?: string;
}

export const allProjects: Project[] = [
    {
        id: 1, 
        title: "Fashion E-commerce",
        image: "/Image/fashionEcomerce.png",
        description: "A full-stack marketplace with secure payment integration, real-time inventory tracking, and an optimized checkout flow.",
        tools: ["TypeScript", "React", "Tailwind CSS", "Stripe", "MongoDB","Express.js", "Stripe", "Cloudinary", "bcrypt"],
        category: ["Typescript", "React"],
        gitURL: "https://github.com/toushif468/FashionEcommerce",
        demoLink: "https://your-demo-link.com",
    }, {
        id: 2,
        title: "SymToDoc",
        image: "/Image/SymToDoc.png",
        description: "A React Native mobile application designed to empower users with fast, accessible, and intelligent health insights.",
        tools: ["React Native","Flask", "scikit-learn", "Node.js", "Express.js", "MongoDB", "Tailwind CSS","TypeScript", "Python"],
        category: ["React Native", "Machine Learning"],
        gitURL: "https://github.com/toushif468/SymToDoc",
        demoLink: "https://your-demo-link.com",
    } , {
        id: 3,
        title: "Roots2Goods",
        image: "/Image/Roots2Goods.png",
        description: "A React Native mobile application designed to empower users with fast, accessible, and intelligent health insights.",
        tools: ["Next.js", "Node.js", "Express.js", "MongoDB", "Google Map API", "Cart.js", "JWT"],
        category: ["Next.js"],
        gitURL: "https://github.com/toushif468/Root2Goods",
        demoLink: "https://your-demo-link.com",
    } ,{
        id: 4,
        title: "UIU_PSP",
        image: "/Image/UIU_PSP.png",
        description: "UIU_PSP is a collaborative educational web app designed to help students improve academic performance by engaging in peer-to-peer learning, question sharing, and interactive problem solving.",
        tools: ["PHP ", "HTML", "CSS", "MySQL", "Bootstrap", "InfinityFree", "JS"],
        category: ["PHP ", "mysql"],
        gitURL: "https://github.com/yourusername/root2good",
        demoLink: "https://your-demo-link.com",
    }
]

export const categories = [ "ALL", "React", "React Native", "Django", "PHP", "Machine Learning" ];