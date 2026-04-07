export interface AwardItem {
    id: number;
    image: string;
    title: string;
    description:string;
    date: string;
    
}

export const allAwards: AwardItem[] = [
    {
        id:1,
        image: "/Image/fydp.jpeg",
        title: "Award giving of Achievement for becoming 1st Runner Up in FYDP-I Category",
        description: "CSE Porject Show.",
        date: "2024-12-15"
       
    }, {
        id:2,
        image: "/Image/SmartParkManagementSystem.jpg",
        title: "Smart Park Management System",
        description: "Recognized for innovative solutions and creative problem-solving in projects.",
        date: "2023-21-12"
       
    }, {
        id:3,
        image: "/Image/SmartAutomatedExamHall.jpg",
        title: "Smart Automated Exam Hall",
        description: "Recognized for innovative solutions and creative problem-solving in projects.",
        date: "2022-11-9"
       
    }
]