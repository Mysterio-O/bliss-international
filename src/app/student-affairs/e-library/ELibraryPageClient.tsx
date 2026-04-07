"use client";

import { useState } from "react";
import { campusLibraries, categories } from "./constants";

export default function ELibraryPageClient() {
    const [activeCampusId, setActiveCampusId] = useState(campusLibraries[0].id);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const activeCampus = campusLibraries.find((c) => c.id === activeCampusId)!;

    const filteredBooks = activeCampus.books.filter((book) => {
        const matchesCategory =
            selectedCategory === "All" || book.category === selectedCategory;
        const matchesSearch =
            searchQuery === "" ||
            book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-background py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-3">
                        BIA E-Library
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Access our digital collection of books and educational resources
                    </p>
                </div>

                {/* Campus Tabs */}
                <div className="mb-8 flex justify-center">
                    <div className="inline-flex items-center gap-1 rounded-2xl border border-white/40 bg-white/60 p-1.5 shadow-[0_4px_20px_rgba(43,92,136,0.1),inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md dark:border-white/10 dark:bg-[rgba(8,18,30,0.6)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)]">
                        {campusLibraries.map((campus) => (
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

                {/* Search Bar */}
                <div className="mb-6 max-w-2xl mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by title or author..."
                            className="w-full px-4 py-3 pl-11 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                        <SearchIcon />
                    </div>
                </div>

                {/* Category Filters */}
                <div className="mb-8 flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
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
                    Showing {filteredBooks.length} book{filteredBooks.length !== 1 ? "s" : ""}
                </div>

                {/* Books Grid */}
                {filteredBooks.length > 0 ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filteredBooks.map((book) => (
                            <div
                                key={book.id}
                                className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02]"
                            >
                                <div className="p-6 space-y-4">
                                    {/* Book Header */}
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-2">
                                                {book.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                by {book.author}
                                            </p>
                                        </div>
                                        <BookIcon />
                                    </div>

                                    {/* Category Badge */}
                                    <div>
                                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary-foreground border border-secondary/40">
                                            {book.category}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-foreground/80 leading-relaxed line-clamp-3">
                                        {book.description}
                                    </p>

                                    {/* Publication Info */}
                                    {book.publisher && (
                                        <div className="text-xs text-muted-foreground">
                                            {book.publisher} • {book.year}
                                        </div>
                                    )}

                                    {/* Availability & Action */}
                                    <div className="pt-4 border-t border-border flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div
                                                className={`w-2 h-2 rounded-full ${
                                                    book.available ? "bg-secondary" : "bg-destructive"
                                                }`}
                                            />
                                            <span className="text-xs text-muted-foreground">
                                                {book.available ? "Available" : "Checked Out"}
                                            </span>
                                        </div>
                                        <button
                                            className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                                book.available
                                                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                                                    : "bg-muted text-muted-foreground cursor-not-allowed"
                                            }`}
                                            disabled={!book.available}
                                        >
                                            {book.available ? "Borrow" : "Unavailable"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">
                            No books found matching your search criteria.
                        </p>
                    </div>
                )}

                {/* Info Box */}
                <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-3">Library Information</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>
                                Students can borrow up to 3 books at a time for a period of 14 days.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Digital versions of select books are available for online reading.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Library hours: Sunday to Thursday, 8:00 AM - 2:00 PM.</span>
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

function SearchIcon() {
    return (
        <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
        </svg>
    );
}

function BookIcon() {
    return (
        <svg className="size-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
        </svg>
    );
}
