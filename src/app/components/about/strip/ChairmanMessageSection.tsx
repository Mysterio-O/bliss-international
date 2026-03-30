
import { Language, LanguageProps } from "@/app/types/about/types";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ChairmanMessage {
    label: string;
    title: string;
    message: string;
    name: string;
    designation: string;
}

const chairmanContent: Record<Language, ChairmanMessage> = {
    en: {
        label: "Message from Chairman",
        title: "A Vision for Excellence",
        message: "There is no alternative way in building a nation without good education. We believe that the government and the people have a great responsibility to ensure the basic right of education to develop a country like ours. We have established Bliss International Academy as the lighthouse for good education to supply the future leaders of Satkhira, a leading district of the country as well as for the whole country.\n\nI think Bliss International Academy's world-class educational infrastructure and the qualified teachers of the country will be able to fulfill the aspirations of the people of Satkhira. At the same time, I believe that the appropriate curriculum of this school will help us to develop our children as good citizens with high moral values in order to uphold the religious values of the majority.\n\nAlthough we have started this year on a small scale, we do have a plan to expand this educational institution in a big way in the near future. We dream, one day this small Bliss will lead the largest educational family of South Bengal centering here. Students from home and abroad will rush to study here. A dream of successful representation of the students for all the communities will be served from this academy. We are optimistic that this bliss will be the supplying centre of renowned teachers for focusing the national and international arena inshaAllah.",
        name: "Md. Abu Hasan",
        designation: "Chairman\nBliss International Academy",
    },
    bn: {
        label: "চেয়ারম্যানের বাণী",
        title: "শ্রেষ্ঠত্বের দৃষ্টিভঙ্গি",
        message: "শিক্ষা ছাড়া জাতি গঠনের কোনো বিকল্প নেই। আমরা বিশ্বাস করি যে, সরকার ও জনগণের একটি বড় দায়িত্ব রয়েছে আমাদের মতো দেশের উন্নয়নে শিক্ষার মৌলিক অধিকার নিশ্চিত করার। আমরা ব্লিস ইন্টারন্যাশনাল একাডেমি প্রতিষ্ঠা করেছি সাতক্ষীরা জেলাসহ সমগ্র দেশের ভবিষ্যৎ নেতৃত্ব তৈরির জন্য একটি আলোকবর্তিকা হিসেবে।\n\nআমি মনে করি, ব্লিস ইন্টারন্যাশনাল একাডেমির বিশ্বমানের শিক্ষা অবকাঠামো এবং দেশের যোগ্য শিক্ষকবৃন্দ সাতক্ষীরাবাসীর আকাঙ্ক্ষা পূরণ করতে সক্ষম হবে। একই সাথে আমি বিশ্বাস করি যে, এই প্রতিষ্ঠানের উপযুক্ত পাঠ্যক্রম আমাদের সন্তানদের উচ্চ নৈতিক মূল্যবোধসম্পন্ন সুনাগরিক হিসেবে গড়ে তুলতে সাহায্য করবে এবং সংখ্যাগরিষ্ঠের ধর্মীয় মূল্যবোধকে সমুন্নত রাখবে।\n\nযদিও আমরা এ বছর ছোট আকারে যাত্রা শুরু করেছি, তবুও আমাদের পরিকল্পনা রয়েছে আগামীতে এই শিক্ষা প্রতিষ্ঠানকে বড় আকারে সম্প্রসারিত করার। আমরা স্বপ্ন দেখি, একদিন এই ছোট ব্লিস দক্ষিণবঙ্গের সর্ববৃহৎ শিক্ষা পরিবারের কেন্দ্রবিন্দু হয়ে উঠবে। দেশ-বিদেশ থেকে শিক্ষার্থীরা এখানে পড়তে আসবে। সকল সম্প্রদায়ের শিক্ষার্থীদের সফল প্রতিনিধিত্বের স্বপ্ন এই একাডেমি থেকে পূরণ হবে। আমরা আশাবাদী যে, ইনশাআল্লাহ এই ব্লিস জাতীয় ও আন্তর্জাতিক অঙ্গনে খ্যাতিমান শিক্ষক সরবরাহের কেন্দ্র হয়ে উঠবে।",
        name: "মোঃ আবু হাসান",
        designation: "চেয়ারম্যান\nব্লিস ইন্টারন্যাশনাল একাডেমি",
    },
    ar: {
        label: "رسالة من الرئيس",
        title: "رؤية للتميز",
        message: "لا بديل عن بناء الأمة بدون تعليم جيد. نحن نؤمن بأن الحكومة والشعب لديهما مسؤولية كبيرة لضمان الحق الأساسي في التعليم لتطوير بلد مثل بلدنا. لقد أنشأنا بليس إنترناشيونال أكاديمي كمنارة للتعليم الجيد لتزويد قادة المستقبل لساتخيرا، وهي منطقة رائدة في البلاد وكذلك للبلد بأكمله.\n\nأعتقد أن البنية التحتية التعليمية العالمية المستوى لأكاديمية بليس الدولية والمعلمين المؤهلين في البلاد سيكونون قادرين على تحقيق تطلعات أهالي ساتخيرا. وفي الوقت نفسه، أؤمن بأن المنهج المناسب لهذه المدرسة سيساعدنا على تنمية أطفالنا كمواطنين صالحين ذوي قيم أخلاقية عالية للحفاظ على القيم الدينية للأغلبية.\n\nعلى الرغم من أننا بدأنا هذا العام على نطاق صغير، إلا أن لدينا خطة لتوسيع هذه المؤسسة التعليمية بشكل كبير في المستقبل القريب. نحن نحلم بأن يصبح هذا البليس الصغير يومًا ما قائدًا لأكبر عائلة تعليمية في جنوب البنغال. سيهرع الطلاب من الداخل والخارج للدراسة هنا. سيتم تحقيق حلم التمثيل الناجح للطلاب من جميع المجتمعات من هذه الأكاديمية. نحن متفائلون بأن هذا البليس سيكون مركز توريد المعلمين المشهورين للتركيز على الساحة الوطنية والدولية إن شاء الله.",
        name: "محمد أبو حسن",
        designation: "الرئيس\nبليس إنترناشيونال أكاديمي",
    },
};

