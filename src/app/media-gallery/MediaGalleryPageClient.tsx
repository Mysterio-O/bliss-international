"use client";

import { useState } from "react";
import { campusMedia, mediaCategories } from "./constants";

export default function MediaGalleryPageClient() {
    const [activeCampusId, setActiveCampusId] = useState(campusMedia[0].id);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const activeCampus = campusMedia.find((c) => c.id === activeCampusId)!;

    const filteredMedia = activeCampus.media.filter(
        (item) => selectedCategory === "All" || item.category === selectedCategory
    );

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-3">
                        Media Gallery
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Explore photos and videos from campus events and activities
                    </p>
                </div>

                {/* Campus Tabs */}
                <div className="mb-8 flex justify-center">
                    <div className="inline-flex items-center gap-1 rounded-2xl border border-white/40 bg-white/60 p-1.5 shadow-[0_4px_20px_rgba(43,92,136,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md dark:border-white/10 dark:bg-[rgba(8,18,30,0.6)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]">
                        {campusMedia.map((campus) => (
                            <button
                                key={campus.id}
                                onClick={() => setActiveCampusId(campus.id)}
                                className={`relative rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
                                    activeCampusId === campus.id
                                        ? "bg-primary text-primary-foreground shadow-[0_2px_12px_rgba(43,92,136,0.35)] dark:shadow-[0_2px_12px_rgba(94,143,188,0.4)]"
                                        : "text-foreground/70 hover:bg-white/50 hover:text-foreground dark:hover:bg-white/8"
                                }`}
                            >
                                <span className="flex items-center gap-2">
                                    <LocationPinIcon />
                                    {campus.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Category Filters */}
                <div className="mb-8 flex flex-wrap justify-center gap-2">
                    {mediaCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                                selectedCategory === category
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                <div className="mb-6 text-center text-sm text-muted-foreground">
                    Showing {filteredMedia.length} item{filteredMedia.length !== 1 ? "s" : ""}
                </div>

                {/* Media Grid */}
                {filteredMedia.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredMedia.map((item) => (
                            <div
                                key={item.id}
                                className="group bg-card rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer"
                            >
                                {/* Media Thumbnail */}
                                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                                    {item.type === "video" ? (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <PlayIcon />
                                            </div>
                                        </div>
                                    ) : (
                                        <ImagePlaceholderIcon />
                                    )}

                                    {/* Type Badge */}
                                    <div className="absolute top-3 right-3">
                                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium bg-black/50 text-white backdrop-blur-sm">
                                            {item.type === "video" ? (
                                                <>
                                                    <VideoIcon /> Video
                                                </>
                                            ) : (
                                                <>
                                                    <CameraIcon /> Photo
                                                </>
                                            )}
                                        </span>
                                    </div>
                                </div>

                                {/* Media Info */}
                                <div className="p-5 space-y-3">
                                    <div>
                                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary-foreground border border-secondary/40 mb-2">
                                            {item.category}
                                        </span>
                                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CalendarIcon />
                                        <span>{item.date}</span>
                                    </div>

                                    <p className="text-sm text-foreground/80 leading-relaxed line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">
                            No media items found in this category.
                        </p>
                    </div>
                )}

                {/* Info Box */}
                <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-3">Gallery Information</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>
                                All photos and videos are from official campus events and activities.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>
                                For high-resolution copies or usage permissions, please contact the
                                respective campus office.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>New content is added regularly after major events.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

function LocationPinIcon() {
    return (
        <svg viewBox="0 0 16 16" className="size-3.5" fill="currentColor">
            <path
                fillRule="evenodd"
                d="M8 1.5A4.5 4.5 0 003.5 6c0 2.414 2.066 4.838 3.71 6.393a1.1 1.1 0 001.58 0C10.434 10.838 12.5 8.414 12.5 6A4.5 4.5 0 008 1.5zM1.5 6a6.5 6.5 0 1113 0c0 3.098-2.4 5.849-4.071 7.432a3.1 3.1 0 01-4.458 0C4.3 11.849 1.5 9.098 1.5 6zm6.5-.5a1 1 0 100 2 1 1 0 000-2zM5.5 6.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"
                clipRule="evenodd"
            />
        </svg>
    );
}

function CalendarIcon() {
    return (
        <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
        </svg>
    );
}

function ImagePlaceholderIcon() {
    return (
        <svg className="size-20 text-muted-foreground/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
        </svg>
    );
}

function PlayIcon() {
    return (
        <svg className="size-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
        </svg>
    );
}

function VideoIcon() {
    return (
        <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
    );
}

function CameraIcon() {
    return (
        <svg className="size-3" fill="currentColor" viewBox="0 0 20 20">
            <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
            />
        </svg>
    );
}
