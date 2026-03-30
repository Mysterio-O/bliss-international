"use client";

import { useState } from "react";
import { Language, LanguageProps } from "@/app/types/about/types";
import MessageCard from "./MessageCard";
import { cn } from "@/lib/utils";

type LeadershipMessagesProps = LanguageProps;

const messages = {
    en: {
        chairman: {
            label: "Message from Chairman",
            title: "A Vision for Excellence",
            message: `There is no alternative way in building a nation without good education.We believe that the government and the people have a great responsibility to ensure the basic right of education to develop a country like ours. \n\n We have established Bliss International Academy as the light house for good education to supply the future leaders of Satkhira, a leading district of the country as well as for the whole country. \n\nI think Bliss International Academy's world-class educational infrastructure and the qualified teachers of the country will be able to fulfill the aspirations of the people of Satkhira. At the same time, I believe that the appropriate curriculum of this school will help us to develop our children as good citizens with high moral values ​​in order to uphold the religious values ​​of the majority. \n\nAlthough we have started this year on a small scale, we do have a plan to expand this educational institution in a big way in near future. \n\nWe dream, one day this small Bliss will lead the largest educational family of South Bengal centering here. Students from home and abroad will rush to study here. A dream of successful representation of the students for all the communities will be served from this academy. \n\nWe are optimistic that this bliss will be the supplying centre of renowned teachers for focusing the national and international arena inshaAllah.
 `,
            name: "Md. Abu Hasan",
            designation: "Chairman\nBliss International Academy",
            image: "/md/managing-director.jpg",
        },
        principal: {
            label: "Message from Academic Chief",
            title: "Welcome Message",
            message: "It is my great pleasure to warmly welcome you to Bliss International Academy, an institution committed to academic excellence, moral integrity, and holistic student development. At Bliss, we believe that education is not only about acquiring knowledge, but also about nurturing character, discipline, and a strong sense of responsibility toward society.\n\nOur academic framework is designed to inspire critical thinking, creativity, and lifelong learning while upholding ethical and moral values. We strive to create a supportive and inclusive learning environment where students are encouraged to explore their potential, develop confidence, and prepare themselves to meet the challenges of the modern world with wisdom and integrity.\n\nWith a dedicated team of qualified educators, a well structured curriculum, and a learner centered approach, Bliss International Academy aims to empower students to excel academically and grow as responsible global citizens grounded in strong moral values.\n\nWe look forward to working closely with parents, guardians, and the wider community to ensure the best educational experience for our students. Together, let us build a future based on knowledge, values, and excellence.\n\nThank you for being a part of the Bliss International Academy family.",
            name: "Dr. Md. Abdur Rahim",
            designation: "PhD (RU)\nMA (Thesis), Arabic, RU, First Class First & All Faculties First\nGold Medallist (Three Times)\nBA (Hons), First Class First & Arts Faculty First\nResearcher, Writer & Academician",
            image: undefined, // No image → uses avatar
        },
    },
    bn: {
        chairman: { /* Bengali translation - you can add later */
            label: "চেয়ারম্যানের বাণী",
            title: "শ্রেষ্ঠত্বের দৃষ্টিভঙ্গি",
            message: "একটি জাতি গঠনের ক্ষেত্রে মানসম্মত শিক্ষার কোনো বিকল্প নেই। আমরা বিশ্বাস করি, আমাদের মতো একটি দেশকে উন্নত করতে শিক্ষার মৌলিক অধিকার নিশ্চিত করা সরকার ও জনগণের একটি বড় দায়িত্ব। \n\nসাতক্ষীরা, যা দেশের একটি গুরুত্বপূর্ণ জেলা, সেই জেলার ভবিষ্যৎ নেতৃত্ব গড়ে তোলার পাশাপাশি সমগ্র দেশের জন্য যোগ্য নাগরিক তৈরি করার লক্ষ্যে আমরা ব্লিস ইন্টারন্যাশনাল একাডেমি প্রতিষ্ঠা করেছি একটি আলোকবর্তিকা হিসেবে। \n\nআমি মনে করি, ব্লিস ইন্টারন্যাশনাল একাডেমির বিশ্বমানের শিক্ষাব্যবস্থা এবং দেশের দক্ষ শিক্ষকমণ্ডলী সাতক্ষীরার মানুষের প্রত্যাশা পূরণ করতে সক্ষম হবে। একই সাথে, আমি বিশ্বাস করি এই প্রতিষ্ঠানের উপযুক্ত পাঠ্যক্রম আমাদের সন্তানদের উচ্চ নৈতিক মূল্যবোধসম্পন্ন সুনাগরিক হিসেবে গড়ে তুলতে সহায়তা করবে, যারা সংখ্যাগরিষ্ঠ জনগোষ্ঠীর ধর্মীয় মূল্যবোধকে সম্মান ও ধারণ করবে। \n\nযদিও আমরা এ বছর ছোট পরিসরে যাত্রা শুরু করেছি, তবুও অদূর ভবিষ্যতে এই প্রতিষ্ঠানকে বৃহৎ পরিসরে সম্প্রসারণের পরিকল্পনা আমাদের রয়েছে। \n\nআমাদের স্বপ্ন—একদিন এই ছোট্ট ব্লিস এখান থেকেই দক্ষিণ বঙ্গের সর্ববৃহৎ শিক্ষা পরিবারে রূপ নেবে। দেশ-বিদেশ থেকে শিক্ষার্থীরা এখানে পড়াশোনা করতে আসবে। সকল সম্প্রদায়ের শিক্ষার্থীদের সফল প্রতিনিধিত্বের একটি অনন্য উদাহরণ স্থাপন করবে এই প্রতিষ্ঠান। \n\nআমরা আশাবাদী যে, ইনশাআল্লাহ, এই ব্লিস একদিন জাতীয় ও আন্তর্জাতিক অঙ্গনে খ্যাতিমান শিক্ষকদের গড়ে তোলার একটি গুরুত্বপূর্ণ কেন্দ্র হয়ে উঠবে।",
            name: "মোঃ আবু হাসান",
            designation: "চেয়ারম্যান\nব্লিস ইন্টারন্যাশনাল একাডেমি",
            image: "/md/managing-director.jpg",
        },
        principal: {
            label: "একাডেমিক প্রধানের বার্তা",
            title: "স্বাগত বাণী",
            message: "ব্লিস ইন্টারন্যাশনাল একাডেমিতে আপনাকে আন্তরিকভাবে স্বাগত জানাতে পেরে আমি অত্যন্ত আনন্দিত। এটি এমন একটি প্রতিষ্ঠান, যা একাডেমিক উৎকর্ষতা, নৈতিক সততা এবং শিক্ষার্থীদের সার্বিক বিকাশে প্রতিশ্রুতিবদ্ধ। \n\nব্লিসে আমরা বিশ্বাস করি, শিক্ষা কেবল জ্ঞান অর্জনের মধ্যে সীমাবদ্ধ নয়; বরং এটি চরিত্র গঠন, শৃঙ্খলা এবং সমাজের প্রতি দায়িত্ববোধ জাগ্রত করার একটি প্রক্রিয়া। \n\nআমাদের একাডেমিক কাঠামো এমনভাবে পরিকল্পিত, যা সমালোচনামূলক চিন্তাভাবনা, সৃজনশীলতা এবং আজীবন শিক্ষার প্রতি আগ্রহ সৃষ্টি করে, একই সঙ্গে নৈতিক ও মানবিক মূল্যবোধ বজায় রাখে। আমরা একটি সহায়ক ও অন্তর্ভুক্তিমূলক শিক্ষার পরিবেশ গড়ে তুলতে সচেষ্ট, যেখানে শিক্ষার্থীরা তাদের সম্ভাবনা অন্বেষণ করতে, আত্মবিশ্বাস গড়ে তুলতে এবং জ্ঞান ও সততার সাথে আধুনিক বিশ্বের চ্যালেঞ্জ মোকাবিলার জন্য প্রস্তুত হতে পারে। \n\nদক্ষ ও অভিজ্ঞ শিক্ষকমণ্ডলী, সুসংগঠিত পাঠ্যক্রম এবং শিক্ষার্থী-কেন্দ্রিক পদ্ধতির মাধ্যমে ব্লিস ইন্টারন্যাশনাল একাডেমি শিক্ষার্থীদের একাডেমিকভাবে সফল হতে এবং দৃঢ় নৈতিক মূল্যবোধে গড়ে ওঠা দায়িত্বশীল বৈশ্বিক নাগরিক হিসেবে বিকশিত করতে প্রতিশ্রুতিবদ্ধ। \n\nআমরা অভিভাবক, অভিভাবক প্রতিনিধি এবং বৃহত্তর সমাজের সাথে ঘনিষ্ঠভাবে কাজ করার প্রত্যাশা রাখি, যাতে আমাদের শিক্ষার্থীদের জন্য সর্বোত্তম শিক্ষার পরিবেশ নিশ্চিত করা যায়। \n\nআসুন, আমরা সবাই মিলে জ্ঞান, মূল্যবোধ এবং উৎকর্ষতার ভিত্তিতে একটি উজ্জ্বল ভবিষ্যৎ গড়ে তুলি। \n\nব্লিস ইন্টারন্যাশনাল একাডেমি পরিবারের অংশ হওয়ার জন্য আপনাকে ধন্যবাদ।",
            name: "ড. মোঃ আব্দুর রহিম",
            designation: "পিএইচডি (রাবি)\nএমএ (থিসিস), আরবি, রাবি, প্রথম শ্রেণি প্রথম ও সকল অনুষদ প্রথম\nগোল্ড মেডেলিস্ট (তিনবার)\nবিএ (অনার্স), প্রথম শ্রেণি প্রথম ও আর্টস অনুষদ প্রথম\nগবেষক, লেখক ও শিক্ষাবিদ",
            image: undefined,
        },
    },
    ar: {
        chairman: { /* Arabic translation */
            label: "رسالة من الرئيس",
            title: "رؤية للتميز",
            message: `لا يوجد بديل لبناء أمة دون تعليم جيد. نحن نؤمن أن على الحكومة والشعب مسؤولية كبيرة في ضمان الحق الأساسي في التعليم لتطوير بلد مثل بلدنا.

لقد أسسنا أكاديمية بليس الدولية كمنارة للتعليم الجيد، بهدف إعداد قادة المستقبل في ساتخيرا، وهي إحدى المناطق الرائدة في البلاد، وكذلك لخدمة الوطن بأكمله.

أعتقد أن البنية التحتية التعليمية ذات المستوى العالمي في أكاديمية بليس الدولية، إلى جانب الكادر التعليمي المؤهل في البلاد، ستكون قادرة على تلبية تطلعات أهل ساتخيرا. وفي الوقت نفسه، أؤمن بأن المنهج الدراسي المناسب في هذه المؤسسة سيساعدنا على تنشئة أبنائنا كمواطنين صالحين يتمتعون بقيم أخلاقية عالية، مع الحفاظ على القيم الدينية للأغلبية.

على الرغم من أننا بدأنا هذا العام على نطاق صغير، إلا أن لدينا خطة لتوسيع هذه المؤسسة التعليمية بشكل كبير في المستقبل القريب.

نحلم بأنه في يوم من الأيام، ستقود هذه الأكاديمية الصغيرة أكبر عائلة تعليمية في جنوب البنغال من هذا المكان. وسيتوافد الطلاب من داخل البلاد وخارجها للدراسة هنا. وستكون هذه الأكاديمية نموذجًا ناجحًا لتمثيل جميع فئات المجتمع.

ونحن متفائلون بأن هذه المؤسسة، بإذن الله، ستصبح مركزًا لتخريج معلمين متميزين يساهمون في الساحة الوطنية والدولية.`,
            name: "محمد أبو حسن",
            designation: "الرئيس\nبليس إنترناشيونال أكاديمي",
            image: "/md/managing-director.jpg",
        },
        principal: {
            label: "رسالة من الرئيس الأكاديمي",
            title: "رسالة ترحيبية",
            message: "يسعدني جداً أن أرحب بكم في أكاديمية بليس الدولية... (full ar translation)",
            name: "د. محمد عبد الرحيم",
            designation: `يسعدني كثيرًا أن أرحب بكم ترحيبًا حارًا في أكاديمية بليس الدولية، وهي مؤسسة ملتزمة بالتميز الأكاديمي، والنزاهة الأخلاقية، والتنمية الشاملة للطلاب.

في بليس، نؤمن أن التعليم لا يقتصر على اكتساب المعرفة فحسب، بل يشمل أيضًا تنمية الشخصية، والانضباط، وتعزيز الشعور بالمسؤولية تجاه المجتمع.

تم تصميم إطارنا الأكاديمي لتحفيز التفكير النقدي، والإبداع، والتعلم مدى الحياة، مع الحفاظ على القيم الأخلاقية والإنسانية. ونسعى إلى توفير بيئة تعليمية داعمة وشاملة تشجع الطلاب على استكشاف قدراتهم، وتنمية ثقتهم بأنفسهم، والاستعداد لمواجهة تحديات العالم الحديث بالحكمة والنزاهة.

ومن خلال فريق من المعلمين المؤهلين، ومنهج دراسي منظم، ونهج يركز على المتعلم، تهدف أكاديمية بليس الدولية إلى تمكين الطلاب من التفوق أكاديميًا والنمو كمواطنين عالميين مسؤولين، يرتكزون على قيم أخلاقية راسخة.

ونتطلع إلى العمل عن كثب مع أولياء الأمور والمجتمع لضمان أفضل تجربة تعليمية لطلابنا.

معًا، دعونا نبني مستقبلًا قائمًا على المعرفة والقيم والتميز.

شكرًا لكونكم جزءًا من عائلة أكاديمية بليس الدولية.`,
            image: undefined,
        },
    },
};

export default function LeadershipMessages({ language }: LeadershipMessagesProps) {
    const [activeTab, setActiveTab] = useState<"chairman" | "principal">("chairman");

    const currentMsg = messages[language][activeTab];

    const tabs = [
        { id: "chairman" as const, label: language === "en" ? "Chairman" : language === "bn" ? "চেয়ারম্যান" : "الرئيس" },
        { id: "principal" as const, label: language === "en" ? "Academic Chief" : language === "bn" ? "একাডেমিক প্রধান" : "المدير الأكاديمي" },
    ];

    return (
        <section className="py-8 bg-[var(--background)]" aria-label="Leadership Messages">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                {/* Tab Buttons */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex bg-[var(--card)] border border-[var(--border)] rounded-full p-1">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={cn(
                                    "px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200",
                                    activeTab === tab.id
                                        ? "bg-[var(--primary)] text-white shadow"
                                        : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                                )}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Message Card */}
                <MessageCard
                    label={currentMsg.label}
                    title={currentMsg.title}
                    message={currentMsg.message}
                    name={currentMsg.name}
                    designation={currentMsg.designation}
                    imageSrc={currentMsg.image}
                    language={language}
                />
            </div>
        </section>
    );
}