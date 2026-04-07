export type ContactInfo = {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string[];
    officeHours: string;
    otherCampusName: string;
};

export const campusContacts: ContactInfo[] = [
    {
        id: "satkhira",
        name: "Satkhira Campus",
        address: "Kharibila, Bypass Road, Satkhira Sadar, Satkhira-9400",
        phone: "01919888316",
        email: ["info@bliss.edu.bd", "career@bliss.edu.bd"],
        officeHours: "Sunday–Thursday, 8 AM – 2 PM",
        otherCampusName: "Debhata Campus",
    },
    {
        id: "debhata",
        name: "Debhata Campus",
        address: "Sekendra, Debhata, Satkhira",
        phone: "01926261818",
        email: ["info@bliss.edu.bd", "career@bliss.edu.bd"],
        officeHours: "Sunday–Thursday, 8 AM – 2 PM",
        otherCampusName: "Satkhira Campus",
    },
];

export const subjects = [
    "Admission Inquiry",
    "Academic Information",
    "Fee Structure",
    "Scholarship Information",
    "General Inquiry",
    "Complaint/Feedback",
    "Other",
];
