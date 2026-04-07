import type { Metadata } from "next";
import MediaGalleryPageClient from "./MediaGalleryPageClient";

export const metadata: Metadata = {
    title: "Media Gallery | Bliss International Academy",
    description:
        "Browse photos and videos from campus events, activities, and daily life at Bliss International Academy across both Satkhira and Debhata campuses.",
    keywords: [
        "Bliss International Academy",
        "media gallery",
        "campus photos",
        "event videos",
        "school activities",
        "campus life",
    ],
    openGraph: {
        title: "Media Gallery | Bliss International Academy",
        description:
            "Explore our collection of photos and videos from campus events and activities.",
        type: "website",
    },
    alternates: {
        canonical: "https://bliss-international.vercel.app/media-gallery",
    },
};

export default function MediaGalleryPage() {
    return <MediaGalleryPageClient />;
}
