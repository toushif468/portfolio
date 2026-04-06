export interface AwardItem {
    id: number;
    title: string;
    description:string;
    date: string;
    icon: string;
}

export const allAwards: AwardItem[] = [
    {
        id:1,
        title: "Best Developer Award",
        description: "Awarded for outstanding performance and contributions to the development team.",
        date: "2023-12-15",
        icon: "🏆"
    }, {
        id:2,
        title: "Innovation Excellence",
        description: "Recognized for innovative solutions and creative problem-solving in projects.",
        date: "2022-11-10",
        icon: "💡"
    }
]