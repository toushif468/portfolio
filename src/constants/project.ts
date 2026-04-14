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
        tools: ["TypeScript", "React", "Tailwind CSS", "Stripe", "MongoDB","Express.js", "Stripe", "Cloudinary", "bcrypt","Toastiy"],
        category: ["Typescript", "React"],
        gitURL: "https://github.com/toushif468/FashionEcommerce",
        demoLink: "https://fashion-ecommerce-frontend-t5zl.onrender.com/",
    }, {
        id: 2,
        title: "SymToDoc",
        image: "/Image/SymToDoc.png",
        description: "A React Native mobile application designed to empower users with fast, accessible, and intelligent health insights.",
        tools: ["React Native","Flask", "scikit-learn", "Node.js", "Express.js", "MongoDB", "Tailwind CSS","TypeScript", "Python"],
        category: ["React Native", "Machine Learning"],
        gitURL: "https://github.com/toushif468/SymToDoc",
        demoLink: "https://expo.dev/accounts/srniloy/projects/sym-to-doc/builds/82c0d854-03f3-4ce2-8252-d22f6a0283d8",
    } , {
        id: 3,
        title: "Roots2Goods",
        image: "/Image/Roots2Goods.png",
        description: "A React Native mobile application designed to empower users with fast, accessible, and intelligent health insights.",
        tools: ["Next.js", "Node.js", "Express.js", "MongoDB", "Google Map API", "Cart.js", "JWT"],
        category: ["Next.js"],
        gitURL: "https://github.com/toushif468/Root2Goods",
        demoLink: "https://roots2goods.vercel.app/",
    } ,{
        id: 4,
        title: "UIU_PSP",
        image: "/Image/UIU_PSP.png",
        description: "UIU_PSP is a collaborative educational web app designed to help students improve academic performance by engaging in peer-to-peer learning, question sharing, and interactive problem solving.",
        tools: ["PHP ", "HTML", "CSS", "MySQL", "Bootstrap", "InfinityFree", "JS"],
        category: ["PHP ", "mysql"],
        gitURL: "https://github.com/yourusername/root2good",
        demoLink: "https://uiu-psp.vercel.app/",
    }, {
        id: 5,
        title: "Finance Management",
        image: "/Image/FinanceManagement.png",
        description: "A sleek, modern web application designed to help users manage their personal finances by tracking daily expenses, logging income, and calculating net balances in real-time.",
        tools: [ "Typescript", "React Vite", "tailwind CSS", "Toastify", "Web Stoarage API"],
        category: ["Typescript", "React"],
        gitURL: "https://github.com/toushif468/expense-tracker",
        demoLink: "https://finance-management-xi-two.vercel.app/",
    }
]

export const categories = [ "ALL", "React", "React Native", "PHP", "Machine Learning" ];