export default function ChairmanMessageSection({ language }: LanguageProps) {
    const c = chairmanContent[language];

    return (
        <section className="py-8 bg-[var(--background)]" aria-label="Chairman Message">
            <div className="container mx-auto px-4 md:px-8 max-w-6xl">
                {/* Section label */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-10 bg-[var(--secondary)]" />
                    <span className="text-[var(--secondary)] text-xs font-bold tracking-[0.2em] uppercase">
                        {c.label}
                    </span>
                    <div className="h-px w-10 bg-[var(--secondary)]" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Image Column */}
                    <div className={cn(
                        "lg:col-span-5",
                        language === "ar" ? "lg:order-2" : "lg:order-1"
                    )}>
                        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-square">
                            <Image
                                src="/md/managing-director.jpg"
                                alt="Md. Abu Hasan - Chairman of Bliss International Academy"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                            {/* Name overlay on mobile */}
                            <div className="absolute bottom-6 left-6 right-6 lg:hidden">
                                <div className="text-white">
                                    <p className="font-bold text-xl">{c.name}</p>
                                    <p className="text-sm opacity-90 whitespace-pre-line">{c.designation}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Message Column */}
                    <div className={cn(
                        "lg:col-span-7 space-y-8",
                        language === "ar" ? "lg:order-1" : "lg:order-2"
                    )}>
                        <h2
                            className={cn(
                                "text-3xl md:text-4xl font-extrabold text-[var(--foreground)] leading-snug",
                                language === "ar" ? "text-right" : ""
                            )}
                            dir={language === "ar" ? "rtl" : "ltr"}
                        >
                            {c.title}
                        </h2>

                        <div
                            className={cn(
                                "text-[var(--muted-foreground)] text-base md:text-lg leading-relaxed whitespace-pre-line",
                                language === "ar" ? "text-right" : "",
                                language === "bn" ? "leading-[1.85]" : "leading-[1.75]"
                            )}
                            dir={language === "ar" ? "rtl" : "ltr"}
                        >
                            {c.message}
                        </div>

                        {/* Signature - Desktop only */}
                        <div className={cn(
                            "hidden lg:block pt-6 border-t border-[var(--border)]",
                            language === "ar" ? "text-right" : ""
                        )}>
                            <p className="font-bold text-xl text-[var(--foreground)]">{c.name}</p>
                            <p className="text-[var(--muted-foreground)] whitespace-pre-line text-sm">
                                {c.designation}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}