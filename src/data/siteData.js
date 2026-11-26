import { asset } from '../utils/asset';

export const SITE_INFO = {
  name: 'NCA Associates',
  legalName: 'Nadia Cronje and Associates (Pty) Ltd.',
  shortName: 'NC Accounting',
  branchLabel: 'NC Accounting Randburg',
  tagline: 'Accounting, Taxation, Business Advisory and Business Management',
  subTagline: 'From complex taxation advice to business accounting services, our care and attention are unrivalled.',
  address: {
    street: '6 Heidi Avenue',
    suburb: 'Florida Glen',
    city: 'Roodepoort',
    metro: 'Johannesburg',
    postalCode: '1709',
    full: '6 Heidi Avenue, Florida Glen, Roodepoort, Johannesburg, 1709',
  },
  coordinates: {
    lat: -26.16301,
    lng: 27.93643,
  },
  phones: {
    landline: '+27 11 462 4036',
    landlineDisplay: '011 462 4036',
    sharecall: '08611MYTAX',
    fax: '086 508 8085',
    mobile: '+27 82 822 3609',
  },
  website: 'https://www.ncaccounting.co.za',
  googleMapsUrl: 'https://maps.app.goo.gl/Y6iEQZjWfRcfuqPP8',
  social: {
    linkedin: 'https://www.linkedin.com/in/nadia-cronje-8b5b7841/',
    facebook: 'https://www.facebook.com/nca.accounting',
    findAnAccountant: 'https://nadiacronjeandassociates.findanaccountant.co.za/',
  },
  hours: [
    { days: 'Monday – Friday', time: '08:00 – 16:00', open: true },
    { days: 'Saturday', time: 'Closed', open: false },
    { days: 'Sunday', time: 'Closed', open: false },
  ],
  alertLetterUrl: 'https://www.ncaccounting.co.za/images/Letter_to_NCA_Clients_24.03.2020-2.pdf',
};

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Products and Services', path: '/products-and-services' },
  { label: 'Associations', path: '/associations' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_SLIDES = [
  {
    eyebrow: 'We pride ourselves on building',
    title: 'Strong Business Relationships',
    subtitle: 'We pride ourselves on our close relationships with clients.',
    badge: '20+ Years Experience',
  },
  {
    eyebrow: 'South African Institute of Professional Accountants (SAIPA)',
    title: 'Financial, Legal & Tax Planning',
    subtitle: 'We can help with Financial, Legal, and Tax Planning tailored to your business and personal goals.',
    badge: 'SAIPA Registered Practice',
  },
  {
    eyebrow: 'Business Management',
    title: 'Pastel, Consulting & Data Fix',
    subtitle: 'End-to-end accounting systems, Sage Pastel expertise, and hands-on business advisory.',
    badge: 'Sage Pastel Business Partner',
  },
];

export const CORE_PILLARS = [
  {
    title: 'Accounting',
    description: 'Annual financial statements, monthly accounting assistance, management packs, and year-end procedures.',
    icon: 'Calculator',
  },
  {
    title: 'Taxation',
    description: 'Individual, company, CC, and trust tax returns, provisional tax, VAT 201, tax directives, and SARS compliance.',
    icon: 'FileCheck2',
  },
  {
    title: 'Business Advisory',
    description: 'Strategic consulting, statutory registrations, CIPC submissions, and clear financial guidance without the jargon.',
    icon: 'Briefcase',
  },
  {
    title: 'Business Management',
    description: 'Payroll administration, EMP201/EMP501 reconciliations, Sage Pastel Xpress & Partner, and data fixes.',
    icon: 'TrendingUp',
  },
];

export const ABOUT_CONTENT = {
  lead: 'The firm is headed by Nadia Cronje. Nadia has a total of 20 years\' experience in accounting, taxation, business advisory and business management. She completed her B.Compt degree and articles in 2005 and is registered as a Professional Accountant with the South African Institute of Professional Accountants (SAIPA).',
  whyChooseUs: 'The firm prides itself on delivering professional yet personal accounting and tax solutions for both businesses as well as individuals. We have a passion for what we do and focus on outstanding service delivery.',
  paragraphs: [
    'The firm is headed by Nadia Cronje. Nadia has a total of 20 years\' experience in accounting, taxation, business advisory and business management. She completed her B.Compt degree and articles in 2005 and is registered as a Professional Accountant with the South African Institute of Professional Accountants (SAIPA).',
    'The firm prides itself on delivering professional yet personal accounting and tax solutions for both businesses as well as individuals. We have a passion for what we do and focus on outstanding service delivery. It is important to approach each client differently, according to their needs.',
    'Away with all the jargon! We wish to make accounting and tax understandable for each of our clients in order to simplify compliance and the administration behind it.',
    'No matter how big or small, we have a solution for you or your business!',
  ],
  credentials: [
    'B.Compt Degree & Articles Completed (2005)',
    'Registered Professional Accountant (SAIPA)',
    'SAIT General Tax Practitioner',
    '20+ Years Industry Experience',
    'Sage Pastel Business Partner',
  ],
};

export const SERVICE_CATEGORIES = [
  {
    id: 'annual-accounting',
    title: 'Annual Accounting Fees',
    group: 'Accounting',
    summary: 'Comprehensive year-end financial reporting and statutory accounting.',
    items: [
      'Annual Financial Statements',
      'Accounting Assistance Annual (Capturing)',
      'AFS: Year-end Procedures (e.g. Fixed Asset Register, Stock takes)',
    ],
  },
  {
    id: 'monthly-accounting',
    title: 'Monthly Accounting Fees',
    group: 'Accounting',
    summary: 'Ongoing monthly bookkeeping, management reporting, and VAT compliance.',
    items: [
      'Accounting Assistance Monthly',
      'Management Pack',
      'Complete and Submit VAT 201 return',
    ],
  },
  {
    id: 'tax-services',
    title: 'Tax Services',
    group: 'Taxation',
    summary: 'Full-spectrum personal, corporate, and trust tax planning and SARS submissions.',
    items: [
      'Complete & Submit Income Tax Return: Individual',
      'Complete and Submit Income Tax Return: Trust',
      'Complete and Submit Income Tax Return: Company or CC',
      'Complete and Submit Provisional Tax Return',
      'Provisional Tax Calculation',
      'Income Tax Registration: Individual (eFiling)',
      'Income Tax Registration: Individual (Manual submission)',
      'Income Tax Registration: Company or CC',
      'Income Tax Registration: Trust',
      'Application for fixed % tax directive',
      'Apply for tax directive IT88L',
      'Deferred Payment Arrangements for Tax',
      'Tax Clearance Certificate',
    ],
  },
  {
    id: 'statutory-registrations',
    title: 'Statutory Registrations',
    group: 'Registrations & CIPC',
    summary: 'Company formations, CIPC annual returns, trusts, and SARS statutory registrations.',
    items: [
      'Company Registration Bundle (Company + VAT + PAYE + UIF + WCC + Income Tax Registrations)',
      'Annual Return Fee CC (this fee is determined by, and is payable to, the CIPC)',
      'Annual Return CIPC Enquiry Fee',
      'Annual Return Fee - Late (this fee is determined by, and is payable to, the CIPC)',
      'Annual Return Fee (Pty) Ltd - Turnover less than R10 million',
      'Annual Return Fee (Pty) Ltd - Turnover more than R10 million',
      'Annual Return Submission Fee - Turnover less than R10 million',
      'Annual Return Submission Fee - Turnover more than R10 million',
      'CIPC Search',
      'Complete and Submit CK2',
      'Statutory Registrations',
      'Deregistration of Close Corporation',
      'New Company Registration with CIPC',
      'Shelf Company Registration',
      'Trust Registration with Master',
      'Trust: Changes to Beneficiaries',
      'Trust: Changes to Clauses (per clause)',
      'Trust: Change Entire Deed',
      'Trust: Changes to Trustees',
      "Employer's Tax Registration (Pay As You Earn)",
      'UIF Registration',
      'VAT Registration',
      "Workmen's Compensation Registration",
    ],
  },
  {
    id: 'monthly-payroll',
    title: 'Monthly Payroll Fees',
    group: 'Payroll',
    summary: 'Accurate monthly payroll processing, structuring, and EMP201 submissions.',
    items: [
      'Payroll Services',
      'Payroll (Less than 6 employees)',
      'Salary Structure',
      'Complete and Submit EMP 201 return',
    ],
  },
  {
    id: 'annual-payroll',
    title: 'Annual Fees - Payroll',
    group: 'Payroll',
    summary: 'Bi-annual and annual EMP501 reconciliations, IRP5s, and COIDA returns.',
    items: [
      'EMP501 Reconciliation: 0 - 15 Employees',
      'EMP501 Reconciliation: 15 - 30 Employees',
      'EMP501 Reconciliation: 30 - 45 Employees',
      'EMP501 Reconciliation: more than 45 Employees',
      'Tax Certificates Issued to Employees (Only charged with final February Recon)',
      "Complete and Submit Workmen's Compensation Commission Return of Earnings",
    ],
  },
  {
    id: 'consulting-fees',
    title: 'Consulting Fees',
    group: 'Advisory & Pastel',
    summary: 'Dedicated financial, payroll, and accounting system troubleshooting.',
    items: [
      'Consulting Services',
      'Consulting - Data fix',
      'Payroll Consulting',
    ],
  },
  {
    id: 'pastel',
    title: 'Pastel',
    group: 'Advisory & Pastel',
    summary: 'Authorized Sage Pastel software solutions and support.',
    items: [
      'Pastel Xpress',
      'Pastel Partner',
    ],
  },
  {
    id: 'eme',
    title: 'Exempted Micro Enterprise',
    group: 'Compliance & Letters',
    summary: 'B-BBEE EME certificates and supporting letters.',
    items: [
      'BEE Certificate: Exempt Micro Enterprise',
      'EME Certificate and Letter',
    ],
  },
  {
    id: 'confirmation-letters',
    title: 'Confirmation Letters',
    group: 'Compliance & Letters',
    summary: 'Official accountant-signed confirmation letters for banks and institutions.',
    items: [
      'BEE Confirmation of Income',
      'Confirmation of Earnings',
    ],
  },
  {
    id: 'ad-hoc',
    title: 'Ad-Hoc Fees',
    group: 'Compliance & Letters',
    summary: 'Flexible assistance for banking requirements and eFiling administration.',
    items: [
      'Administration Assistance (e.g. eFiling)',
      'Management Accounts - as required by banks',
      'Travelling',
    ],
  },
];

export const ASSOCIATIONS = [
  {
    name: 'Sage Pastel',
    shortName: 'Sage Pastel',
    logo: asset('images/associations/sage-pastel.png'),
    category: 'Accounting Software Partner',
    description: [
      "Sage Pastel is South Africa's leading developer of accounting, payroll, ERP and business software for the small, medium and large enterprise market. Founded in 1989, Sage Pastel has developed an in-depth knowledge and understanding of the industry, establishing itself as the market leader and the preferred choice of South African businesses.",
      "Sage Pastel is headquartered in Johannesburg, South Africa, with branches in both Cape Town and Durban. In addition, Sage Pastel has over 3 500 Channel and Business Partners within South Africa and is used by businesses around the world. Sage Pastel's reputation as the trusted name in accounting and payroll software is reaffirmed by the fact that accountants recommend Sage Pastel.",
    ],
  },
  {
    name: 'South African Institute of Professional Accountants (SAIPA)',
    shortName: 'SAIPA',
    logo: asset('images/associations/saipa.jpg'),
    category: 'Professional Regulatory Body',
    description: [
      'SAIPA (the South African Institute of Professional Accountants) has launched its Centre of Excellence for quality tax practitioners wishing to specialise in the field of taxation to meet a higher standard of distinction.',
      'In terms of the Tax Administration Amendment Bill, SARS will only register members of approved professional bodies as tax practitioners. SAIPA has launched its Centre of Tax Excellence (CoTE). The tax centre invites applications from all tax practitioners who fit the criteria for the different designations.',
    ],
  },
  {
    name: 'Fasset',
    shortName: 'Fasset',
    logo: asset('images/associations/fasset.jpg'),
    category: 'Sector Education & Training Authority',
    description: [
      'Fasset is the Sector Education and Training Authority (SETA) for Finance, Accounting, Management Consulting and other Financial Services. 25 SETAs were established in March 2000 in terms of the Skills Development Act, to cover all sectors in South Africa, including government. The members of a SETA include employers, trade unions, professional bodies, government departments and bargaining councils, where relevant, from each industrial sector. The SETA landscape was revised to 23 SETAs in 2005 and to 21 SETAs in 2010. Visit www.dhet.gov.za for further information regarding SETAs.',
    ],
  },
  {
    name: 'South African Revenue Service (SARS)',
    shortName: 'SARS',
    logo: asset('images/associations/sars.jpg'),
    category: 'National Tax Authority',
    description: [
      "The South African Revenue Service (SARS) is the nation's tax collecting authority. Established in terms of the South African Revenue Service Act 34 of 1997 as an autonomous agency, SARS is responsible for administering the South African tax system and customs service.",
    ],
  },
  {
    name: 'Companies and Intellectual Property Commission (CIPC)',
    shortName: 'CIPC',
    logo: asset('images/associations/cipc.jpg'),
    category: 'Company & IP Regulatory Commission',
    description: [
      "The Companies and Intellectual Property Commission (CIPC), referred to as 'the Commission', was established through the amalgamation of the Office of Companies and Intellectual Property Enforcement (OCIPE) and the Companies and Intellectual Property Registration Office (CIPRO). The Commission is a juristic person, and as mandated by the Companies Act, 2008 (Act 71 of 2008), has jurisdiction throughout the Republic, is independent, and subject only to the Constitution and the law and any policy statement, directive or request issued to it by the Minister of Trade and Industry in terms of this Act. The Commission must be impartial and perform its functions without fear, favour or prejudice and must exercise its functions in the most cost-efficient and effective manner and in accordance with the values and principles mentioned in section 195 of the Constitution.",
    ],
  },
];

export const NEWS_ARTICLES = [
  {
    id: 'new-features-in-version-12',
    title: 'New Features in Version 12',
    date: '08 July 2019',
    category: 'Sage Pastel Update',
    image: asset('images/associations/pastel-news.png'),
    excerpt:
      'Manage your VAT periods and reporting using the new Sage Pastel Tax Manager. Closing VAT periods is essential to ensure correct VAT reporting to SARS and VAT reconciliations.',
    sections: [
      {
        heading: 'Manage your VAT periods and reporting using the new Sage Pastel Tax Manager',
        body: 'Closing VAT periods is essential to ensure correct VAT reporting to SARS and VAT reconciliations. With the new Tax Manager feature, you can set up your VAT reporting periods, process your transactions as usual, and at the end of each VAT period, print your VAT reports and close the period. Back-dated transactions will automatically form part of the next VAT period.',
      },
      {
        heading: 'Multiple company conversions',
        body: 'Gone are the days where you need to select and convert one company at a time. You can now convert multiple sets of data at once. This feature allows you to select the companies you wish to convert and it converts all of them into Sage Pastel Accounting Version 12.',
      },
      {
        heading: 'Duplicate reference numbers on customer documents',
        body: 'With Sage Pastel Accounting Version 12 you will now be warned when using the same reference number for the same customer. A little additional feature, but a big step towards helping you avoid processing duplicate orders.',
      },
      {
        heading: "What's still to come?",
        body: 'With the Automatic Updates feature in Version 12, Sage Pastel Cover customers can look forward to receiving new features delivered online, directly to their accounting program — including copying existing inventory items, a wizard to manage on-hold documents, and multiple email addresses for customers to separate invoices and statements.',
      },
    ],
  },
  {
    id: 'saipa-urgent-notification',
    title: 'SAIPA Urgent Notification',
    date: '08 July 2019',
    category: 'Regulatory Notice',
    image: asset('images/associations/saipa.jpg'),
    excerpt:
      'It has come to our attention that an individual by the name of David Bongani Msomi is offering final year accounting students accounting positions at a firm called Nemcorp. SAIPA wishes to distance itself from both Msomi and Nemcorp.',
    sections: [
      {
        heading: 'Official Public Warning from SAIPA',
        body: 'It has come to our attention that an individual by the name of David Bongani Msomi is offering final year accounting students accounting positions at a firm called Nemcorp. The prerequisite for joining Nemcorp is the payment of a fee ostensibly to register with SAIPA.',
      },
      {
        heading: 'Important Notice Regarding Fees',
        body: 'SAIPA wishes to distance itself from both Msomi and Nemcorp. We have no knowledge of said individual or firm. SAIPA does not instruct its members to collect any money on its behalf. All money due to SAIPA is payable into a SAIPA bank account.',
      },
      {
        heading: 'Verification & Queries',
        body: 'We wish to issue a warning to members of the public: Do not pay any cash money to any individual claiming to act on behalf of SAIPA. All queries regarding fees may be directed to Heide van der Westhuizen at heide@saipa.co.za.',
      },
    ],
  },
];

export const GOOGLE_REVIEWS = {
  rating: 5.0,
  totalReviews: 4,
  mapsUrl: 'https://maps.app.goo.gl/Y6iEQZjWfRcfuqPP8',
  items: [
    {
      author: 'John Livanos',
      rating: 5,
      time: 'a year ago',
      initials: 'JL',
      text: 'Nadia and Heinrich have been such a pleasure to work with. They have assisted me professionally for more than a decade. I highly recommend their services.',
    },
    {
      author: 'Angelo Van Wyk',
      rating: 5,
      time: '2 years ago',
      initials: 'AV',
      headline: 'Professional, Top-Notch Customer Service',
      text: "It comes with great pleasure to say I've known NCA Nadia Cronje & Associates for several years. They are a professional accountable accounting firm and member of a national professional regulatory body which gives me comfort. They assisted me previously and recently 2024 with my tax affairs in my personal capacity. I would like to sing their praises as they connected with me on a human level, submitted my return amongst other things in record time and gave me excellent customer service with great value. Thank you so much Heinrich and Nadia, I'm proud to be a customer of NCA. May your business grow from strength to strength.",
    },
    {
      author: 'Rendani Sidogi',
      rating: 5,
      time: '6 years ago',
      initials: 'RS',
      text: 'Excellent accounting and tax services for a reasonable price.',
    },
    {
      author: 'Apostolis Miliakidis',
      rating: 5,
      time: '11 years ago',
      initials: 'AM',
      text: 'Excellent service',
    },
  ],
};
