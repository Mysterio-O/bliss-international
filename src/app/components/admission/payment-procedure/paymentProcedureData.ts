import { Language } from "@/app/types/about/types";

export type CampusId = "satkhira" | "debhata";

export interface PaymentOfficerProfile {
  campusTitle: string;
  contactIntro: string;
  officeName: string;
  officerName: string;
  role: string;
  qualifications: string[];
  contactNoLabel: string;
  contactNo: string;
  emailLabel: string;
  email: string;
  officeHoursLabel: string;
  officeHours: string;
  imageSrc: string;
  imageAlt: string;
}

export interface PaymentDemoCopy {
  title: string;
  subtitle: string;
  payerName: string;
  studentId: string;
  classLabel: string;
  amount: string;
  paymentMethod: string;
  transactionId: string;
  submit: string;
  note: string;
  success: string;
  methods: {
    bkash: string;
    nagad: string;
    bank: string;
  };
}

export interface PaymentProcedureCopy {
  sectionLabel: string;
  sectionTitle: string;
  sectionSubtitle: string;
  campusTabs: Record<CampusId, string>;
  officerCardTitle: string;
  demo: PaymentDemoCopy;
}

export const paymentProcedureCopy: Record<Language, PaymentProcedureCopy> = {
  en: {
    sectionLabel: "Payments",
    sectionTitle: "Payment Procedure",
    sectionSubtitle: "Choose your campus and connect with the accounts office for all payment support.",
    campusTabs: {
      satkhira: "Satkhira Campus",
      debhata: "Debhata Campus",
    },
    officerCardTitle: "Accounts Office Contact",
    demo: {
      title: "Online Payment Demo",
      subtitle: "This is a demo section for digital fee collection flow.",
      payerName: "Payer Name",
      studentId: "Student ID",
      classLabel: "Class",
      amount: "Amount (Tk)",
      paymentMethod: "Payment Method",
      transactionId: "Transaction ID",
      submit: "Submit Demo Payment",
      note: "No real transaction happens here. This section is for UI demonstration only.",
      success: "Demo submitted successfully.",
      methods: {
        bkash: "bKash",
        nagad: "Nagad",
        bank: "Bank Transfer",
      },
    },
  },
  bn: {
    sectionLabel: "পেমেন্ট",
    sectionTitle: "পেমেন্ট প্রক্রিয়া",
    sectionSubtitle: "আপনার ক্যাম্পাস নির্বাচন করুন এবং পেমেন্ট সংক্রান্ত সহায়তার জন্য হিসাব অফিসের সাথে যোগাযোগ করুন।",
    campusTabs: {
      satkhira: "সাতক্ষীরা ক্যাম্পাস",
      debhata: "দেবহাটা ক্যাম্পাস",
    },
    officerCardTitle: "হিসাব অফিস যোগাযোগ",
    demo: {
      title: "অনলাইন পেমেন্ট ডেমো",
      subtitle: "এটি ডিজিটাল ফি কালেকশন প্রক্রিয়ার একটি ডেমো সেকশন।",
      payerName: "পেমেন্টকারীর নাম",
      studentId: "শিক্ষার্থী আইডি",
      classLabel: "শ্রেণি",
      amount: "পরিমাণ (টাকা)",
      paymentMethod: "পেমেন্ট মাধ্যম",
      transactionId: "ট্রানজেকশন আইডি",
      submit: "ডেমো পেমেন্ট সাবমিট করুন",
      note: "এখানে কোনো বাস্তব লেনদেন হয় না। এটি শুধুমাত্র UI প্রদর্শনের জন্য।",
      success: "ডেমো সফলভাবে সাবমিট হয়েছে।",
      methods: {
        bkash: "বিকাশ",
        nagad: "নগদ",
        bank: "ব্যাংক ট্রান্সফার",
      },
    },
  },
  ar: {
    sectionLabel: "المدفوعات",
    sectionTitle: "إجراءات الدفع",
    sectionSubtitle: "اختر الحرم الخاص بك وتواصل مع مكتب الحسابات لجميع خدمات الدفع.",
    campusTabs: {
      satkhira: "حرم ساتخيرا",
      debhata: "حرم ديبهاتا",
    },
    officerCardTitle: "تواصل مكتب الحسابات",
    demo: {
      title: "عرض توضيحي للدفع الإلكتروني",
      subtitle: "هذا قسم تجريبي لتدفق تحصيل الرسوم رقميا.",
      payerName: "اسم الدافع",
      studentId: "هوية الطالب",
      classLabel: "الصف",
      amount: "المبلغ (تاكا)",
      paymentMethod: "طريقة الدفع",
      transactionId: "معرف المعاملة",
      submit: "إرسال الدفع التجريبي",
      note: "لا تتم أي معاملة حقيقية هنا. هذا القسم للعرض فقط.",
      success: "تم إرسال العرض التجريبي بنجاح.",
      methods: {
        bkash: "بي كاش",
        nagad: "نقد",
        bank: "تحويل بنكي",
      },
    },
  },
};

