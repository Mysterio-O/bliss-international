

export interface ILatestUpdates {
    id: number;
    title: string;
    description: string;
    date: string;
    file_type: string | null;
    file_url: string | null;
    download_count: number;
    highlight_text: string | null
}


export const latestUpdatesMetadata: ILatestUpdates[] = [
    {
        id: 1,
        title: "Vaccancy announcement, interested and eligible candidates are request to apply,",
        date: "2024-06-01",
        description: "We are excited to announce a new vacancy for the position of School Counselor at Bliss International School. We are looking for a compassionate and dedicated individual to join our team and support the emotional and academic well-being of our students. The ideal candidate will have experience in counseling, strong communication skills, and a passion for helping students thrive. If you are interested and meet the eligibility criteria, we encourage you to apply for this rewarding opportunity to make a positive impact on our school community.",
        file_type: "pdf",
        file_url: "/pdfs/1.pdf",
        download_count: 120,
        highlight_text: "Download the pdf and fill up the form"
    },
    {
        id: 2,
        title: "Inauguration program, Bliss annual sports day 2026, Both campuses",
        date: "2024-06-15",
        description: "We are thrilled to announce the inauguration of our annual sports day program at Bliss International School, which will take place on June 15, 2024. This exciting event will be held simultaneously at both our campuses, bringing together students, staff, and families for a day filled with fun, competition, and community spirit. The sports day will feature a variety of athletic events and activities designed to promote teamwork, physical fitness, and school pride. We look forward to seeing everyone come together to celebrate the joy of sports and camaraderie at Bliss International School.",
        file_type: null,
        file_url: null,
        download_count: 0,
        highlight_text: null
    },
    {
        id: 3,
        title: 'Pitha festival 2026',
        date: "2024-06-20",
        description: "We are delighted to announce the celebration of the Pitha Festival at Bliss International School on June 20, 2024. This vibrant cultural event will showcase the rich traditions and culinary delights associated with the Pitha Festival, a cherished celebration in our community. Students, staff, and families are invited to join us for a day of cultural activities, traditional music, dance performances, and, of course, the delicious variety of pithas that will be available for tasting. The Pitha Festival is a wonderful opportunity for our school community to come together and celebrate our cultural heritage while fostering a sense of unity and joy.",
        file_type: "pdf",
        file_url: "/pdfs/2.pdf",
        download_count: 60,
        highlight_text: "Download pdf for more details about the festival"
    },
    {
        id: 4,
        title: "Class party 2025 arranged by BIA Both campuses",
        date: "2024-06-25",
        description: "We are excited to announce the upcoming Class Party 2025, organized by the Bliss International Association (BIA), which will be held at both campuses of Bliss International School on June 25, 2024. This festive event is designed to bring together students, teachers, and families for an evening of celebration, fun, and community bonding. The Class Party will feature a variety of activities, including games, music, dance, and delicious food, creating a lively and enjoyable atmosphere for all attendees. We encourage everyone to join us in making this event a memorable occasion as we celebrate the spirit of togetherness and school pride at Bliss International School.",
        file_type: null,
        file_url: null,
        download_count: 0,
        highlight_text: null
    },
    {
        id: 5,
        title: 'Cultural program 2025, Both campuses',
        date: "2024-06-30",
        description: "We are thrilled to announce the Cultural Program 2025, which will be held at both campuses of Bliss International School on June 30, 2024. This vibrant event will celebrate the rich diversity and cultural heritage of our school community through a variety of performances, exhibitions, and activities. Students, staff, and families are invited to participate in this exciting program that will feature traditional music, dance, art displays, and culinary delights from different cultures. The Cultural Program is a wonderful opportunity for everyone to come together, learn about different traditions, and celebrate the unique tapestry of cultures that make up our school community at Bliss International School.",
        file_type: null,
        file_url: null,
        download_count: 0,
        highlight_text: null
    }
]