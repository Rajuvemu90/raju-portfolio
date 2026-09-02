// src/data/portfolioData.js

export const rjData = {
  profile: {
    name: "RAJU V",
    title: "Principal CRM Architect & Enterprise Solutions Engineer",
    email: "vemu90raju@gmail.com",
    cell: "+1 (445) 622-2159",
    location: "Augusta, GA",
    education: "Bachelor of Engineering in Computer Science — SATI, 2011",
    summary: [
      "13+ years of leadership in designing, specializing, and architecting Microsoft Dynamics 365 CE, Power Platform, and Azure enterprise solutions across highly regulated spaces like Healthcare, Fintech, and Global Retail.",
      "Expertise spanning core financial systems automation, large-scale secure data migrations, cross-platform API integrations (including SAP S/4HANA), and comprehensive dev governance under strict regulatory frameworks like HIPAA, SOX, and FINRA."
    ]
  },
  
  metrics: [
    { value: "13+", label: "Years Scale Experience" },
    { value: "4", label: "Industry Verticals" },
    { value: "Zero", label: "Migration Downtime" },
    { value: "Enterprise", label: "Architecture Grade" }
  ],

  // Distinct tech groups to map into crisp UI badges
  skills: {
    platforms: ["Dynamics 365 CRM & F&O", "Power Apps (Canvas/Model-Driven)", "Dataverse", "Power Automate", "Azure Logic Apps", "Deltek Vision / VantagePoint"],
    backend: ["C# (.NET 7/6)", ".NET Core", "ASP.NET MVC", "X++ (AX/D365)", "WCF / REST / SOAP APIs", "High-Availability Infrastructure"],
    data: ["SQL Server (2019/2022)", "T-SQL / PL/SQL", "SSIS / SSRS / SSAS", "Azure Data Factory", "Azure Service Bus", "Data Replication Framework (DRF)"],
    frontend: ["JavaScript (ES6+)", "jQuery", "FetchXML", "HTML5 / CSS3", "Responsive Custom UI/UX"],
    governance: ["Azure DevOps / CI/CD Pipelines", "ALM / Lifecycle Services (LCS)", "HIPAA & SOX Compliance", "Environment Strategy & DLP Policies"]
  },

  experience: [
    {
      company: "KAISER PERMANENTE",
      location: "Upper Marlboro, MD",
      role: "Lead Microsoft Dynamics 365 Architect",
      period: "April 2023 - Present",
      description: "Spearheaded enterprise-wide CRM/ERP transformations and automated cloud deployment workflows for a multi-entity, HIPAA-regulated healthcare environment.",
      bullets: [
        "Architected bi-directional data synchronizations using Azure Logic Apps, Functions, Service Bus, and Dual-Write to securely bridge D365 with core EMR/EHR platforms.",
        "Customized core D365 Finance & Supply Chain modules using X++ and C# to streamline complex procurement, inventory, and automated invoice routing.",
        "Established rigid platform security baselines integrating role-based access control (RBAC) and Dataverse data models to eliminate compliance risks."
      ]
    },
    {
      company: "THE GOLDMAN SACHS INC.",
      location: "Jersey City, NJ",
      role: "Senior Microsoft Dynamics 365 Developer",
      period: "December 2018 - March 2023",
      description: "Engineered omnichannel banking engagement models and high-throughput transactional frameworks for core retail banking and wealth management systems.",
      bullets: [
        "Designed high-volume integration pipelines via KingswaySoft SSIS and Azure Data Factory, enabling seamless daily data handshakes with core payment and SWIFT systems.",
        "Led X++ code remediation and system modernizations migrating legacy AX 2012 R3 landscapes up to modern cloud-native Dynamics 365 configurations.",
        "Built document processing automation pipelines using AI Builder and Power Automate to digitize and accelerate secure KYC verification and fraud detection workflows."
      ]
    },
    {
      company: "OMADA HEALTH",
      location: "San Francisco, CA",
      role: "Senior Microsoft Dynamics 365 & Power Platform Developer",
      period: "February 2017 - November 2018",
      description: "Designed scalable, compliant clinical operation workflows within a highly protected digital healthcare SaaS ecosystem.",
      bullets: [
        "Implemented least-privilege role-based access boundaries to secure Protected Health Information (PHI) across CRM and integrated databases.",
        "Boosted platform responsiveness by profiling and tuning performance bottlenecks across complex client-side JavaScript layers and backend SQL query logic.",
        "Configured robust CI/CD code promotion paths using Azure DevOps to ensure automated gate approvals between sandbox and production clusters."
      ]
    },
    {
      company: "ZULILY",
      location: "Salt Lake City, UT",
      role: "Microsoft Dynamics CRM Consultant",
      period: "April 2015 - January 2017",
      description: "Built automated data routing paths connecting front-facing digital customer profiles to backend logistical tracking tools.",
      bullets: [
        "Authored custom server-side C# plugins hooked directly into the D365 core pipeline to evaluate and process high-velocity online transaction rules.",
        "Designed and maintained automated nightly ETL logic to sync contacts, orders, and fulfillment pipelines across SAP and legacy inventory databases."
      ]
    },
    {
      company: "ZIONS BANCORPORATION",
      location: "Salt Lake City, UT",
      role: ".NET Developer",
      period: "January 2013 - March 2015",
      description: "Pioneered early low-code conversion programs turning manual, fragmented paperwork tracking sheets into digital workflows.",
      bullets: [
        "Engineered automated multi-tier approval chains and escalation paths using Power Automate to minimize turnaround overhead for banking audits.",
        "Built data validation layers tracking flow histories to intercept bottleneck exceptions and ensure compliance with strict internal financial controls."
      ]
    }
  ],
  projects: [
  {
    id: "healthcare-modernization",
    title: "Enterprise Healthcare CRM Modernization",
    client: "Kaiser Permanente",
    role: "Lead Microsoft Dynamics 365 Architect",
    impact: "Enterprise CRM & ERP Transformation",
    description:
      "Architected and delivered Microsoft Dynamics 365 CE, Power Platform, Azure, and Finance & Operations solutions for a multi-entity healthcare organization, modernizing enterprise workflows, strengthening platform security, and automating mission-critical business processes.",
    tech: [
      "Dynamics 365 CE",
      "Power Platform",
      "Azure Functions",
      "Azure Logic Apps",
      "Dataverse",
      "Power BI",
      "C#",
      ".NET"
    ],
    metrics: [
      "HIPAA-Compliant Architecture",
      "Azure Cloud Integration",
      "Enterprise Workflow Automation"
    ]
  },

  {
    id: "banking-digital-platform",
    title: "Enterprise Banking Digital Platform",
    client: "The Goldman Sachs",
    role: "Senior Microsoft Dynamics 365 Developer",
    impact: "Omnichannel Banking Modernization",
    description:
      "Designed enterprise Dynamics 365 CRM and Finance & Operations solutions integrating banking systems, payment platforms, Azure services, and Power Platform to support secure customer engagement, regulatory compliance, and financial operations.",
    tech: [
      "Dynamics 365",
      "Power Apps",
      "Azure Data Factory",
      "Power BI",
      "SQL Server",
      "Dataverse",
      "C#",
      ".NET"
    ],
    metrics: [
      "Enterprise CRM Integration",
      "Regulatory Compliance",
      "CI/CD Delivery Pipeline"
    ]
  },

  {
    id: "healthcare-saas",
    title: "Healthcare SaaS CRM Platform",
    client: "Omada Health",
    role: "Senior Microsoft Dynamics 365 & Power Platform Developer",
    impact: "HIPAA-Compliant Healthcare Solutions",
    description:
      "Developed secure Dynamics 365 CE and Power Platform solutions for healthcare operations by implementing scalable CRM workflows, Azure integrations, Dataverse architecture, and enterprise governance supporting clinical business processes.",
    tech: [
      "Dynamics 365 CE",
      "Power Apps",
      "Power Automate",
      "Azure",
      "Dataverse",
      "Power BI",
      "REST APIs"
    ],
    metrics: [
      "Power Platform Automation",
      "Role-Based Security",
      "Healthcare Compliance"
    ]
  },

  {
    id: "crm-erp-integration",
    title: "Enterprise CRM & ERP Integration",
    client: "Zulily",
    role: "Microsoft Dynamics CRM Consultant",
    impact: "Cross-Platform Business Integration",
    description:
      "Designed CRM-to-ERP integration solutions connecting Microsoft Dynamics, SAP, Oracle, and enterprise applications using APIs, ETL pipelines, workflow automation, and secure enterprise data synchronization.",
    tech: [
      "Dynamics 365",
      ".NET",
      "SQL Server",
      "Power Automate",
      "REST APIs",
      "SOAP",
      "Azure"
    ],
    metrics: [
      "Enterprise API Integration",
      "Workflow Automation",
      "Data Synchronization"
    ]
  },

  {
    id: "workflow-automation",
    title: "Enterprise Workflow Automation",
    client: "Zions Bancorporation",
    role: ".NET Developer",
    impact: "Digital Business Process Automation",
    description:
      "Built Microsoft Power Platform automation solutions that transformed manual banking workflows into secure digital approval processes, improving operational efficiency and governance across enterprise teams.",
    tech: [
      "Power Automate",
      "Power Platform",
      "SharePoint",
      "Microsoft Teams",
      "Microsoft 365",
      "REST APIs"
    ],
    metrics: [
      "Approval Workflow Automation",
      "Enterprise Process Digitization",
      "Microsoft 365 Integration"
    ]
  },

  {
    id: "cloud-migration",
    title: "Enterprise Cloud Migration Framework",
    client: "Multiple Enterprise Programs",
    role: "Solution Architect",
    impact: "Legacy System Modernization",
    description:
      "Led enterprise migration initiatives from legacy CRM and ERP platforms to Microsoft Dynamics 365 using Azure services, Dataverse, SSIS, and DevOps, establishing scalable cloud-first architectures and modern deployment practices.",
    tech: [
      "Dynamics 365",
      "Azure DevOps",
      "Azure Data Factory",
      "SSIS",
      "Dataverse",
      "SQL Server",
      "Power Platform"
    ],
    metrics: [
      "Cloud Migration Strategy",
      "Enterprise Data Governance",
      "Automated CI/CD Delivery"
    ]
  }
]
};
