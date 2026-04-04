// ─── FORMS & DOWNLOADS DATA ────────────────────────────────────────────────────

export type Campus = 'Satkhira' | 'Debhata';

export interface DownloadItem {
  title: string;
  description: string;
  fileType: 'pdf' | 'doc' | 'xlsx';
  fileSize: string;
  downloadUrl: string;
  dateUpdated: string;
}

export interface FormsCategory {
  category: string;
  icon: string;
  items: DownloadItem[];
}

export const formsAndDownloads: Record<Campus, FormsCategory[]> = {
  Satkhira: [
    {
      category: 'Admission Forms',
      icon: '📋',
      items: [
        {
          title: 'Online Admission Form',
          description: 'Complete admission application form for new students',
          fileType: 'pdf',
          fileSize: '250 KB',
          downloadUrl: '#',
          dateUpdated: '2026-01-15',
        },
        {
          title: 'Admission Checklist',
          description: 'Required documents for admission process',
          fileType: 'doc',
          fileSize: '120 KB',
          downloadUrl: '#',
          dateUpdated: '2026-01-10',
        },
        {
          title: 'Parent Consent Form',
          description: 'Parental consent and acknowledgement form',
          fileType: 'pdf',
          fileSize: '180 KB',
          downloadUrl: '#',
          dateUpdated: '2026-01-15',
        },
      ],
    },
    {
      category: 'Academic Forms',
      icon: '📚',
      items: [
        {
          title: 'Course Registration Form',
          description: 'Register subjects and courses for the academic year',
          fileType: 'xlsx',
          fileSize: '95 KB',
          downloadUrl: '#',
          dateUpdated: '2026-02-01',
        },
        {
          title: 'Leave Application Form',
          description: 'Apply for long-term leave with proper justification',
          fileType: 'doc',
          fileSize: '85 KB',
          downloadUrl: '#',
          dateUpdated: '2026-02-01',
        },
        {
          title: 'Examination Form',
          description: 'Form for registering in half-yearly and annual exams',
          fileType: 'pdf',
          fileSize: '200 KB',
          downloadUrl: '#',
          dateUpdated: '2026-02-15',
        },
        {
          title: 'Request for Duplicate Certificate',
          description: 'Application form for duplicate mark sheets or certificates',
          fileType: 'doc',
          fileSize: '75 KB',
          downloadUrl: '#',
          dateUpdated: '2026-02-01',
        },
      ],
    },
    {
      category: 'Policies & Guidelines',
      icon: '📖',
      items: [
        {
          title: 'School Discipline Policy',
          description: 'Complete discipline rules and conduct guidelines',
          fileType: 'pdf',
          fileSize: '450 KB',
          downloadUrl: '#',
          dateUpdated: '2026-01-01',
        },
        {
          title: 'Student Handbook',
          description: 'Comprehensive handbook with school rules and procedures',
          fileType: 'pdf',
          fileSize: '2.5 MB',
          downloadUrl: '#',
          dateUpdated: '2025-12-15',
        },
        {
          title: 'Fee Payment Policy',
          description: 'Fee structure and payment guidelines',
          fileType: 'pdf',
          fileSize: '320 KB',
          downloadUrl: '#',
          dateUpdated: '2026-01-05',
        },
        {
          title: 'Anti-Bullying Policy',
          description: 'Policy for preventing and addressing bullying',
          fileType: 'pdf',
          fileSize: '280 KB',
          downloadUrl: '#',
          dateUpdated: '2026-01-01',
        },
      ],
    },
    {
      category: 'Syllabus & Curriculum',
      icon: '📕',
      items: [
        {
          title: 'Class X Syllabus - All Subjects',
          description: 'Complete syllabus for Class X including all subjects',
          fileType: 'pdf',
          fileSize: '1.8 MB',
          downloadUrl: '#',
          dateUpdated: '2025-12-20',
        },
        {
          title: 'Class IX Syllabus - All Subjects',
          description: 'Complete syllabus for Class IX including all subjects',
          fileType: 'pdf',
          fileSize: '1.6 MB',
          downloadUrl: '#',
          dateUpdated: '2025-12-20',
        },
        {
          title: 'Class V Syllabus - All Subjects',
          description: 'Complete syllabus for Class V including all subjects',
          fileType: 'pdf',
          fileSize: '1.4 MB',
          downloadUrl: '#',
          dateUpdated: '2025-12-20',
        },
      ],
    },
    {
      category: 'Examination & Results',
      icon: '📊',
      items: [
        {
          title: 'Exam Schedule 2026',
          description: 'Half-yearly and annual examination schedule',
          fileType: 'pdf',
          fileSize: '150 KB',
          downloadUrl: '#',
          dateUpdated: '2026-02-01',
        },
        {
          title: 'Sample Question Papers',
          description: 'Previous year question papers for practice',
          fileType: 'pdf',
          fileSize: '3.2 MB',
          downloadUrl: '#',
          dateUpdated: '2025-12-15',
        },
        {
          title: 'Result Declaration Schedule',
          description: 'Dates for declaration of exam results',
          fileType: 'doc',
          fileSize: '95 KB',
          downloadUrl: '#',
          dateUpdated: '2026-02-01',
        },
      ],
    },
  ],
  Debhata: [
    {
      category: 'Admission Forms',
      icon: '📋',
      items: [
        {
          title: 'Online Admission Form',
          description: 'Complete admission application form for new students',
          fileType: 'pdf',
          fileSize: '250 KB',
          downloadUrl: '#',
          dateUpdated: '2026-01-15',
        },
        {
          title: 'Admission Checklist',
          description: 'Required documents for admission process',
          fileType: 'doc',
          fileSize: '120 KB',
          downloadUrl: '#',
          dateUpdated: '2026-01-10',
        },
        {
          title: 'Parent Consent Form',
          description: 'Parental consent and acknowledgement form',
          fileType: 'pdf',
          fileSize: '180 KB',
          downloadUrl: '#',
          dateUpdated: '2026-01-15',
        },
        {
          title: 'Medical Form',
          description: 'Student health information and vaccination records',
          fileType: 'doc',
          fileSize: '110 KB',
          downloadUrl: '#',
          dateUpdated: '2026-01-20',
        },
      ],
    },
    {
      category: 'Academic Forms',
      icon: '📚',
      items: [
        {
          title: 'Course Registration Form',
          description: 'Register subjects and courses for the academic year',
          fileType: 'xlsx',
          fileSize: '95 KB',
          downloadUrl: '#',
          dateUpdated: '2026-02-01',
        },
        {
          title: 'Leave Application Form',
          description: 'Apply for long-term leave with proper justification',
          fileType: 'doc',
          fileSize: '85 KB',
          downloadUrl: '#',
          dateUpdated: '2026-02-01',
        },
        {
          title: 'Examination Form',
          description: 'Form for registering in half-yearly and annual exams',
          fileType: 'pdf',
          fileSize: '200 KB',
          downloadUrl: '#',
          dateUpdated: '2026-02-15',
        },
        {
          title: 'Transfer Certificate Request',
          description: 'Request form for transfer certificate',
          fileType: 'doc',
          fileSize: '92 KB',
          downloadUrl: '#',
          dateUpdated: '2026-02-01',
        },
      ],
    },
    {
      category: 'Policies & Guidelines',
      icon: '📖',
      items: [
        {
          title: 'School Discipline Policy',
          description: 'Complete discipline rules and conduct guidelines',
          fileType: 'pdf',
          fileSize: '450 KB',
          downloadUrl: '#',
          dateUpdated: '2026-01-01',
        },
        {
          title: 'Student Handbook',
          description: 'Comprehensive handbook with school rules and procedures',
          fileType: 'pdf',
          fileSize: '2.5 MB',
          downloadUrl: '#',
          dateUpdated: '2025-12-15',
        },
        {
          title: 'Co-Curricular Activity Policy',
          description: 'Guidelines for sports, clubs, and extracurricular activities',
          fileType: 'pdf',
          fileSize: '350 KB',
          downloadUrl: '#',
          dateUpdated: '2026-01-15',
        },
      ],
    },
    {
      category: 'Syllabus & Curriculum',
      icon: '📕',
      items: [
        {
          title: 'Class X Syllabus - All Subjects',
          description: 'Complete syllabus for Class X including all subjects',
          fileType: 'pdf',
          fileSize: '1.8 MB',
          downloadUrl: '#',
          dateUpdated: '2025-12-20',
        },
        {
          title: 'Class VIII Syllabus - All Subjects',
          description: 'Complete syllabus for Class VIII including all subjects',
          fileType: 'pdf',
          fileSize: '1.5 MB',
          downloadUrl: '#',
          dateUpdated: '2025-12-20',
        },
      ],
    },
    {
      category: 'Examination & Results',
      icon: '📊',
      items: [
        {
          title: 'Exam Schedule 2026',
          description: 'Half-yearly and annual examination schedule',
          fileType: 'pdf',
          fileSize: '150 KB',
          downloadUrl: '#',
          dateUpdated: '2026-02-01',
        },
        {
          title: 'Sample Question Papers',
          description: 'Previous year question papers for practice',
          fileType: 'pdf',
          fileSize: '3.2 MB',
          downloadUrl: '#',
          dateUpdated: '2025-12-15',
        },
      ],
    },
  ],
};

export const downloadInstructions = [
  {
    step: '1. Select Campus',
    description: 'Choose between Satkhira or Debhata campus to see campus-specific forms',
  },
  {
    step: '2. Browse Categories',
    description: 'Select the category that contains the form you need',
  },
  {
    step: '3. Click Download',
    description: 'Click the download button to save the file to your device',
  },
  {
    step: '4. Fill & Submit',
    description: 'Complete the form and submit as per instructions',
  },
];

export const helpfulInfo = [
  {
    title: 'Unable to Open PDFs?',
    description: 'Install Adobe Reader or use your browser to open PDF files. Contact IT support if issues persist.',
  },
  {
    title: 'Need Help Filling Forms?',
    description: 'Contact the admission office at admission@blissacademy.edu or call the campus directly.',
  },
  {
    title: 'Lost Your Password?',
    description: 'Visit the login page and click "Forgot Password" to reset your credentials.',
  },
  {
    title: 'Technical Issues?',
    description: 'Email technical@blissacademy.edu with details. We respond within 24 hours.',
  },
];
