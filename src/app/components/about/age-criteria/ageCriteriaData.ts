import { Language } from "@/app/types/about/types";

export interface AgeCriteriaItem {
    title: string;
    ageRange: string;
    description: string;
}

export interface AgeCriteriaData {
    heading: string;
    subheading: string;
    criteria: AgeCriteriaItem[];
}

export const ageCriteriaData: Record<Language, AgeCriteriaData> = {
    en: {
        heading: "Age Criteria & Curriculum",
        subheading: "Structured Learning Pathways for Every Stage",
        criteria: [
            {
                title: "Pre-Play",
                ageRange: "3 - 3.5 years",
                description:
                    "For children aged 3 to 3.5 years. At this level children are taught alphabets and counting (English, Bengali and Arabic). Rhymes, songs & drawing are also taught through fun activities. In addition, daily essential dua and manners are taught.",
            },
            {
                title: "Play",
                ageRange: "4 years",
                description:
                    "For children aged 4 years. At this level children are taught the alphabet and number writing (English, Bengali and Arabic). Rhyme, song, drawing are also taught through fun activities. In addition, daily essential Duas, Surahs and etiquette are taught.",
            },
            {
                title: "Nursery",
                ageRange: "4 - 5 years",
                description:
                    "For children aged 4 to 5 years. At this level the children are imparted Word making (Arabic, English and Bengali), Counting up to 100 both in English and Bengali, 50 in Arabic along with Surah, Hadith, Dua, Rhymes, Songs and Drawing.",
            },
            {
                title: "Kindergarten (KG)",
                ageRange: "5 - 6 years",
                description:
                    "For children aged 5 to 6 years. At this level the children follow a general curriculum, which comprised Reading, Writing, Making sentence, Bengali, Basic Mathematics, Science, Arabic and Art as well as speaking.",
            },
            {
                title: "Class One to Upper Class",
                ageRange: "6+ years",
                description:
                    "Children at this stage are given a good grounding in Science, Arabic, Quran, Hadith, Dua, Computer and General knowledge along with National Curriculum.",
            },
            {
                title: "Pre-Hifz & Hifz",
                ageRange: "All ages",
                description:
                    "At this level the children are imparted Tazvid, Kaida, Ampara, Nazera, Hifzul Quran and Tasmilul Quran along with modern teaching under the supervision of some professional and experienced Quran-e-Hafez trained on Nurani.",
            },
        ],
    },
    bn: {
        heading: "বয়স অনুযায়ী শিক্ষার ধাপ",
        subheading: "প্রতিটি স্তরে কাঠামোবদ্ধ শিক্ষণ পথ",
        criteria: [
            {
                title: "প্রি-প্রে",
                ageRange: "৩ - ৩.৫ বছর",
                description:
                    "এটি ৩ থেকে ৩.৫ বছর বয়সী শিশুদের জন্য। এ স্তরে শিশুদের অনুপম আনন্দদায়ী কার্যক্রমের মাধ্যমে বর্ণমালা ও সংখ্যা গণনা (ইংরেজি, বাংলা ও আরবি) এবং ছড়া, গান ও ছবি আঁকা শেখানো হয়। এ ছাড়া প্রয়োজনীয় দৈনন্দিন ব্যবহারিক দোয়া ও শিষ্টাচার শেখানো হয়।",
            },
            {
                title: "প্রে",
                ageRange: "৪ বছর",
                description:
                    "এটি ৪ বছর বয়সী শিশুদের জন্য। এ স্তরে শিশুদের আনন্দপূর্ণ কার্যক্রমের মাধ্যমে বর্ণমালা ও সংখ্যা গণনা (ইংরেজি, বাংলা ও আরবি) ছড়া, গান ও ছবি আঁকা শেখানো হয়। এ ছাড়াও প্রয়োজনীয় দৈনন্দিন ব্যবহারিক দোয়া ও শিষ্টাচার শেখানো হয়।",
            },
            {
                title: "নার্সারি",
                ageRange: "৪ - ৫ বছর",
                description:
                    "এটি ৪-৫ বছর বয়সী শিশুদের জন্য। এ স্তরে শিশুদের শব্দ গঠন (আরবি, ইংরেজি ও বাংলা), ১০০ পর্যন্ত সংখ্যা গণনা এবং ৫০ পর্যন্ত আরবিতে সংখ্যা গণনা শেখানো হয়। পাশাপাশি সূরা, হাদিস, দোয়া, ছড়া, গান ও ছবি আঁকা শেখানো হয়।",
            },
            {
                title: "কে.জি.",
                ageRange: "৫ - ৬ বছর",
                description:
                    "এটি ৫-৬ বছর বয়সী শিশুদের জন্য। এ স্তরে শিশুদের সাধারণ পাঠ্যক্রম অনুসরণ করা হয়। এতে রয়েছে পাঠাভ্যাস গড়ে তোলা, লেখা, বাক্য গঠন, বাংলা, প্রাথমিক গণিত, বিজ্ঞান, আরবি, শিল্পকলা, কোরআন, হাদিস, দোয়া, ছড়া, গান ও বক্তব্য শেখানো হয়।",
            },
            {
                title: "প্রথম শ্রেণি থেকে উচ্চতর শ্রেণি",
                ageRange: "৬+ বছর",
                description:
                    "এ স্তরে শিশুদের জাতীয় পাঠ্যক্রম এবং পাশাপাশি আরবি, কোরআন, হাদিস, দোয়া, কম্পিউটার ও সাধারণ জ্ঞান পড়ানো হয়।",
            },
            {
                title: "প্রি হিফজ ও হিফজ",
                ageRange: "সব বয়সের শিক্ষার্থী",
                description:
                    "এ স্তরে শিশুদের তাজবীদ, কায়দা, আমপারা, নজেরা, হিফজুল কোরআন এবং তাসমিল কোরআন আধুনিক শিক্ষণ পদ্ধতির মাধ্যমে অভিজ্ঞ কোরআনে হাফেজ শিক্ষকদের তত্ত্বাবধানে শেখানো হয়।",
            },
        ],
    },
    ar: {
        heading: "معايير السن والمناهج الدراسية",
        subheading: "مسارات تعليمية منظمة لكل مرحلة",
        criteria: [
            {
                title: "ما قبل اللعب (Pre-Play)",
                ageRange: "3 - 3.5 سنوات",
                description:
                    "للأطفال الذين تتراوح أعمارهم بين 3 و 3.5 سنوات. في هذا المستوى، يتم تعليم الأطفال الحروف والعد (باللغات الإنجليزية والبنغالية والعربية). كما يتم تعليمهم الأغاني والرسم من خلال الأنشطة الممتعة. بالإضافة إلى ذلك، يتم تعليمهم الدعاء اليومي والأخلاق الحسنة.",
            },
            {
                title: "اللعب (Play)",
                ageRange: "4 سنوات",
                description:
                    "للأطفال الذين تبلغ أعمارهم 4 سنوات. في هذا المستوى، يتم تعليم الأطفال كتابة الحروف والأرقام (باللغات الإنجليزية والبنغالية والعربية). كما يتم تعليمهم الأغاني والرسم من خلال الأنشطة الممتعة. بالإضافة إلى ذلك، يتم تعليمهم الأدعية اليومية والسور والآداب.",
            },
            {
                title: "الحضانة (Nursery)",
                ageRange: "4 - 5 سنوات",
                description:
                    "للأطفال الذين تتراوح أعمارهم بين 4 و 5 سنوات. في هذا المستوى، يتم تعليم الأطفال تكوين الكلمات (باللغات العربية والإنجليزية والبنغالية) والعد حتى 100 باللغات الإنجليزية والبنغالية، و50 باللغة العربية، معاً مع السور والأحاديث والأدعية والأغاني والرسم.",
            },
            {
                title: "الروضة (KG)",
                ageRange: "5 - 6 سنوات",
                description:
                    "للأطفال الذين تتراوح أعمارهم بين 5 و 6 سنوات. في هذا المستوى، يتبع الأطفال منهجاً عاماً يتضمن القراءة والكتابة وتكوين الجمل والبنغالية والرياضيات الأساسية والعلوم والعربية والفنون والتحدث.",
            },
            {
                title: "الصف الأول فما فوق",
                ageRange: "6+ سنوات",
                description:
                    "في هذه المرحلة، يتلقى الأطفال أساساً قوياً في العلوم والعربية والقرآن والحديث والدعاء والحاسوب والمعرفة العامة جنباً إلى جنب مع المنهج الوطني.",
            },
            {
                title: "ما قبل التحفيظ والتحفيظ",
                ageRange: "جميع الأعمار",
                description:
                    "في هذا المستوى، يتم تعليم الأطفال التجويد والقاعدة والأمبارة والنظرة وحفظ القرآن وتسميل القرآن جنباً إلى جنب مع التدريس الحديث تحت إشراف معلمي القرآن المحترفين والمتمرسين المدربين على الطريقة النورانية.",
            },
        ],
    },
};
