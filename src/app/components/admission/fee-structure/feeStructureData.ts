import { Language } from "@/app/types/about/types";

export interface FeeItem {
    description: string;
    amount: string;
}

export interface FeeCategory {
    categoryName: string;
    items: FeeItem[];
}

export interface FeeStructureData {
    heading: string;
    subheading: string;
    admissionFee: string;
    tuitionFees: string;
    residentialFees?: string;
    additionalFees?: string;
    categories: FeeCategory[];
}

export const feeStructureData: Record<"satkhira" | "debhata", Record<Language, FeeStructureData>> = {
    satkhira: {
        en: {
            heading: "Fee Structure - Satkhira Campus",
            subheading: "Transparent and Affordable Education",
            admissionFee: "Admission Fee",
            tuitionFees: "Tuition Fees",
            residentialFees: "Residential Fees",
            categories: [
                {
                    categoryName: "Admission",
                    items: [
                        {
                            description: "Admission Fee",
                            amount: "Tk 5,000",
                        },
                    ],
                },
                {
                    categoryName: "Tuition Fees",
                    items: [
                        {
                            description: "Pre-Play to KG",
                            amount: "Tk 2,000",
                        },
                        {
                            description: "Class 1 & 2",
                            amount: "Tk 2,200",
                        },
                        {
                            description: "Class 3 to 5",
                            amount: "Tk 2,500",
                        },
                        {
                            description: "Class 6 to 8",
                            amount: "Tk 2,700",
                        },
                        {
                            description: "Hifz",
                            amount: "Tk 1,000",
                        },
                    ],
                },
                {
                    categoryName: "Residential Fees",
                    items: [
                        {
                            description: "Full Time",
                            amount: "Tk 6,000",
                        },
                        {
                            description: "Day Care",
                            amount: "Tk 4,000",
                        },
                    ],
                },
            ],
        },
        bn: {
            heading: "ফি কাঠামো - সাতক্ষীরা ক্যাম্পাস",
            subheading: "স্বচ্ছ এবং সাশ্রয়ী শিক্ষা",
            admissionFee: "ভর্তি ফি",
            tuitionFees: "শিক্ষা ফি",
            residentialFees: "আবাসিক ফি",
            categories: [
                {
                    categoryName: "ভর্তি",
                    items: [
                        {
                            description: "ভর্তি ফি",
                            amount: "টাকা ৫,০০০",
                        },
                    ],
                },
                {
                    categoryName: "শিক্ষা ফি",
                    items: [
                        {
                            description: "প্রি-প্রে থেকে কে.জি.",
                            amount: "টাকা ২,০০০",
                        },
                        {
                            description: "শ্রেণি ১ ও ২",
                            amount: "টাকা ২,২০০",
                        },
                        {
                            description: "শ্রেণি ৩ থেকে ৫",
                            amount: "টাকা ২,৫০০",
                        },
                        {
                            description: "শ্রেণি ৬ থেকে ৮",
                            amount: "টাকা ২,৭০০",
                        },
                        {
                            description: "হিফজ",
                            amount: "টাকা ১,০০০",
                        },
                    ],
                },
                {
                    categoryName: "আবাসিক ফি",
                    items: [
                        {
                            description: "সম্পূর্ণ সময়",
                            amount: "টাকা ৬,০০০",
                        },
                        {
                            description: "ডে-কেয়ার",
                            amount: "টাকা ৪,০০০",
                        },
                    ],
                },
            ],
        },
        ar: {
            heading: "هيكل الرسوم - حرم ساتخيرا",
            subheading: "تعليم شفاف وبأسعار معقولة",
            admissionFee: "رسم القبول",
            tuitionFees: "الرسوم الدراسية",
            residentialFees: "رسم الإقامة",
            categories: [
                {
                    categoryName: "القبول",
                    items: [
                        {
                            description: "رسم القبول",
                            amount: "ألف تاكا 5",
                        },
                    ],
                },
                {
                    categoryName: "الرسوم الدراسية",
                    items: [
                        {
                            description: "ما قبل اللعب إلى الروضة",
                            amount: "ألفي تاكا",
                        },
                        {
                            description: "الفئة 1 و 2",
                            amount: "ألفين ومائتي تاكا",
                        },
                        {
                            description: "الفئة 3 إلى 5",
                            amount: "ألفين وخمسمائة تاكا",
                        },
                        {
                            description: "الفئة 6 إلى 8",
                            amount: "ألفين وسبعمائة تاكا",
                        },
                        {
                            description: "حفظ القرآن",
                            amount: "ألف تاكا",
                        },
                    ],
                },
                {
                    categoryName: "رسم الإقامة",
                    items: [
                        {
                            description: "دوام كامل",
                            amount: "ستة آلاف تاكا",
                        },
                        {
                            description: "الرعاية النهارية",
                            amount: "أربعة آلاف تاكا",
                        },
                    ],
                },
            ],
        },
    },
    debhata: {
        en: {
            heading: "Fee Structure - Debhata Campus",
            subheading: "Quality Education with Flexible Payment Options",
            admissionFee: "Admission Fee",
            tuitionFees: "Tuition Fees",
            additionalFees: "Additional Fees",
            categories: [
                {
                    categoryName: "Admission & Session",
                    items: [
                        {
                            description: "Admission Fee",
                            amount: "Tk 5,000",
                        },
                        {
                            description: "Session Charge (Yearly)",
                            amount: "Tk 3,000",
                        },
                    ],
                },
                {
                    categoryName: "Tuition Fees (Monthly)",
                    items: [
                        {
                            description: "Play to KG",
                            amount: "Tk 1,800",
                        },
                        {
                            description: "Class 1 & 2",
                            amount: "Tk 2,000",
                        },
                        {
                            description: "Class 3 to 5",
                            amount: "Tk 2,300",
                        },
                        {
                            description: "Class 6 to 8",
                            amount: "Tk 2,500",
                        },
                    ],
                },
                {
                    categoryName: "Hostel & Care",
                    items: [
                        {
                            description: "Hostel Fee (Monthly)",
                            amount: "Tk 5,000",
                        },
                        {
                            description: "Day Care (Monthly)",
                            amount: "Tk 4,000",
                        },
                    ],
                },
            ],
        },
        bn: {
            heading: "ফি কাঠামো - দেবহাটা ক্যাম্পাস",
            subheading: "নমনীয় পেমেন্ট বিকল্পসহ গুণমানের শিক্ষা",
            admissionFee: "ভর্তি ফি",
            tuitionFees: "শিক্ষা ফি",
            additionalFees: "অতিরিক্ত ফি",
            categories: [
                {
                    categoryName: "ভর্তি ও সেশন",
                    items: [
                        {
                            description: "ভর্তি ফি",
                            amount: "টাকা ৫,০০০",
                        },
                        {
                            description: "সেশন চার্জ (বার্ষিক)",
                            amount: "টাকা ৩,০০০",
                        },
                    ],
                },
                {
                    categoryName: "শিক্ষা ফি (মাসিক)",
                    items: [
                        {
                            description: "প্রে থেকে কে.জি.",
                            amount: "টাকা ১,৮০০",
                        },
                        {
                            description: "শ্রেণি ১ ও ২",
                            amount: "টাকা ২,০০০",
                        },
                        {
                            description: "শ্রেণি ৩ থেকে ৫",
                            amount: "টাকা ২,৩০০",
                        },
                        {
                            description: "শ্রেণি ৬ থেকে ৮",
                            amount: "টাকা ২,৫০০",
                        },
                    ],
                },
                {
                    categoryName: "হোস্টেল ও যত্ন",
                    items: [
                        {
                            description: "হোস্টেল ফি (মাসিক)",
                            amount: "টাকা ৫,০০০",
                        },
                        {
                            description: "ডে-কেয়ার (মাসিক)",
                            amount: "টাকা ৪,০০০",
                        },
                    ],
                },
            ],
        },
        ar: {
            heading: "هيكل الرسوم - حرم ديبهاتا",
            subheading: "التعليم الجودة مع خيارات الدفع المرنة",
            admissionFee: "رسم القبول",
            tuitionFees: "الرسوم الدراسية",
            additionalFees: "رسوم إضافية",
            categories: [
                {
                    categoryName: "القبول والجلسة",
                    items: [
                        {
                            description: "رسم القبول",
                            amount: "ألف تاكا 5",
                        },
                        {
                            description: "رسم الجلسة (سنوي)",
                            amount: "ثلاثة آلاف تاكا",
                        },
                    ],
                },
                {
                    categoryName: "الرسوم الدراسية (شهري)",
                    items: [
                        {
                            description: "اللعب إلى الروضة",
                            amount: "ألفين وثمانمائة تاكا",
                        },
                        {
                            description: "الفئة 1 و 2",
                            amount: "ألفي تاكا",
                        },
                        {
                            description: "الفئة 3 إلى 5",
                            amount: "ألفين وثلاثمائة تاكا",
                        },
                        {
                            description: "الفئة 6 إلى 8",
                            amount: "ألفين وخمسمائة تاكا",
                        },
                    ],
                },
                {
                    categoryName: "السكن والرعاية",
                    items: [
                        {
                            description: "رسم السكن (شهري)",
                            amount: "خمسة آلاف تاكا",
                        },
                        {
                            description: "الرعاية النهارية (شهري)",
                            amount: "أربعة آلاف تاكا",
                        },
                    ],
                },
            ],
        },
    },
};