export const paymentOfficerProfiles: Record<CampusId, Record<Language, PaymentOfficerProfile>> = {
  satkhira: {
    en: {
      campusTitle: "Payment Procedure - Satkhira Campus",
      contactIntro: "For payment, contact with",
      officeName: "Office of The Accounts",
      officerName: "Md. Abdul Wadud",
      role: "Accountant",
      qualifications: ["BBA, MBA in Management & LLB", "National University"],
      contactNoLabel: "Contact No",
      contactNo: "01901448615",
      emailLabel: "E-mail",
      email: "abdulit.bd@gmail.com",
      officeHoursLabel: "Office Hours",
      officeHours: "Sunday-Thursday, 8 AM - 4 PM",
      imageSrc: "/payment/payment-satkhira.jpg",
      imageAlt: "Payment office Satkhira campus",
    },
    bn: {
      campusTitle: "পেমেন্ট প্রক্রিয়া - সাতক্ষীরা ক্যাম্পাস",
      contactIntro: "পেমেন্টের জন্য যোগাযোগ করুন",
      officeName: "হিসাব অফিস",
      officerName: "মো. আব্দুল ওয়াদুদ",
      role: "অ্যাকাউন্ট্যান্ট",
      qualifications: ["BBA, MBA in Management & LLB", "National University"],
      contactNoLabel: "যোগাযোগ নম্বর",
      contactNo: "01901448615",
      emailLabel: "ই-মেইল",
      email: "abdulit.bd@gmail.com",
      officeHoursLabel: "অফিস সময়",
      officeHours: "রবিবার-বৃহস্পতিবার, সকাল ৮টা - বিকাল ৪টা",
      imageSrc: "/payment/payment-satkhira.jpg",
      imageAlt: "সাতক্ষীরা ক্যাম্পাস পেমেন্ট অফিস",
    },
    ar: {
      campusTitle: "إجراءات الدفع - حرم ساتخيرا",
      contactIntro: "للدفع تواصل مع",
      officeName: "مكتب الحسابات",
      officerName: "محمد عبد الودود",
      role: "محاسب",
      qualifications: ["BBA, MBA in Management & LLB", "National University"],
      contactNoLabel: "رقم التواصل",
      contactNo: "01901448615",
      emailLabel: "البريد الإلكتروني",
      email: "abdulit.bd@gmail.com",
      officeHoursLabel: "ساعات العمل",
      officeHours: "الأحد-الخميس، 8 صباحا - 4 مساء",
      imageSrc: "/payment/payment-satkhira.jpg",
      imageAlt: "مكتب الدفع في حرم ساتخيرا",
    },
  },
  debhata: {
    en: {
      campusTitle: "Payment Procedure - Debhata Campus",
      contactIntro: "For payment, contact with",
      officeName: "Office of The Accounts",
      officerName: "Khademul Hossain",
      role: "Accounts Officer",
      qualifications: [
        "B.B.A & M.B.A in Management",
        "National University",
        "Special Training on Income Tax and VAT Management",
        "Islami Bank Foundation",
      ],
      contactNoLabel: "Contact No",
      contactNo: "N/A",
      emailLabel: "E-mail",
      email: "khademul381@gmail.com",
      officeHoursLabel: "Office Hours",
      officeHours: "Sunday-Thursday, 8 AM - 4 PM",
      imageSrc: "/payment/payment-debhata.jpeg",
      imageAlt: "Payment office Debhata campus",
    },
    bn: {
      campusTitle: "পেমেন্ট প্রক্রিয়া - দেবহাটা ক্যাম্পাস",
      contactIntro: "পেমেন্টের জন্য যোগাযোগ করুন",
      officeName: "হিসাব অফিস",
      officerName: "খাদেমুল হোসাইন",
      role: "হিসাব কর্মকর্তা",
      qualifications: [
        "B.B.A & M.B.A in Management",
        "National University",
        "Special Training on Income Tax and VAT Management",
        "Islami Bank Foundation",
      ],
      contactNoLabel: "যোগাযোগ নম্বর",
      contactNo: "প্রযোজ্য নয়",
      emailLabel: "ই-মেইল",
      email: "khademul381@gmail.com",
      officeHoursLabel: "অফিস সময়",
      officeHours: "রবিবার-বৃহস্পতিবার, সকাল ৮টা - বিকাল ৪টা",
      imageSrc: "/payment/payment-debhata.jpeg",
      imageAlt: "দেবহাটা ক্যাম্পাস পেমেন্ট অফিস",
    },
    ar: {
      campusTitle: "إجراءات الدفع - حرم ديبهاتا",
      contactIntro: "للدفع تواصل مع",
      officeName: "مكتب الحسابات",
      officerName: "خادم الحسين",
      role: "مسؤول الحسابات",
      qualifications: [
        "B.B.A & M.B.A in Management",
        "National University",
        "Special Training on Income Tax and VAT Management",
        "Islami Bank Foundation",
      ],
      contactNoLabel: "رقم التواصل",
      contactNo: "غير متوفر",
      emailLabel: "البريد الإلكتروني",
      email: "khademul381@gmail.com",
      officeHoursLabel: "ساعات العمل",
      officeHours: "الأحد-الخميس، 8 صباحا - 4 مساء",
      imageSrc: "/payment/payment-debhata.jpeg",
      imageAlt: "مكتب الدفع في حرم ديبهاتا",
    },
  },
};
