import {
    BookOpen,
    GraduationCap,
    Library,
    FileText,
    Phone,
    MapPin,
    Mail,
    ExternalLink,
} from "lucide-react";

export interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
}

export interface FooterLinkGroup {
    title: string;
    links: FooterLink[];
}

export interface CampusInfo {
    name: string;
    address: string;
    phone: string;
    emails: string[];
}

export const IMPORTANT_LINKS: FooterLinkGroup = {
    title: "Important Links",
    links: [
        { label: "Jashore Board", href: "https://jessoreboard.gov.bd", external: true },
        { label: "Ministry of Education", href: "https://moedu.gov.bd", external: true },
        { label: "NCTB", href: "https://nctb.gov.bd", external: true },
        { label: "Cambridge University Press", href: "https://www.cambridge.org", external: true },
        { label: "Oxford University Press", href: "https://global.oup.com", external: true },
        { label: "Teachers Portal", href: "https://www.teachers.gov.bd", external: true },
    ],
};

export const USEFUL_LINKS: FooterLinkGroup = {
    title: "Useful Links",
    links: [
        { label: "Admission", href: "/admission" },
        { label: "Admission Procedure", href: "/admission/procedure" },
        { label: "BIA e-Library", href: "/e-library" },
        { label: "Syllabus", href: "/syllabus" },
        { label: "Satkhira Contact", href: "/contact/satkhira" },
        { label: "Debhata Contact", href: "/contact/debhata" },
    ],
};

export const CAMPUSES: CampusInfo[] = [
    {
        name: "Satkhira Campus",
        address: "Kharibila, Bypass Road, Satkhira Sadar, Satkhira-9400",
        phone: "01919888316",
        emails: ["blissiabd@gmail.com", "info@bliss.edu.bd"],
    },
    {
        name: "Debhata Campus",
        address: "Sekendra, Debhata, Satkhira",
        phone: "01926261818",
        emails: ["blissiabd@gmail.com", "info@bliss.edu.bd"],
    },
];

export const FOOTER_META = {
    cambridgeRegNo: "BD000",
    copyright: "© 2025 BLISSIA. All rights reserved.",
    tagline:
        "Nurturing intellect, character, and faith — preparing every student for a purposeful future.",
};