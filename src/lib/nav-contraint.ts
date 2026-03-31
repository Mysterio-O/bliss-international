export type NavNode = {
  label: string;
  href: string;
  children?: NavNode[];
};

export const navItems: NavNode[] = [
  {
    label: "About BIA",
    href: "#",
    children: [
      { label: "About BIA", href: "/about" },
      {
        label: "Message From Principal",
        href: "/about/principles",
        // children: [
        //   { label: "Satkhira Campus", href: "#message-principal-satkhira" },
        //   { label: "Debhata Campus", href: "#message-principal-debhata" },
        // ],
      },
      {
        label: "Faculties",
        href: "/about/faculties",
      },
    ],
  },
  {
    label: "Admission",
    href: "#admission",
    children: [
      { label: "Admission Procedure", href: "#admission-procedure" },
      { label: "Age Criteria", href: "#age-criteria" },
      {
        label: "Fees Structure",
        href: "#fees-structure",
        children: [
          { label: "Satkhira Campus", href: "#fees-satkhira" },
          { label: "Debhata Campus", href: "#fees-debhata" },
        ],
      },
      { label: "Online Admission", href: "#online-admission" },
      {
        label: "Payment Procedure",
        href: "#payment-procedure",
        children: [
          { label: "Satkhira Campus", href: "#payment-satkhira" },
          { label: "Debhata Campus", href: "#payment-debhata" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    href: "#academics",
    children: [
      {
        label: "Academic Calendar",
        href: "#academic-calendar",
        children: [
          { label: "Satkhira Campus", href: "#academic-calendar-satkhira" },
          { label: "Debhata Campus", href: "#academic-calendar-debhata" },
        ],
      },
      { label: "Curriculum", href: "#curriculum" },
      { label: "Teaching Medium", href: "#teaching-medium" },
      { label: "Syllabus", href: "#syllabus" },
      {
        label: "Forms & Downloads",
        href: "#forms-downloads",
        children: [
          { label: "Satkhira Campus", href: "#forms-satkhira" },
          { label: "Debhata Campus", href: "#forms-debhata" },
        ],
      },
    ],
  },
  {
    label: "Bliss Club",
    href: "#bliss-club",
    children: [
      { label: "Language Club", href: "#language-club" },
      { label: "Debating Club", href: "#debating-club" },
      { label: "Science Club", href: "#science-club" },
      { label: "Art Club", href: "#art-club" },
      { label: "Cultural Club", href: "#cultural-club" },
      { label: "Sports Club", href: "#sports-club" },
      { label: "ICT Club", href: "#ict-club" },
    ],
  },
  {
    label: "Results",
    href: "#results",
    children: [
      { label: "Satkhira Campus", href: "#results-satkhira" },
      { label: "Debhata Campus", href: "#results-debhata" },
    ],
  },
  {
    label: "Student's Affairs",
    href: "#students-affairs",
    children: [
      {
        label: "Student's Activities",
        href: "#students-activities",
        children: [
          { label: "Satkhira Campus", href: "#students-activities-satkhira" },
          { label: "Debhata Campus", href: "#students-activities-debhata" },
        ],
      },
      {
        label: "BIA Publication",
        href: "#bia-publication",
        children: [
          { label: "Satkhira Campus", href: "#bia-publication-satkhira" },
          { label: "Debhata Campus", href: "#bia-publication-debhata" },
        ],
      },
      {
        label: "Student Verification",
        href: "#student-verification",
        children: [
          { label: "Satkhira Campus", href: "#verification-satkhira" },
          { label: "Debhata Campus", href: "#verification-debhata" },
        ],
      },
      { label: "BIA E-library", href: "#bia-e-library" },
    ],
  },
  {
    label: "Media Gallery",
    href: "#media-gallery",
    children: [
      { label: "Photo Gallery", href: "#photo-gallery" },
      { label: "Video Gallery", href: "#video-gallery" },
    ],
  },
  {
    label: "Login",
    href: "#login",
    children: [
      { label: "Admin Login", href: "#admin-login" },
      { label: "Teacher Login", href: "#teacher-login" },
      { label: "Student Login", href: "#student-login" },
      { label: "Parent Login", href: "#parent-login" },
    ],
  },
  {
    label: "Contact",
    href: "#contact",
    children: [
      { label: "Satkhira Campus", href: "#contact-satkhira" },
      { label: "Debhata Campus", href: "#contact-debhata" },
      { label: "Career", href: "#career" },
    ],
  },
];