// ─── DATA ────────────────────────────────────────────────────────────────────

export const overviewStats = [
    {
        days: 191,
        label: "Curricular & Extra-curricular Activities",
        colorClass: "text-primary border-primary/20 bg-primary/5",
        barClass: "bg-primary",
    },
    {
        days: 96,
        label: "Weekly Holidays (Fri & Sat)",
        colorClass: "text-secondary-foreground border-secondary/30 bg-secondary/10",
        barClass: "bg-secondary",
    },
    {
        days: 57,
        label: "Government Holidays & Other Activities",
        colorClass: "text-accent-foreground border-accent/30 bg-accent/10",
        barClass: "bg-accent",
    },
    {
        days: 21,
        label: "Half-Yearly & Annual Examinations",
        colorClass: "text-destructive border-destructive/20 bg-destructive/5",
        barClass: "bg-destructive",
    },
] as const;

export type EventType = "exam" | "holiday" | "religious" | "national" | "cultural" | "academic";

export interface CalendarEvent {
    date: string;
    title: string;
    type: EventType;
    campus?: string;
}

export interface Month {
    name: string;
    events: CalendarEvent[];
}

export const months: Month[] = [
    {
        name: "January",
        events: [
            { date: "01 Jan", title: "Book Distribution & Parenting Conference", type: "academic" },
            { date: "04 Jan", title: "Orientation Class", type: "academic" },
            { date: "17 Jan", title: "Pitha Utshob", type: "cultural", campus: "Debhata" },
            { date: "24 Jan", title: "Pitha Utshob", type: "cultural", campus: "Satkhira" },
            { date: "27–29 Jan", title: "Annual Sports", type: "cultural" },
        ],
    },
    {
        name: "February",
        events: [
            { date: "04 Feb", title: "Shab-e-Barat", type: "religious" },
            { date: "11–12 Feb", title: "National Election", type: "national" },
            { date: "19 Feb", title: "1st Ramadan", type: "religious" },
            { date: "21 Feb", title: "International Mother Language Day", type: "national" },
        ],
    },
    {
        name: "March",
        events: [
            { date: "08–26 Mar", title: "Shab-e-Qadar, Ramadan & Eid Vacation", type: "holiday" },
            { date: "29 Mar", title: "Eid Reunion", type: "religious" },
        ],
    },
    {
        name: "April",
        events: [
            { date: "14 Apr", title: "Bengali New Year", type: "national" },
        ],
    },
    {
        name: "May",
        events: [
            { date: "01 May", title: "May Day", type: "national" },
            { date: "19 May", title: "Buddha Purnima", type: "religious" },
            { date: "24 May – 01 Jun", title: "Eid-ul-Adha Vacation", type: "holiday" },
        ],
    },
    {
        name: "June",
        events: [
            { date: "25 Jun", title: "Day of Ashura", type: "religious" },
        ],
    },
    {
        name: "July",
        events: [
            { date: "05–16 Jul", title: "Mid-Term Examination", type: "exam" },
            { date: "27 Jul", title: "Result Publication", type: "academic" },
            { date: "30 Jul", title: "Academic Transcript Distribution", type: "academic" },
        ],
    },
    {
        name: "August",
        events: [
            { date: "01 Aug", title: "Guardian Meeting", type: "academic" },
            { date: "05 Aug", title: "July Mass Uprising Day + Drawing Competition", type: "national" },
            { date: "12 Aug", title: "Akheri Chahar Shomba", type: "religious" },
            { date: "24 Aug", title: "Janmashtami", type: "religious" },
            { date: "25 Aug", title: "Eid-e-Miladunnabi", type: "religious" },
        ],
    },
    {
        name: "September",
        events: [
            { date: "24 Sep", title: "Fateha-e-Yajdaham", type: "religious" },
        ],
    },
    {
        name: "October",
        events: [
            { date: "20–21 Oct", title: "Durga Puja", type: "religious" },
            { date: "27–29 Oct", title: "Cultural Competition", type: "cultural" },
        ],
    },
    {
        name: "November",
        events: [
            { date: "05 Nov", title: "Cultural Presentation", type: "cultural", campus: "Debhata" },
            { date: "06 Nov", title: "Cultural Presentation", type: "cultural", campus: "Satkhira" },
        ],
    },
    {
        name: "December",
        events: [
            { date: "02 Dec", title: "Exam Preparation Day", type: "academic" },
            { date: "03–15 Dec", title: "Annual Exam", type: "exam" },
            { date: "14 Dec", title: "Martyred Intellectuals Day", type: "national" },
            { date: "16 Dec", title: "Victory Day", type: "national" },
            { date: "17–31 Dec", title: "Winter Vacation", type: "holiday" },
            { date: "24 Dec", title: "Result Publication", type: "academic" },
            { date: "25 Dec", title: "Christmas Day", type: "religious" },
            { date: "30 Dec", title: "Academic Transcript Distribution", type: "academic" },
        ],
    },
];

// ─── EVENT TYPE CONFIG ───────────────────────────────────────────────────────

export const eventConfig: Record<EventType, { label: string; dot: string; chip: string }> = {
    exam: {
        label: "Exam",
        dot: "bg-destructive",
        chip: "bg-destructive/10 text-destructive ring-1 ring-destructive/20",
    },
    holiday: {
        label: "Holiday",
        dot: "bg-secondary",
        chip: "bg-secondary/15 text-secondary-foreground ring-1 ring-secondary/25",
    },
    religious: {
        label: "Religious",
        dot: "bg-accent",
        chip: "bg-accent/15 text-accent-foreground ring-1 ring-accent/25",
    },
    national: {
        label: "National",
        dot: "bg-primary",
        chip: "bg-primary/10 text-primary ring-1 ring-primary/20",
    },
    cultural: {
        label: "Cultural",
        dot: "bg-chart-2",
        chip: "bg-chart-2/10 text-chart-2 ring-1 ring-chart-2/20",
    },
    academic: {
        label: "Academic",
        dot: "bg-muted-foreground",
        chip: "bg-muted text-muted-foreground ring-1 ring-border",
    },
};