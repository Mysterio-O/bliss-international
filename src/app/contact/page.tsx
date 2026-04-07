import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
    title: "Contact Us | Bliss International Academy",
    description:
        "Get in touch with Bliss International Academy. Contact details for both Satkhira and Debhata campuses including address, phone, email, and office hours.",
    keywords: [
        "Bliss International Academy",
        "contact",
        "address",
        "phone number",
        "email",
        "Satkhira campus contact",
        "Debhata campus contact",
        "admission inquiry",
    ],
    openGraph: {
        title: "Contact Us | Bliss International Academy",
        description:
            "Reach out to us for admissions, academics, or general inquiries. We're here to help!",
        type: "website",
    },
    alternates: {
        canonical: "https://bliss-international.vercel.app/contact",
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
