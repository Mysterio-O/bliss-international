export type Faculty = {
    name: string;
    role: string;
    image?: string;
    qualification: string[];
    mobile?: string;
    email?: string;
};

export type Campus = {
    id: string;
    name: string;
    faculties: Faculty[];
};

export const campuses: Campus[] = [
    {
        id: "satkhira",
        name: "Satkhira Campus",
        faculties: [
            {
                name: "Mohammed Nur Alam Sipon",
                role: "Principal",
                image: undefined,
                qualification: [
                    "M.Sc. (Biotechnology), Nottingham Trent University, England",
                    "Pre Masters (Science and Engineering), University of Glasgow, Scotland",
                    "B.Sc. (Hons) & M.Sc. (Botany)",
                ],
                mobile: "01919888326",
                email: "sipon@live.co.uk",
            },
            {
                name: "Md. Zahid Hasan",
                role: "Arabic & Hifz Coordinator",
                image: undefined,
                qualification: [
                    "Ifta (Mufti), Al-Fiqh — Jamia Muhammadia (Islamic Research Center, Dhaka)",
                    "Dawra-e Hadith (Masters) — Al-Jamiatul Islamia Darul Uloom Madaninagar, Dhaka",
                    "Certified Adib (Writer), Arabic Language & Literature — Mahadush Shayekh Fuad Liddirasatil Islamia, Dhaka",
                    "Hafiz-e-Quran, Madrasatus Suffah, Satkhira",
                ],
                mobile: "01901448673",
                email: "zh364338@gmail.com",
            },
            {
                name: "Tahmina Akter",
                role: "Senior Teacher",
                image: undefined,
                qualification: [
                    "O Level & A Level — Indian Central School, Kuwait",
                    "Diploma in Civil Engineering — Australian University of Kuwait",
                ],
                mobile: undefined,
                email: "tahmina@bliss.edu.bd",
            },
            {
                name: "Halimuzzaman",
                role: "Senior Teacher",
                image: undefined,
                qualification: [
                    "Hafz-e-Quran",
                    "Dawra-e Hadith (Masters) — Hathazari Madrasa",
                ],
                mobile: undefined,
                email: "halimuzzaman@bliss.edu.bd",
            },
            {
                name: "Aesha Akter",
                role: "Senior Teacher",
                image: undefined,
                qualification: ["B.Sc. & M.Sc. in Zoology — National University"],
                mobile: undefined,
                email: "aeyasha@bliss.edu.bd",
            },
            {
                name: "Shamsunnahar Amey",
                role: "Senior Teacher",
                image: undefined,
                qualification: [
                    "BBA & MBA — Department of International Business, FBS, University of Dhaka",
                ],
                mobile: undefined,
                email: "s.amey@bliss.edu.bd",
            },
            {
                name: "Tahmina Karim Tonu",
                role: "Senior Teacher",
                image: undefined,
                qualification: ["B.A. & M.A. in Bangla — National University"],
                mobile: undefined,
                email: "tonu@bliss.edu.bd",
            },
            {
                name: "Md. Mohiduddin Iqbal",
                role: "Senior Teacher",
                image: undefined,
                qualification: ["B.A. & M.A. in Bangla — National University"],
                mobile: undefined,
                email: "iqbal@bliss.edu.bd",
            },
            {
                name: "Sabrina Momtaz Sathi",
                role: "Assistant Teacher",
                image: undefined,
                qualification: ["BSc & MSc in Zoology — National University"],
                mobile: "01901448669",
                email: "sabrina@bliss.edu.bd",
            },
            {
                name: "Safia Sultana",
                role: "Assistant Teacher",
                image: undefined,
                qualification: ["BBA & MBA in Accounting — National University"],
                mobile: undefined,
                email: "safia@bliss.edu.bd",
            },
            {
                name: "Sanzida Sultana",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "BBA & MBA in Finance — Stamford University Bangladesh",
                ],
                mobile: undefined,
                email: "sanzida_sultana@bliss.edu.bd",
            },
            {
                name: "Jannatul Ferdous Sworna",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "BSc & MS in Art and Creative Studies — Govt. College of Applied Human Science, DU",
                ],
                mobile: undefined,
                email: "sworna@bliss.edu.bd",
            },
            {
                name: "Nowrin Rahman",
                role: "Assistant Teacher",
                image: undefined,
                qualification: ["BSc & MSc in Zoology — National University"],
                mobile: undefined,
                email: "nowrin@bliss.edu.bd",
            },
            {
                name: "Anifa Anjura",
                role: "Assistant Teacher",
                image: undefined,
                qualification: ["BBA & MBA in Marketing — National University"],
                mobile: undefined,
                email: "anifa@bliss.edu.bd",
            },
            {
                name: "Raihan Umme Akhera",
                role: "Assistant Teacher",
                image: undefined,
                qualification: ["BA (Hons) & MA in English — ASA University"],
                mobile: undefined,
                email: "akhera@bliss.edu.bd",
            },
            {
                name: "Jannatul Ferdaus",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "BA (Hons) & MA in English Language & Literature — National University",
                ],
                mobile: undefined,
                email: "jannatul_ferdous1@bliss.edu.bd",
            },
            {
                name: "Aman Ullah Shaker",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "BSc in Electrical and Electronic Engineering — North Western University",
                    "M.Engg in Telecommunication Engineering — World University of Bangladesh",
                    "Member (EAB)",
                ],
                mobile: "01901448665",
                email: "amanullahshaker@gmail.com",
            },
            {
                name: "Shaikh Abdullah",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "Hafz-e-Quran",
                    "Dawra-e Hadith (Masters)",
                    "Ifta (Mufti), Al-Fiqh — Al-Jamiatul Islamia Darul Uloom Madaninagar, Dhaka",
                ],
                mobile: "01998301096",
                email: "abdullahsojib73@gmail.com",
            },
            {
                name: "Afroza Hasnain",
                role: "Assistant Teacher",
                image: undefined,
                qualification: ["BA (Hons) & MA in English — National University"],
                mobile: undefined,
                email: "afroza@bliss.edu.bd",
            },
            {
                name: "Lipya Khatun",
                role: "Assistant Teacher",
                image: undefined,
                qualification: ["BA (Hons) & MA in Bangla — National University"],
                mobile: undefined,
                email: "lipiya@bliss.edu.bd",
            },
            {
                name: "Shuria Haque",
                role: "Assistant Teacher",
                image: undefined,
                qualification: ["BBA & MBA — University of Dhaka"],
                mobile: undefined,
                email: "suraiya1@bliss.edu.bd",
            },
            {
                name: "Faiza Atkia Keya",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "BSS (Hons.) & MSS in Sociology — Khulna University",
                ],
                mobile: undefined,
                email: "keya@bliss.edu.bd",
            },
            {
                name: "Eliyas Hossain",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "BSc in Mechanical Engineering — Jiangsu University of Science and Technology, China",
                ],
                mobile: undefined,
                email: "eliyas@bliss.edu.bd",
            },
            {
                name: "Nazmus Sakib",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "Dawra-e-Hadith (Masters) — Jamia Arabia Imdadul Ulum, Dhaka",
                    "Ifta (Al-Fiqh) — Jamia Rashidia Goalkhali, Khulna",
                ],
                mobile: undefined,
                email: "n.sakib@bliss.edu.bd",
            },
            {
                name: "Md. Tawhidur Rahman",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "Certified Arabic Linguist — Madrasah Tu-Tasnim, Mirpur, Dhaka",
                    "Dawara-e-Hadith — Jamia Islamia Darul Uloom Madania, Jatrabari, Dhaka",
                    "Hifz Quran — Madrasatu Shuffa",
                ],
                mobile: undefined,
                email: "tawhidrubel751482@gmail.com",
            },
            {
                name: "Md. Sadik Hossain",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "Hafiz-e-Qur'an — Madrasatus Suffah Satkhira",
                    "Trained in Tajweed and Qira'at — Mahadul Qirat Bangladesh",
                    "Dawra-e-Hadith — Jamia Islamia Darul Uloom Madania, Jatrabari, Dhaka",
                ],
                mobile: undefined,
                email: "mdsadik5058@gmail.com",
            },
            {
                name: "Md. Aktoruzzaman",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "B.A (Hons), M.A (1st Class) — University of Dhaka",
                    "M.A (English) — Khulna University",
                ],
                mobile: undefined,
                email: "aktoruzzaman@bliss.edu.bd",
            },
        ],
    },
    {
        id: "debhata",
        name: "Debhata Campus",
        faculties: [
            {
                name: "Toha Ahammad",
                role: "Principal",
                image: undefined,
                qualification: [
                    "MA in English Language — Islamic University",
                    "Bachelor of Education (B.Ed.) — IIER, Islamic University",
                    "BA (Hons) in Eng. Language & Literature",
                    "Diploma in TEFL (E-Learning) — London College of Teacher, UK",
                ],
                mobile: "01926261818",
                email: "tohabia2022@gmail.com",
            },
            {
                name: "Mahfuzur Rahman",
                role: "Academic Coordinator",
                image: undefined,
                qualification: [
                    "B.A. (Hons) in English — National University",
                    "M.A. in English — Govt. Titumir College, affiliated with Dhaka University",
                ],
                mobile: "01901448681",
                email: "m_rahman@bliss.edu.bd",
            },
            {
                name: "Fariya Sultana",
                role: "Preschool In-charge",
                image: undefined,
                qualification: [
                    "Bachelor of Laws (LL.B.) — North Western University",
                    "Master of Laws (LL.M. Ongoing) — ASA University",
                ],
                mobile: "01901448684",
                email: "freedom.fariya@outlook.com",
            },
            {
                name: "Md Nazmul Hossain",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "B.Sc in Mechanical Engineering — International University of Business Agriculture & Technology",
                ],
                mobile: undefined,
                email: "nazmul_hossain@bliss.edu.bd",
            },
            {
                name: "Sonali Khatun",
                role: "Assistant Teacher",
                image: undefined,
                qualification: ["B.A. (Hons) & M.A. in Bangla — National University"],
                mobile: undefined,
                email: "sonia_khatun@bliss.edu.bd",
            },
            {
                name: "Sadia Afroz",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "B.A (Hons) & M.A in Islamic Studies — Islamic University",
                ],
                mobile: undefined,
                email: "sadia_afroz@bliss.edu.bd",
            },
            {
                name: "Bellal Hossain",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "B.S.S & M.S.S in Political Science — National University",
                ],
                mobile: undefined,
                email: "bellal_hossain@bliss.edu.bd",
            },
            {
                name: "Tania Islam",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "B.Sc (Hons) & M.Sc in Applied Nutrition and Food Technology (ANFT) — Islamic University",
                ],
                mobile: undefined,
                email: "tania_islam@bliss.edu.bd",
            },
            {
                name: "Farzana Yeasmin",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "B.Sc & M.Sc in Information and Communication Technology (ICT) — Comilla University",
                ],
                mobile: undefined,
                email: "farzana_yeasmin@bliss.edu.bd",
            },
            {
                name: "Md. Hafizul Islam",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "B.A. (Hons) & M.A. in Islamic Studies — National University",
                    "Fazil, Kamil, Hafez-e-Quran & Nurani Trained",
                ],
                mobile: undefined,
                email: "hafizul_islam@bliss.edu.bd",
            },
            {
                name: "Imtieaz Parvin",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "B.A. (Hons) in English",
                    "M.A. in English (Ongoing) — European University of Bangladesh",
                ],
                mobile: undefined,
                email: "imtieaz_parvin@bliss.edu.bd",
            },
            {
                name: "Md. Ebadul Islam",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "B.Sc (Hons) & M.Sc in Mathematics — National University",
                ],
                mobile: undefined,
                email: "ebadul_islam@bliss.edu.bd",
            },
            {
                name: "Sahed Iqbal",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "B.A. (Hons) & M.A. in English — National University",
                ],
                mobile: undefined,
                email: "sahed_iqbal@bliss.edu.bd",
            },
            {
                name: "Mehedi Al Galib",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "B.Sc (Hons), M.Sc (Botany) — National University",
                ],
                mobile: undefined,
                email: "mehedi_galib@bliss.edu.bd",
            },
            {
                name: "Md Saifur Rahman",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "Hafiz-e-Quran",
                    "Dawra-e Hadith (Masters) — Jamia Arabia Imdadul Uloom Faridabad, Dhaka",
                ],
                mobile: undefined,
                email: "saifur_rahman@bliss.edu.bd",
            },
            {
                name: "Abdur Rab",
                role: "Assistant Teacher",
                image: undefined,
                qualification: [
                    "Hafiz-e-Quran",
                    "Dawra-e Hadith (Masters) — Jamia Arabia Imdadul Uloom Faridabad, Dhaka",
                ],
                mobile: undefined,
                email: "abdur_rab@bliss.edu.bd",
            },
        ],
    },
];

export const ROLE_ORDER = [
    "Principal",
    "Academic Coordinator",
    "Preschool In-charge",
    "Arabic & Hifz Coordinator",
    "Senior Teacher",
    "Assistant Teacher",
];