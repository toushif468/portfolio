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
        tools: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
        category: ["React"],
        gitURL: "https://github.com/yourusername/fashion-ecommerce",
        demoLink: "https://your-demo-link.com",
    }, {
        id: 2,
        title: "SymToDoc",
        image: "/Image/SymToDoc.png",
        description: "A React Native mobile application designed to empower users with fast, accessible, and intelligent health insights.",
        tools: ["React Native", "Node.js", "Express"],
        category: ["React Native"],
        gitURL: "https://github.com/yourusername/symtodoc",
        demoLink: "https://your-demo-link.com",
    } , {
        id: 3,
        title: "Roots2Goods",
        image: "/Image/Roots2Goods.png",
        description: "A React Native mobile application designed to empower users with fast, accessible, and intelligent health insights.",
        tools: ["React ", "Node.js", "Express"],
        category: ["React ", "Django"],
        gitURL: "https://github.com/yourusername/root2good",
        demoLink: "https://your-demo-link.com",
    } ,{
        id: 4,
        title: "UIU_PSP",
        image: "/Image/UIU_PSP.png",
        description: "UIU_PSP is a collaborative educational web app designed to help students improve academic performance by engaging in peer-to-peer learning, question sharing, and interactive problem solving.",
        tools: ["React ", "Node.js", "Express"],
        category: ["PHP ", "Django"],
        gitURL: "https://github.com/yourusername/root2good",
        demoLink: "https://your-demo-link.com",
    }
]

export const categories = [ "ALL", "React", "React Native", "Django", "PHP", "Machine Learning" ];