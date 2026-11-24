/* ==========================================================================
   SITE CONTENT — single source of truth
   --------------------------------------------------------------------------
   Edit this file to update the website. Every page reads from it.

   Conventions
   - Use `null` (or an empty string / empty array) for information that is
     not yet available. The site shows a clearly marked "to be added"
     placeholder while `settings.showPlaceholders` is true, and hides it
     completely when you set it to false (do that before going live).
   - Documents: { title: "...", file: "assets/documents/<folder>/<file>.pdf" }
     Leave `file: null` to show a placeholder slot for a document you will
     add later.
   - Links:     { label: "...", url: "https://..." }
   - All paths are relative to the website root.

   Source: CV "2026_05_CV_Navola___int_officer" (May 2026). Nothing here
   should be added that is not documented — keep it accurate.
   ========================================================================== */

window.SITE = {
  settings: {
    showPlaceholders: false, // true = show "to be added" markers while editing
    lastUpdated: "November 2026",
  },

  /* ---------------------------------------------------------------- PROFILE */
  profile: {
    name: "Navola Bekberganova",
    initials: "NB",
    headline: "Central & East European, Russian and Eurasian Studies",
    subheadline:
      "Migration · Political economy · Russia and its neighbourhood · Prospective PhD researcher",
    location: "Glasgow, United Kingdom",
    photo: "assets/images/profile.jpg",
    photoAlt: "Portrait of Navola Bekberganova",
    cv: "assets/documents/cv/Navola_Bekberganova_CV.pdf",
    intro:
      "Erasmus Mundus graduate in Central and East European, Russian and Eurasian Studies (Tartu, Glasgow, Corvinus) with research experience in migration policy and more than five years of professional work at the Central Bank of Uzbekistan, the International Organization for Migration and the University of Glasgow. I am looking for a doctoral position to study migration, economic interdependence and Russia's relations with its neighbourhood.",
    quickFacts: [
      { label: "Based in", value: "Glasgow, UK" },
      { label: "Master's", value: "CEERES Erasmus Mundus · IntM with Merit" },
      { label: "Languages", value: "English C2 · Russian C2 · Uzbek native" },
    ],
  },

  /* ---------------------------------------------------------------- CONTACT */
  contact: {
    email: "navola.bekberganova@gmail.com",
    // Optional: add a phone number here only if it should be public, e.g.
    // phone: { value: "+44 ...", public: true },
    phone: null,
    location: "Glasgow, United Kingdom",
    profiles: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/navolabekberganova", handle: "in/navolabekberganova", icon: "linkedin" },
      // Add your academic profiles below by replacing `url: null` with the link.
      { label: "ORCID", url: null, handle: null, icon: "orcid" },
      { label: "Google Scholar", url: null, handle: null, icon: "scholar" },
      { label: "ResearchGate", url: null, handle: null, icon: "researchgate" },
    ],
  },

  /* ---------------------------------------------------------- ORGANISATIONS */
  // Official websites. Any of these names appearing as an institution,
  // organisation or issuer on the site becomes a link automatically.
  // Add or edit entries here; the name must match the text exactly.
  organizations: {
    "University of Glasgow": "https://www.gla.ac.uk/",
    "University of Tartu": "https://ut.ee/en",
    "Johan Skytte Institute of Political Studies": "https://skytte.ut.ee/en",
    "Corvinus University of Budapest": "https://www.uni-corvinus.hu/",
    "University of Oxford, Saïd Business School": "https://www.sbs.ox.ac.uk/",
    "University of Oxford Saïd Business School": "https://www.sbs.ox.ac.uk/",
    "Women's World Banking": "https://www.womensworldbanking.org/",
    "AFI": "https://www.afi-global.org/",
    "Riga Graduate School of Law": "https://www.rgsl.edu.lv/",
    "University of World Economy and Diplomacy": "https://www.uwed.uz/",
    "Central Bank of Uzbekistan": "https://cbu.uz/en/",
    "Central Bank of the Republic of Uzbekistan": "https://cbu.uz/en/",
    "International Organization for Migration (IOM)": "https://www.iom.int/",
    "International Organization for Migration": "https://www.iom.int/",
    "Migration Research Institute (MCC)": "https://migraciokutato.hu/en/",
    "Asian Development Bank Institute (ADBI)": "https://www.adb.org/adbi",
    "Universidade da Coruña": "https://www.udc.gal/",
    "Banking and Finance Academy of the Republic of Uzbekistan": "https://bfa.uz/",
    "SESRIC": "https://www.sesric.org/",
    "OSCE Project Co-ordinator in Uzbekistan": "https://uzbekistan.osce.org/",
    "Surfers Against Sewage": "https://www.sas.org.uk/",
  },

  /* ------------------------------------------------------------------ ABOUT */
  about: {
    biography: [
      "I am a graduate of the CEERES Erasmus Mundus Joint Master in Central and East European, Russian and Eurasian Studies, based in Glasgow, where I work as Executive Support Officer at the University of Glasgow. My background combines academic training in the politics of Central and Eastern Europe and the post-Soviet space with professional experience in central banking, international organisations and higher education.",
      "From 2021 to 2024 I worked at the Central Bank of Uzbekistan, progressing from Project Officer to Project Manager – Senior Economist. I coordinated national financial education initiatives reaching more than two million citizens, ran a programme of more than 300 learning initiatives a year, and built long-term relationships with partners including the IMF, World Bank, OECD, AFI, embassies and universities worldwide.",
      "In 2025, as Project Coordinator / Consultant for the International Organization for Migration in Tashkent, I coordinated a USD 50,000 project combining stakeholder engagement, policy workshops and donor reporting, analysed survey findings for senior decision-makers, and produced a National Strategy on Financial Literacy.",
      "My research experience centres on migration. My master's thesis examined Hungary's shifting migration policy from the 2015 refugee crisis to the war in Ukraine, and during a research placement at the Migration Research Institute (MCC) in Budapest I wrote analyses on migration in Central Asia, the United Kingdom and the economic effects of migration.",
    ],
    journey: [
      "My academic path began with a bachelor's degree in World Economy and International Economic Relations at the University of World Economy and Diplomacy in Tashkent (2016–2020), where I was awarded a Central Bank of Uzbekistan special scholarship for students and was active in Model UN, OSCE and debate programmes.",
      "Alongside my early career at the Central Bank of Uzbekistan, I completed the Online Intensive Programme in European Law and Economics at the Riga Graduate School of Law (2021) and the Leadership and Diversity Program for Regulators at the University of Oxford Saïd Business School (2022).",
      "I then completed CEERES, an Erasmus Mundus Joint Master Degree in Central and East European, Russian and Eurasian Studies (2022–2024), studying at the University of Tartu, the University of Glasgow and Corvinus University of Budapest. I graduated with an International Master with Merit from the University of Glasgow.",
    ],
    motivation: [
      "I am interested in how states use migration, economic ties and policy to shape their neighbourhoods, and in how societies in Central and Eastern Europe and the post-Soviet space respond. My master's thesis traced how Hungary's migration policy shifted between the 2015 refugee crisis and the war in Ukraine, and at the Migration Research Institute in Budapest I wrote analyses on migration in Central Asia, migration in the United Kingdom, and its economic effects.",
      "My professional experience gives these questions a practical grounding. At the Central Bank of Uzbekistan I worked with the IMF, World Bank, OECD and AFI and saw how international partnerships shape national policy; at IOM I analysed survey data and prepared a national strategy in a politically sensitive environment. I work fluently in English and Russian and natively in Uzbek, which lets me use primary sources from Russia and Central Asia directly.",
    ],
    objectives: [
      "I am seeking a fully funded doctoral position, ideally within an international research network, to study the politics of migration, economic interdependence and Russia's relations with its neighbouring states.",
      "I value collaborative, interdisciplinary research and welcome the research mobility, secondments and training that come with doctoral networks, having already studied and worked across five countries.",
    ],
    strengths: [
      "Research on migration policy (master's thesis and research placement)",
      "Primary-source work in Russian (C2) and Uzbek (native)",
      "Training in social science methodology, Russian foreign policy and the geopolitics of Central Europe",
      "Survey analysis and reporting for senior decision-makers",
      "Policy development, including a national strategy",
      "Working with international partners: IMF, World Bank, OECD, AFI, IOM",
      "Multi-site study and work across five countries",
    ],
  },

  /* ---------------------------------------------- AREAS OF INTEREST (HOME) */
  // Each area is backed by documented study, research or work.
  interests: [
    {
      title: "Migration & its Politicisation",
      text: "Master's thesis on Hungary's migration policy from 2015 to the war in Ukraine, research analyses at the Migration Research Institute, and project work with IOM.",
    },
    {
      title: "Russia & its Neighbourhood",
      text: "Graduate training in Russian foreign policy, the geopolitics of Central Europe and security in Central Eastern Europe, with first-hand knowledge of Central Asia.",
    },
    {
      title: "Economic Interdependence",
      text: "A degree in world economy and international economic relations, and central-bank experience with the IMF, World Bank, OECD and AFI.",
    },
    {
      title: "Governance & Policy in Post-Soviet States",
      text: "National policy work in Uzbekistan: financial education reaching over 2 million citizens and a National Strategy on Financial Literacy.",
    },
  ],

  /* -------------------------------------------------------------- EDUCATION */
  education: [
    {
      degree: "International Master (Multiple Degree) — Central and East European, Russian and Eurasian Studies (CEERES)",
      institution: "University of Tartu · University of Glasgow · Corvinus University of Budapest",
      location: "Estonia · United Kingdom · Hungary",
      start: "Sep 2022",
      end: "Aug 2024",
      specialization: "Erasmus Mundus Joint Master Degree",
      description: "Two-year (120 ECTS) multiple-degree programme taught in English. Study periods at the University of Glasgow (Jan–May 2023) and Corvinus University of Budapest (Sep 2023–Feb 2024). Degrees awarded: International Master (IntM) with Merit, University of Glasgow; Master of Arts in Social Sciences, University of Tartu; Master of Arts in Political Science, Corvinus University of Budapest.",
      coursework: [
        "Introduction to Central and East European, Russian and Eurasian Studies",
        "Social Science Methodology",
        "The EU in International Politics",
        "Russian Foreign Policy",
        "The Geopolitics of Central Europe",
        "Challenges to Security in Central Eastern Europe",
        "Politics of Transition in East Central Europe",
        "Policies of the EU",
        "Regional Integrations and Strategies Crossing Borders",
        "Research placement",
      ],
      thesis: {
        title: "Hungary's Shifting Migration Policy: from the 2015 Refugee Crisis to the War in Ukraine",
        supervisor: "Sándor Gallai and Zsuzsanna Varga",
        summary: "Master's thesis (30 ECTS), Johan Skytte Institute of Political Studies, University of Tartu, 2024.",
      },
      documents: [
        { title: "University of Glasgow degree certificate (IntM with Merit)", file: "assets/documents/education/university-of-glasgow-intm-diploma-2024.pdf" },
        { title: "Master's thesis", file: "assets/documents/publications/bekberganova-2024-masters-thesis.pdf" },
      ],
      links: [{ label: "Thesis in the University of Tartu repository", url: "https://dspace.ut.ee/items/f3de742e-8f9f-4377-a01e-69621b7be3f6" }],
    },
    {
      degree: "Women's World Banking and AFI Leadership and Diversity Program for Regulators",
      institution: "University of Oxford, Saïd Business School",
      location: "Oxford, United Kingdom",
      start: "May 2022",
      end: "Aug 2022",
      specialization: "Executive education programme",
      description: "Delivered with Women's World Banking and the Alliance for Financial Inclusion (AFI).",
      coursework: undefined, // not applicable
      thesis: undefined, // undefined = not applicable (no placeholder shown)
      documents: [{ title: "Certificate of completion", file: "assets/documents/certificates/oxford-leadership-diversity-regulators-2022.pdf" }],
      links: [],
    },
    {
      degree: "Online Intensive Programme in European Law and Economics (non-degree)",
      institution: "Riga Graduate School of Law",
      location: "Riga, Latvia (online)",
      start: "Sep 2021",
      end: "Dec 2021",
      specialization: "European Political Economy",
      description: "Twelve-week programme on the legal, economic and political functioning of the European Union, taught in English for professionals from public administration, NGOs and academia.",
      coursework: [
        "European Political Economy",
        "National Policy Development and Good Governance",
        "Negotiation Techniques",
        "Economic Crisis Management",
        "Regional Monetary Integration",
        "Economic Development and International Trade",
      ],
      thesis: undefined,
      // The confirmation letter shows personal data, so it is not published.
      documents: [],
      links: [],
    },
    {
      degree: "Bachelor's Degree — World Economy and International Economic Relations",
      institution: "University of World Economy and Diplomacy",
      location: "Tashkent, Uzbekistan",
      start: "Sep 2016",
      end: "Jul 2020",
      specialization: "International Economic Relations and Management",
      description: "Speciality: World Economy and International Economic Relations (by regions and types of activity). Qualification: Specialist in Foreign Economic Activity. Awarded July 2020.",
      coursework: [],
      thesis: null,
      documents: [{ title: "Bachelor's diploma", file: "assets/documents/education/uwed-bachelor-diploma-2020.pdf" }],
      links: [],
    },
  ],

  /* ------------------------------------------------------------- EXPERIENCE */
  // Fields `team`, `objectives`, `methods` are optional — omit if not relevant.
  experience: [
    {
      id: "uofg-eso",
      role: "Executive Support Officer",
      organization: "University of Glasgow",
      team: "Commercial Services",
      location: "Glasgow, UK",
      start: "Dec 2025",
      end: "Present",
      summary: "Supporting the Executive Director and senior leadership team in Commercial Services.",
      responsibilities: [
        "Supporting the Executive Director and senior leadership team in Commercial Services, coordinating work across university services and liaising with HR, Finance, Estates and Procurement.",
        "Preparing leadership and Board meeting papers, briefings and action logs, bringing together contributions and following up agreed actions with colleagues.",
        "Facilitating collaboration between academic and professional services teams, supporting project and portfolio management, strategic documents and business cases.",
        "Coordinating meetings, events and engagement activities involving internal and external stakeholders.",
        "Supporting governance and committee processes, including monitoring budgets and ongoing objectives.",
      ],
      contributions: [],
      tags: ["Governance", "Board reporting", "Portfolio management", "Stakeholder engagement"],
      documents: [],
      links: [],
    },
    {
      id: "iom",
      featured: true,
      role: "Project Coordinator / Consultant",
      organization: "International Organization for Migration (IOM)",
      location: "Tashkent, Uzbekistan",
      start: "Mar 2025",
      end: "Dec 2025",
      summary: "Coordinated a USD 50,000 project combining stakeholder engagement, policy workshops and donor reporting in a politically sensitive environment.",
      responsibilities: [
        "Coordinated a USD 50,000 project, bringing together stakeholder engagement, policy workshops and donor reporting in a politically sensitive environment.",
        "Organised workshops and meetings with participants from different institutional and cultural backgrounds, supporting communication between partners and researchers.",
        "Analysed survey findings and complex information, producing reports and practical insights for senior decision-makers and programme delivery.",
      ],
      contributions: ["Produced the National Strategy on Financial Literacy."],
      tags: ["Project coordination", "Survey analysis", "Policy workshops", "Donor reporting"],
      documents: [
        { title: "Project report / summary", file: null },
      ],
      links: [],
    },
    {
      id: "uofg-esa",
      role: "Executive Support Assistant",
      organization: "University of Glasgow",
      location: "Glasgow, UK",
      start: "Oct 2024",
      end: "Dec 2025",
      summary: "Supported operational and administrative delivery across university services.",
      responsibilities: [
        "Supported delivery of operational and administrative activities across university services in a complex higher education environment.",
        "Coordinated meetings, communications and documentation involving internal and external stakeholders.",
        "Produced reports, summaries and briefing materials to support decision-making and service delivery.",
        "Delivered high-quality, customer-focused reports to the Board while managing multiple priorities and deadlines.",
      ],
      contributions: ["Transitioned from a part-time to a permanent full-time appointment following strong performance and delivery."],
      tags: ["Reporting", "Higher education administration"],
      documents: [],
      links: [],
    },
    {
      id: "mcc-research-intern",
      featured: true,
      role: "Research Intern",
      organization: "Migration Research Institute (MCC)",
      location: "Budapest, Hungary",
      start: "Oct 2023",
      end: "Nov 2023",
      summary: "160-hour research placement during the CEERES master's programme, supporting the institute's migration research.",
      responsibilities: [
        "Supported the institute's research projects through news monitoring and the preparation of background materials.",
      ],
      contributions: [
        "Wrote three analyses on different aspects of migration: Central Asia, the United Kingdom, and the effects of migration on the economy.",
      ],
      tags: ["Migration research", "Policy analysis", "Central Asia"],
      // The placement evaluation form is private and is intentionally not published.
      documents: [{ title: "Research analyses (if publishable)", file: null }],
      links: [],
    },
    {
      id: "uofg-external",
      role: "Assistant – External Relations (part-time)",
      organization: "University of Glasgow",
      location: "Glasgow, UK",
      start: "Jun 2023",
      end: "Aug 2024",
      summary: "Supported international programmes and summer schools involving more than 2,000 participants.",
      responsibilities: [
        "Coordinated visa, enrolment and communication logistics for international programmes involving more than 2,000 participants.",
        "Supported international summer school and event delivery, from planning and participant coordination to on-site support.",
        "Acted as a liaison between students, partners and programme teams, responding to enquiries and coordinating practical arrangements.",
      ],
      contributions: [],
      tags: ["International programmes", "Event delivery"],
      documents: [],
      links: [],
    },
    {
      id: "cbu-pm",
      featured: true,
      role: "Project Manager – Senior Economist",
      organization: "Central Bank of Uzbekistan",
      location: "Tashkent, Uzbekistan",
      start: "Jan 2023",
      end: "Oct 2024",
      summary: "Managed international partnerships and national financial education initiatives reaching more than 2 million citizens.",
      responsibilities: [
        "Built and maintained long-term relationships with external partners and stakeholders such as the IMF, World Bank, OECD, AFI, embassies and universities worldwide.",
        "Managed communication with international partners and national institutions, coordinating their input into financial education initiatives.",
        "Organised high-level international forums and workshops, bringing together partners and stakeholders to exchange expertise.",
      ],
      contributions: ["Contributed to national financial education initiatives reaching more than 2 million citizens."],
      tags: ["International partnerships", "Financial education", "Forums & workshops"],
      documents: [],
      links: [],
    },
    {
      id: "cbu-lead",
      role: "Project Lead – Lead Economist",
      organization: "Central Bank of Uzbekistan",
      location: "Tashkent, Uzbekistan",
      start: "Aug 2022",
      end: "Jan 2023",
      summary: "Led cross-functional financial literacy and public engagement projects.",
      responsibilities: [
        "Led cross-functional financial literacy and public engagement projects, coordinating colleagues and supervising volunteers involved in delivery.",
        "Coordinated a programme of more than 300 learning initiatives annually, alongside budget tracking, expense management and project reporting.",
        "Supported capacity-building activities, coordinated partnerships and student/staff exchanges.",
      ],
      contributions: [],
      tags: ["Project leadership", "Budget tracking", "Capacity building"],
      documents: [],
      links: [],
    },
    {
      id: "cbu-officer",
      role: "Project Officer – Junior Economist",
      organization: "Central Bank of Uzbekistan",
      location: "Tashkent, Uzbekistan",
      start: "Feb 2021",
      end: "Aug 2022",
      summary: "Supported public engagement and educational initiatives on financial literacy.",
      responsibilities: [
        "Supported delivery of public engagement and educational initiatives focused on financial literacy and awareness.",
        "Supported donor and partner engagement activities within international development initiatives.",
      ],
      contributions: ["Rapid promotion based on performance, stakeholder management and project delivery."],
      tags: ["Financial literacy", "Donor engagement"],
      documents: [],
      links: [],
    },
  ],

  /* ---------------------------------------------- VOLUNTEERING & ACTIVITIES */
  volunteering: [
    { title: "Volunteer — Byres Community Hub", organization: "Byres Community", location: "Scotland, UK", date: "Since 2026" },
    { title: "Volunteer — Beach Cleaning", organization: "Surfers Against Sewage", location: "Scotland, UK", date: "Since 2025" },
    { title: "Volunteer — BASEES 2023 Conference", organization: "University of Glasgow", location: "Glasgow, UK", date: "Mar 2023 – Apr 2023" },
    { title: "Volunteer — Elections", organization: "Ministry of Foreign Affairs", location: "Tashkent, Uzbekistan", date: "Oct 2019 – Dec 2019" },
  ],

  /* --------------------------------------------------------------- PROJECTS */
  // `null` fields show a placeholder; remove a field (or set to undefined)
  // to hide it entirely.
  projects: [
    {
      id: "masters-thesis",
      title: "Hungary's Shifting Migration Policy: from the 2015 Refugee Crisis to the War in Ukraine",
      category: "Academic",
      organization: "University of Tartu · CEERES Erasmus Mundus Joint Master",
      period: "2024",
      overview: "Master's thesis (30 ECTS) on how Hungary's migration policy moved from a security-focused response in 2015 to a more humanitarian one after the war in Ukraine began.",
      problem: "How and why did Hungary's migration policy shift from the 2015 refugee crisis to the war in Ukraine?",
      objectives: undefined, // add if you want to show them
      methodology: [
        "Comparison of two periods: 2015–2017 (EU migration crisis) and 2022–2023 (war in Ukraine).",
        "Analysis of migration statistics, legal documents and official speeches.",
      ],
      tools: ["Migration policy", "Policy & legal document analysis", "Political discourse", "Migration statistics"],
      results: [
        "Hungary moved from a strict, security-focused approach in 2015 to a more humanitarian response in 2022, accepting thousands of Ukrainian refugees.",
        "Concludes that the policy was shaped by sovereignty and the intensity of national interest.",
      ],
      image: "assets/images/projects/masters-thesis.svg",
      github: undefined,
      links: [{ label: "University of Tartu repository", url: "https://dspace.ut.ee/items/f3de742e-8f9f-4377-a01e-69621b7be3f6" }],
      documents: [{ title: "Thesis PDF", file: "assets/documents/publications/bekberganova-2024-masters-thesis.pdf" }],
    },
    {
      id: "mcc-migration-analyses",
      title: "Migration Analyses — Migration Research Institute",
      category: "Research",
      organization: "Migration Research Institute (MCC), Budapest",
      period: "Oct – Nov 2023",
      overview: "Three analyses written during a research placement, covering migration in Central Asia, migration in the United Kingdom, and the effects of migration on the economy.",
      problem: undefined,
      objectives: undefined,
      methodology: ["News monitoring and preparation of background materials for the institute's research projects."],
      tools: ["Migration research", "Desk research"],
      results: ["Three written analyses on migration."],
      image: "assets/images/projects/mcc-migration-analyses.svg",
      github: undefined,
      links: [],
      documents: [{ title: "Analyses (if publishable)", file: null }],
    },
    {
      id: "national-strategy-financial-literacy",
      title: "National Strategy on Financial Literacy",
      category: "Policy",
      organization: "International Organization for Migration",
      period: "2025",
      overview: "Produced a National Strategy on Financial Literacy during my role as Project Coordinator / Consultant with IOM in Uzbekistan.",
      problem: undefined,
      objectives: undefined,
      methodology: [],
      tools: ["Policy development", "Stakeholder engagement"],
      results: ["National Strategy on Financial Literacy produced."],
      image: "assets/images/projects/national-strategy.svg",
      github: undefined,
      links: [],
      documents: [{ title: "Strategy document or summary", file: null }],
    },
    {
      id: "iom-stakeholder-project",
      title: "Stakeholder Engagement, Policy Workshops & Survey Analysis",
      category: "Programme",
      organization: "International Organization for Migration",
      period: "Mar 2025 – Dec 2025",
      overview: "A USD 50,000 project combining stakeholder engagement, policy workshops and donor reporting in a politically sensitive environment.",
      problem: undefined,
      objectives: undefined,
      methodology: [
        "Workshops and meetings with participants from different institutional and cultural backgrounds.",
        "Analysis of survey findings and complex information.",
      ],
      tools: ["Survey analysis", "Policy workshops", "Donor reporting"],
      results: ["Reports and practical insights for senior decision-makers and programme delivery."],
      image: "assets/images/projects/stakeholder-workshops.svg",
      github: undefined,
      links: [],
      documents: [{ title: "Project report", file: null }],
    },
    {
      id: "cbu-financial-education",
      title: "National Financial Education Initiatives",
      category: "Programme",
      organization: "Central Bank of Uzbekistan",
      period: "2021 – 2024",
      overview: "Financial literacy and public engagement initiatives delivered with national institutions and international partners.",
      problem: undefined,
      objectives: undefined,
      methodology: [
        "Coordinating input from international partners (IMF, World Bank, OECD, AFI) and national institutions.",
        "High-level international forums and workshops.",
        "Cross-functional project teams supported by volunteers.",
      ],
      tools: ["Programme management", "Budget tracking", "Partnership management"],
      results: [
        "Initiatives reaching more than 2 million citizens.",
        "A programme of more than 300 learning initiatives annually.",
      ],
      image: "assets/images/projects/financial-education.svg",
      github: undefined,
      links: [],
      documents: [],
    },
    {
      id: "uofg-international-programmes",
      title: "International Programmes & Summer Schools",
      category: "Higher Education",
      organization: "University of Glasgow — External Relations",
      period: "Jun 2023 – Aug 2024",
      overview: "Visa, enrolment and communication logistics for international programmes and summer schools.",
      problem: undefined,
      objectives: undefined,
      methodology: [
        "Planning and participant coordination through to on-site support.",
        "Liaison between students, partners and programme teams.",
      ],
      tools: ["Event delivery", "Stakeholder liaison"],
      results: ["International programmes involving more than 2,000 participants."],
      image: "assets/images/projects/international-programmes.svg",
      github: undefined,
      links: [],
      documents: [],
    },
  ],

  /* ----------------------------------------------------------------- SKILLS */
  // No proficiency ratings — only skills documented in the CV.
  skills: [
    {
      category: "Research, Analysis & Reporting",
      items: ["Migration policy research", "Policy analysis", "Social science methodology", "Survey analysis", "Reports for senior decision-makers", "Briefing papers", "Policy strategy development", "Board papers & action logs"],
    },
    {
      category: "Programme & Project Management",
      items: ["Project coordination", "Portfolio management support", "Training design & delivery (Training of Trainers)", "Budget tracking", "Expense management", "Project reporting", "Business cases", "Supervising volunteers"],
    },
    {
      category: "Stakeholder Engagement & Partnerships",
      items: ["International partner relations (IMF, World Bank, OECD, AFI)", "Donor engagement & reporting", "Policy workshops", "International forums", "Negotiation", "Cross-cultural communication"],
    },
    {
      category: "Governance & Higher Education",
      items: ["Committee & governance processes", "Leadership support", "International programmes", "Visa & enrolment logistics", "Event delivery"],
    },
    {
      category: "Research & Technical Tools",
      items: ["Python", "MATLAB", "LaTeX"],
    },
    {
      category: "Digital & Office Tools",
      items: ["MS Office Suite (advanced): Word, Excel, PowerPoint, Outlook, Teams", "Agresso", "DotMailer", "Staffbase", "T4"],
    },
    {
      category: "Languages & Interpreting",
      items: ["English (C2)", "Russian (C2)", "Uzbek (native)", "Spanish (B1)", "French (A2)", "Simultaneous & consecutive interpreting", "Research with Russian- and Uzbek-language sources"],
    },
  ],

  /* ------------------------------------------- CERTIFICATES & ACHIEVEMENTS */
  // category must be one of the keys in `certificateCategories`.
  // Only certificates WITHOUT personal identifiers (date of birth, ID numbers,
  // ID photos) are published. Transcripts and recommendation letters never are.
  // `verifyUrl`: a credential-verification link, if the issuer provides one.
  certificateCategories: [
    { key: "award", label: "Awards, Honours & Scholarships" },
    { key: "programme", label: "Professional Programmes & Courses" },
    { key: "conference", label: "Conferences, Workshops & Forums" },
    { key: "diplomacy", label: "Model UN, Model OSCE & Debate" },
    { key: "achievement", label: "Professional Achievements" },
  ],
  certificates: [
    {
      category: "award",
      title: "Central Bank of Uzbekistan Special Scholarship for Students",
      issuer: "Central Bank of the Republic of Uzbekistan",
      date: "2019",
      description: "Winner of the Central Bank's special scholarship competition for students (bachelor's level, University of World Economy and Diplomacy).",
      documents: [{"title": "Certificate with English translation (compilation)", "file": "assets/documents/certificates/certificates-compilation-with-translations.pdf"}],
      verifyUrl: undefined,
    },
    {
      category: "award",
      title: "Winner — Second Uzbekistan Case-Championship",
      issuer: "Banking and Finance Academy of the Republic of Uzbekistan",
      date: "Oct 2020",
      description: "Certificate of Winner for outstanding abilities in solving cases.",
      documents: [{"title": "Certificate with English translation (compilation)", "file": "assets/documents/certificates/certificates-compilation-with-translations.pdf"}],
      verifyUrl: undefined,
    },
    {
      category: "award",
      title: "Certificate of Honour — “Elections 2019”",
      issuer: "Ministry of Higher and Secondary Specialised Education of Uzbekistan",
      date: "2020",
      description: "For successful participation in “Elections 2019” under the slogan “New Uzbekistan — New Elections”. Also completed a 48-hour training programme for volunteer interpreters.",
      documents: [{"title": "Certificate with English translation (compilation)", "file": "assets/documents/certificates/certificates-compilation-with-translations.pdf"}],
      verifyUrl: undefined,
    },
    {
      category: "award",
      title: "Zulfiya State Prize — District Stage, 1st-Degree Diploma (Science)",
      issuer: "Khokimiyat of Urgench District, Khorezm Region",
      date: null,
      description: "First-degree honorary diploma in the field of Science at the district stage of the competition for the Zulfiya State Prize for creative youth.",
      documents: [{"title": "Certificate with English translation (compilation)", "file": "assets/documents/certificates/certificates-compilation-with-translations.pdf"}],
      verifyUrl: undefined,
    },
    {
      category: "programme",
      title: "Leadership and Diversity Program for Regulators",
      issuer: "University of Oxford Saïd Business School, with Women's World Banking and AFI",
      date: "2022",
      description: "Executive education programme for financial regulators.",
      documents: [{"title": "Certificate", "file": "assets/documents/certificates/oxford-leadership-diversity-regulators-2022.pdf"}],
      verifyUrl: undefined,
    },
    {
      category: "programme",
      title: "Ministerial Workshop on Financial Strategy in Developing Countries",
      issuer: "Ministry of Commerce of the People's Republic of China · Shanghai Business School",
      date: "Oct 2021",
      description: "Workshop held in Shanghai, 15–21 October 2021. Certificate available on request.",
      documents: [],
      verifyUrl: undefined,
    },
    {
      category: "programme",
      title: "Financial Inclusion, Financial Literacy and Financial Education in Asia",
      issuer: "Asian Development Bank Institute (ADBI)",
      date: "Aug 2021",
      description: "Certificate of completion.",
      documents: [{"title": "Certificate", "file": "assets/documents/certificates/adbi-financial-inclusion-2021.pdf"}],
      verifyUrl: undefined,
    },
    {
      category: "programme",
      title: "Training of Trainers (21 hours)",
      issuer: "Global Competence, Tashkent",
      date: "2021",
      description: "Training design, modular programme structure, 14 training methods, gamification, group dynamics, pre- and post-training diagnostics, and synchronous online training.",
      documents: [{"title": "Certificate (Russian)", "file": "assets/documents/certificates/training-of-trainers-2021.pdf"}],
      verifyUrl: undefined,
    },
    {
      category: "programme",
      title: "International Summer School — Power of Persuasion and Negotiation Skills",
      issuer: "Universidade da Coruña, Spain",
      date: "Jul – Aug 2019",
      description: "42 teaching hours, 6 ECTS credits; examinations passed.",
      documents: [{"title": "Certificate", "file": "assets/documents/certificates/udc-summer-school-negotiation-2019.jpg"}],
      verifyUrl: undefined,
    },
    {
      category: "programme",
      title: "Professional Skills Program",
      issuer: "University of Glasgow",
      date: "May 2023",
      description: null,
      documents: [{"title": "Certificate", "file": null}],
      verifyUrl: undefined,
    },
    {
      category: "conference",
      title: "Operational Risk Management in Banks under Basel III",
      issuer: "Central Bank of the Russian Federation (Bank of Russia University)",
      date: "Sep 2021",
      description: "Videoconference on improving operational risk management in banks under the new standardised approach of Basel III.",
      documents: [{"title": "Certificate (Russian)", "file": "assets/documents/certificates/bank-of-russia-basel-iii-2021.pdf"}],
      verifyUrl: undefined,
    },
    {
      category: "conference",
      title: "Developing Strategies on Enhancing Public Perception of TVET",
      issuer: "SESRIC · Ministry of Education Malaysia",
      date: "Sep 2021",
      description: "Training workshop, 21–23 September 2021.",
      documents: [{"title": "Certificate", "file": "assets/documents/certificates/sesric-tvet-workshop-2021.pdf"}],
      verifyUrl: undefined,
    },
    {
      category: "conference",
      title: "Central Asian Media Forum",
      issuer: "Almaty, Kazakhstan",
      date: "Jun 2018",
      description: "“Information image of Greater Eurasia: the role of media in shaping the future of the Eurasian continent”.",
      documents: [{"title": "Certificate with English translation (compilation)", "file": "assets/documents/certificates/certificates-compilation-with-translations.pdf"}],
      verifyUrl: undefined,
    },
    {
      category: "conference",
      title: "Organiser — Second Republican Student Scientific Conference",
      issuer: "University of World Economy and Diplomacy",
      date: "May 2018",
      description: "Organised and took part in the conference “The Role and Importance of Psychology in the Training of Diplomatic Personnel”.",
      documents: [{"title": "Certificate", "file": "assets/documents/certificates/uwed-student-conference-organiser-2018.jpg"}],
      verifyUrl: undefined,
    },
    {
      category: "conference",
      title: "Organiser — UWED Week 2017 · Volunteer — INNOWEEK 2018",
      issuer: "University of World Economy and Diplomacy · Ministry of Innovative Development of Uzbekistan",
      date: "2017 – 2018",
      description: "Certificates of appreciation for organising UWED Week 2017 and for volunteering at INNOWEEK, the week of innovative ideas (October 2018).",
      documents: [{"title": "Certificate with English translation (compilation)", "file": "assets/documents/certificates/certificates-compilation-with-translations.pdf"}],
      verifyUrl: undefined,
    },
    {
      category: "diplomacy",
      title: "Model OSCE for Youth",
      issuer: "OSCE Project Co-ordinator in Uzbekistan · University of World Economy and Diplomacy",
      date: "Sep 2020",
      description: "Participant, 2–4 September 2020, Tashkent.",
      documents: [{"title": "Certificate", "file": "assets/documents/certificates/model-osce-youth-2020.jpg"}],
      verifyUrl: undefined,
    },
    {
      category: "diplomacy",
      title: "Under-Secretary-General for Delegate Relations — UWED Model UN",
      issuer: "United Nations in Uzbekistan · University of World Economy and Diplomacy",
      date: "May 2018",
      description: "Letter of appreciation for organising and conducting the Model United Nations Conference, 11–13 May 2018.",
      documents: [{"title": "Letter of appreciation", "file": "assets/documents/certificates/uwed-model-un-organiser-2018.jpg"}],
      verifyUrl: undefined,
    },
    {
      category: "diplomacy",
      title: "Committee Chair (Shanghai Cooperation Organization) — Model III Conference",
      issuer: "Fergana State University",
      date: "Oct 2018",
      description: "Certificate of appreciation for an outstanding contribution as Chair of the SCO committee at the First International Model III Conference, Fergana.",
      documents: [{"title": "Certificate with English translation (compilation)", "file": "assets/documents/certificates/certificates-compilation-with-translations.pdf"}],
      verifyUrl: undefined,
    },
    {
      category: "diplomacy",
      title: "Best Team — “Debates by Karl Popper” (in Russian)",
      issuer: "University of World Economy and Diplomacy",
      date: "Nov 2017",
      description: "Team award during UWED Week 2017.",
      documents: [{"title": "Certificate", "file": "assets/documents/certificates/uwed-debates-best-team-2017.jpg"}],
      verifyUrl: undefined,
    },
    {
      category: "diplomacy",
      title: "Model UN and simulation conferences (delegate)",
      issuer: "Various institutions, Tashkent",
      date: "2017 – 2019",
      description: "UN Information Office & UWED Model UN (May 2017); First Diplomatic Assembly Model UN (Feb 2018); International Union V Conference (Feb 2018); WIUT International Model UN (Mar 2018); UWED Model UN (May 2019).",
      documents: [{"title": "Certificate with English translation (compilation)", "file": "assets/documents/certificates/certificates-compilation-with-translations.pdf"}],
      verifyUrl: undefined,
    },
    {
      category: "achievement",
      title: "Rapid promotion at the Central Bank of Uzbekistan",
      issuer: "Central Bank of Uzbekistan",
      date: "2021 – 2023",
      description: "Promoted from Project Officer – Junior Economist to Project Lead – Lead Economist and then Project Manager – Senior Economist, based on performance, stakeholder management and project delivery.",
      documents: [],
      verifyUrl: undefined,
    },
    {
      category: "achievement",
      title: "Permanent full-time appointment",
      issuer: "University of Glasgow",
      date: "2024 – 2025",
      description: "Transitioned from a part-time to a permanent full-time appointment following strong performance and delivery.",
      documents: [],
      verifyUrl: undefined,
    },
  ],

  /* -------------------------------------------------------------- LANGUAGES */
  languages: [
    { name: "Uzbek", level: "Native", cefr: null, certificates: [] },
    { name: "English", level: "Fluent", cefr: "C2", certificates: [] }, // e.g. [{ title: "IELTS", file: "assets/documents/certificates/ielts.pdf" }]
    { name: "Russian", level: "Fluent", cefr: "C2", certificates: [] },
    { name: "Spanish", level: "Intermediate", cefr: "B1", certificates: [] },
    { name: "French", level: "Basic", cefr: "A2", certificates: [] },
  ],
  languageNote: "Experienced in simultaneous and consecutive interpreting.",

  /* ----------------------------------------------------------- PUBLICATIONS */
  // No publications are listed in the CV. Add entries like this:
  // {
  //   type: "Journal article",   // Conference paper, Workshop, Technical report, Thesis, Preprint
  //   title: "...",
  //   authors: "N. Bekberganova, A. Author",
  //   venue: "Journal / Conference name",
  //   date: "2026",
  //   abstract: "...",
  //   doi: "https://doi.org/...",
  //   documents: [{ title: "PDF", file: "assets/documents/publications/paper.pdf" }],
  //   bibtex: "@article{...}"
  // },
  publications: [
    {
      type: "Master's thesis",
      title: "Hungary's Shifting Migration Policy: from the 2015 Refugee Crisis to the War in Ukraine",
      authors: "Navola Bekberganova",
      venue: "University of Tartu, Johan Skytte Institute of Political Studies — CEERES Erasmus Mundus Joint Master",
      date: "2024",
      supervisors: "Sándor Gallai, Zsuzsanna Varga",
      abstract: "The thesis argues that Hungary's migration policy shifts with changes in national interest and sovereignty. It contrasts the strict, security-focused approach adopted after the 2015 EU migration crisis with the more humanitarian response to the war in Ukraine in 2022, when Hungary accepted thousands of Ukrainian refugees. The analysis draws on migration statistics, legal documents and official speeches from 2015–2017 and 2022–2023.",
      keywords: ["Migration policy", "Migration crises", "National interest", "Security", "Hungary"],
      links: [{ label: "Full text (open access, CC BY-NC-ND)", url: "https://dspace.ut.ee/items/f3de742e-8f9f-4377-a01e-69621b7be3f6" }],
      doi: null,
      // Copy of the repository PDF (CC BY-NC-ND 3.0 EE) without the university deposit-licence
      // page, which contains a date of birth. The full original is kept privately in all docs/.
      documents: [
        { title: "Thesis PDF", file: "assets/documents/publications/bekberganova-2024-masters-thesis.pdf" },
      ],
      bibtex: `@mastersthesis{bekberganova2024hungary,
  author  = {Bekberganova, Navola},
  title   = {Hungary's Shifting Migration Policy: From the 2015 Refugee Crisis to the War in Ukraine},
  school  = {University of Tartu},
  year    = {2024},
  type    = {Master's thesis},
  url     = {https://dspace.ut.ee/items/f3de742e-8f9f-4377-a01e-69621b7be3f6}
}`,
    },
  ],
};
