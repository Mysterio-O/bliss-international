export type ResultData = {
    class: string;
    term: string;
    publishDate: string;
    students: {
        roll: string;
        name: string;
        gpa: string;
        grade: string;
    }[];
};

export type CampusResults = {
    id: string;
    name: string;
    results: ResultData[];
};

export const campusResults: CampusResults[] = [
    {
        id: "satkhira",
        name: "Satkhira Campus",
        results: [
            {
                class: "Class 10",
                term: "Final Term 2025",
                publishDate: "March 15, 2026",
                students: [
                    { roll: "001", name: "Ahmed Hassan", gpa: "5.00", grade: "A+" },
                    { roll: "002", name: "Fatima Rahman", gpa: "5.00", grade: "A+" },
                    { roll: "003", name: "Mohammad Ali", gpa: "4.89", grade: "A+" },
                    { roll: "004", name: "Ayesha Siddique", gpa: "4.75", grade: "A" },
                    { roll: "005", name: "Ibrahim Khan", gpa: "4.50", grade: "A" },
                ],
            },
            {
                class: "Class 9",
                term: "Final Term 2025",
                publishDate: "March 15, 2026",
                students: [
                    { roll: "001", name: "Zainab Ahmed", gpa: "5.00", grade: "A+" },
                    { roll: "002", name: "Yusuf Rahman", gpa: "4.92", grade: "A+" },
                    { roll: "003", name: "Mariam Hossain", gpa: "4.83", grade: "A+" },
                    { roll: "004", name: "Omar Farooq", gpa: "4.67", grade: "A" },
                    { roll: "005", name: "Khadija Begum", gpa: "4.55", grade: "A" },
                ],
            },
            {
                class: "Class 8",
                term: "Final Term 2025",
                publishDate: "March 15, 2026",
                students: [
                    { roll: "001", name: "Safiya Islam", gpa: "5.00", grade: "A+" },
                    { roll: "002", name: "Bilal Ahmed", gpa: "4.95", grade: "A+" },
                    { roll: "003", name: "Hafsa Malik", gpa: "4.78", grade: "A" },
                    { roll: "004", name: "Hamza Khan", gpa: "4.60", grade: "A" },
                    { roll: "005", name: "Amina Sultana", gpa: "4.42", grade: "A-" },
                ],
            },
        ],
    },
    {
        id: "debhata",
        name: "Debhata Campus",
        results: [
            {
                class: "Class 10",
                term: "Final Term 2025",
                publishDate: "March 15, 2026",
                students: [
                    { roll: "001", name: "Rashid Mahmud", gpa: "5.00", grade: "A+" },
                    { roll: "002", name: "Nusrat Jahan", gpa: "4.95", grade: "A+" },
                    { roll: "003", name: "Tariq Aziz", gpa: "4.85", grade: "A+" },
                    { roll: "004", name: "Sana Karim", gpa: "4.70", grade: "A" },
                    { roll: "005", name: "Imran Hossain", gpa: "4.58", grade: "A" },
                ],
            },
            {
                class: "Class 9",
                term: "Final Term 2025",
                publishDate: "March 15, 2026",
                students: [
                    { roll: "001", name: "Layla Hassan", gpa: "5.00", grade: "A+" },
                    { roll: "002", name: "Karim Uddin", gpa: "4.88", grade: "A+" },
                    { roll: "003", name: "Ruqayyah Begum", gpa: "4.80", grade: "A+" },
                    { roll: "004", name: "Salman Ahmed", gpa: "4.65", grade: "A" },
                    { roll: "005", name: "Zahra Sultana", gpa: "4.52", grade: "A" },
                ],
            },
            {
                class: "Class 8",
                term: "Final Term 2025",
                publishDate: "March 15, 2026",
                students: [
                    { roll: "001", name: "Talha Rahman", gpa: "5.00", grade: "A+" },
                    { roll: "002", name: "Maryam Khatun", gpa: "4.90", grade: "A+" },
                    { roll: "003", name: "Usman Ali", gpa: "4.72", grade: "A" },
                    { roll: "004", name: "Aisha Siddiqui", gpa: "4.63", grade: "A" },
                    { roll: "005", name: "Abdullah Khan", gpa: "4.48", grade: "A-" },
                ],
            },
        ],
    },
];
