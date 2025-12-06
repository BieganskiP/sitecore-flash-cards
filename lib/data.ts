// Initial data structure - sections will be populated by the user later
import { Section, LearningPhase, Course } from "./types";

export const learningPhases: LearningPhase[] = [
  {
    id: "flash-exposure",
    name: "Phase A: Flash Exposure",
    description: "Skim for structure (15-20 min max) - no memorization needed",
  },
  {
    id: "flashcards",
    name: "Phase B: Active Recall",
    description: "Review flashcards for quick retention",
  },
  {
    id: "teach-back",
    name: "Phase C: Teach-Back",
    description: "Explain concepts in your own words",
  },
  {
    id: "quiz",
    name: "Phase D: Quiz Mode",
    description: "Test with scenario-based questions",
  },
];

// Sections populated with official Sitecore Learning content
export const sections: Section[] = [
  // Add new sections here as you provide Sitecore Learning content
  {
    id: "sitecoreai-cms-fundamentals",
    title: "SitecoreAI CMS Fundamentals",
    description: "Core terminology, SaaS benefits, and platform overview",
    estimatedTime: 18,

    content: `# SitecoreAI CMS Fundamentals

## What is SitecoreAI CMS?

SitecoreAI CMS is a **SaaS-based, headless CMS** designed for modern digital experiences.

**Key characteristics:**
- Cloud-native and fully managed
- Composable architecture
- API-first approach
- Powered by Next.js and Experience Edge

## SaaS Benefits

### Faster Development
No server management needed. Teams focus on **building innovative front-end experiences** instead of infrastructure.

### API-First Integration
Simple integration with best-of-breed technologies. Build your **composable architecture** easily.

### Reduced Infrastructure Costs
**Sitecore handles:**
- All hosting and scaling
- System maintenance
- Automatic updates

**You get:**
- Lower infrastructure costs
- Faster deployment cycles
- No manual server management

### Automatic Scaling
Cloud-native architecture scales automatically during peak traffic. No manual intervention required.

**Experience Edge** enhances delivery speed globally.

### Continuous Updates
Automatic updates and new features. No costly upgrades needed. Always access to **latest capabilities**.

### Developer Flexibility
Use your preferred front-end technology. **Headless architecture** + Next.js SDK = great developer experience.

## Core Components

### Content Management (CM) Instance
The heart of your SitecoreAI environment.

**What you do here:**
- Create and edit content
- Manage publishing
- Configure content modeling
- Set up workflows
- Handle translations and permissions

### Experience Edge
**GraphQL API-based service** for content delivery.

**Features:**
- CDN distribution
- Fast content retrieval
- Publishing target for SitecoreAI CMS
- Hosted by Sitecore

### Rendering Host
Your **front-end application** (e.g., Next.js).

**Purpose:**
- Displays website to users
- Hosted on platforms like Vercel
- Scaled to serve live traffic
- Separate from content management

### Deploy App
UI for **managing environments and deployments**.

**Includes:**
- Project creation walkthrough
- Detailed deployment logs
- Status monitoring
- Centralized project management

## Key Terminology

### Organization
A business unit (company/brand) in Sitecore.

**Contains:**
- Related team members
- Product subscriptions
- Access rules and permissions

**Managed in:** Cloud Portal

### Project
Logical grouping of **SitecoreAI CMS environments**.

**Can include:**
- Development environments
- Testing environments
- Production environments

**Created via:** Deploy app, CLI, or REST APIs

### Environment
Entity holding configurations, code, and implementations.

**Each environment has:**
- Single CM instance
- Experience Edge tenant
- Databases and indexes
- Automation clients
- Environment variables
- Rendering hosts
- App tenant

### Site
Collection of pages in SitecoreAI CMS.

**Key point:** Always headless (front-end separated from content management)

### Site Collection
Parent item grouping related sites.

**Used for:**
- Organizing by business unit/brand
- Sharing content between sites
- Managing data templates
- Sharing digital assets

### Items & Fields
**Items:** Building blocks of Sitecore (pages, templates, designs, etc.)

**Fields:** Properties that store item data (simple or complex)

**Identified by:**
- GUID (unique ID)
- Path in project
- Item name

### Templates (Data Templates)
Define structure of content items.

**Contains:**
- Fields organized in sections
- Field names and types
- Inherited definitions from base templates

**Standard Template:** Default base template most templates inherit from

### Rendering & Components
**Rendering:** Configuration item for a component

**Rendering Variant:** Different layout for same data

**Rendering Parameters:** Control component presentation (CSS, dimensions, variants)

**Data Source:** External content called by components at runtime

### SitecoreAI CMS Starter Kit
Open-source code base for implementations.

**Includes:**
- Local development resources
- JSS and headless libraries
- Headless SXA components (Next.js)
- Personalization middleware
- Analytics middleware

## Important Concepts

### Environment Variables
Key-value pairs controlling environment setup.

**Three types:**
- System variables
- User-controlled variables
- Custom variables

**Stored:** Outside source code (.env files)

### Sitecore Cloud Portal
Central hub for all Sitecore DXP products.

**Use it to:**
- Manage organization and users
- Access SitecoreAI CMS
- Access Content Hub ONE
- Access Deploy app

**URL:** https://portal.sitecorecloud.io

## Component Types

### Responsive Component
Adjusts presentation based on **screen width**.

### Dynamic Component
Adapts based on **user interactions or data**.

**Examples:**
- Collapsible menus
- Carousels
- Live chat widgets
- Data-driven sliders

## Key Takeaways

- **SaaS = Managed infrastructure** (Sitecore handles it)
- **Headless = Flexible front-end** (use any technology)
- **Composable = Best-of-breed** (integrate what you want)
- **Cloud-native = Auto-scaling** (no manual intervention)
- **API-first = Easy integration** (GraphQL via Experience Edge)`,

    flashcards: [
      {
        id: "saas-1",
        question: "What type of platform is SitecoreAI CMS?",
        answer:
          "A SaaS-based, headless CMS with composable architecture, API-first approach, powered by Next.js and Experience Edge.",
        difficulty: "easy",
      },
      {
        id: "saas-2",
        question: "What are the three main infrastructure benefits of SaaS?",
        answer:
          "1) Sitecore handles hosting and scaling, 2) Automatic maintenance and updates, 3) Lower infrastructure costs and faster deployments.",
        difficulty: "easy",
      },
      {
        id: "saas-3",
        question: "What is the Content Management (CM) instance?",
        answer:
          "The heart of SitecoreAI where you create, edit, and store content, manage publishing, workflows, translations, and permissions.",
        difficulty: "easy",
      },
      {
        id: "saas-4",
        question: "What is Experience Edge and what does it do?",
        answer:
          "A GraphQL API-based service endpoint that delivers content through a CDN. It's the SitecoreAI CMS publishing target.",
        difficulty: "medium",
      },
      {
        id: "saas-5",
        question:
          "What is the difference between a Site and a Site Collection?",
        answer:
          "A Site is a collection of pages. A Site Collection is a parent item that groups related sites to organize them and share content between them.",
        difficulty: "medium",
      },
      {
        id: "saas-6",
        question: "What is the rendering host?",
        answer:
          "The front-end application (like Next.js) that displays the website to users. It's hosted separately on platforms like Vercel.",
        difficulty: "medium",
      },
      {
        id: "saas-7",
        question: "What is a template (data template) in Sitecore?",
        answer:
          "Templates define the structure of content items. They contain fields organized in sections and can inherit from base templates.",
        difficulty: "medium",
      },
      {
        id: "saas-8",
        question: "What's the hierarchy: Organization, Project, Environment?",
        answer:
          "Organization (top) > Project (logical grouping) > Environment (specific instance). An org has projects, projects have environments.",
        difficulty: "hard",
      },
      {
        id: "saas-9",
        question: "What are Items in Sitecore?",
        answer:
          "Items are the building blocks - almost everything is an item (pages, templates, designs). They're objects with fields, identified by GUID, path, and name.",
        difficulty: "easy",
      },
      {
        id: "saas-10",
        question: "What does the SitecoreAI Deploy app do?",
        answer:
          "UI for managing environments and deployments. Handles project creation, shows deployment logs, monitors status, and centralizes project management.",
        difficulty: "medium",
      },
    ],

    quizQuestions: [
      {
        id: "saas-quiz-1",
        question:
          "Your company wants to reduce infrastructure costs and eliminate manual server management. Which aspect of SitecoreAI CMS addresses this?",
        options: [
          "The headless architecture",
          "The SaaS model where Sitecore manages infrastructure",
          "The Next.js integration",
          "The Experience Edge API",
        ],
        correctAnswer: 1,
        explanation:
          "The SaaS model is key here. Sitecore handles all hosting, scaling, and maintenance, eliminating the need for your team to manage servers and significantly reducing infrastructure costs.",
        scenario:
          "Your CTO asks how SitecoreAI CMS will reduce operational overhead for the IT team.",
      },
      {
        id: "saas-quiz-2",
        question:
          "A content editor needs to create new pages, manage publishing, and set up workflows. Where should they work?",
        options: [
          "Experience Edge",
          "The rendering host",
          "Content Management (CM) instance",
          "Deploy app",
        ],
        correctAnswer: 2,
        explanation:
          "The CM instance is where all content creation, editing, publishing, workflows, and permissions are managed. It's the heart of content operations.",
        scenario:
          "A new content editor joins the team and needs to know where to create and manage content.",
      },
      {
        id: "saas-quiz-3",
        question:
          "Your front-end developer needs to fetch content to display on the website. Which component provides the API?",
        options: [
          "Content Management instance",
          "Deploy app",
          "Experience Edge",
          "Site Collection",
        ],
        correctAnswer: 2,
        explanation:
          "Experience Edge is the GraphQL API-based service that front-end applications use to retrieve content. It's distributed through a CDN for fast delivery.",
        scenario:
          "A developer asks where to make API calls to get content for the Next.js application.",
      },
      {
        id: "saas-quiz-4",
        question:
          "You need to organize multiple related sites for different brands but share templates and assets between them. What should you use?",
        options: [
          "Multiple Organizations",
          "Multiple Projects",
          "A Site Collection",
          "Multiple Environments",
        ],
        correctAnswer: 2,
        explanation:
          "A Site Collection groups related sites and allows you to share content, data templates, and digital assets between them. Perfect for multi-brand scenarios.",
        scenario:
          "Your company has 3 brands that need separate sites but should share common components and assets.",
      },
      {
        id: "saas-quiz-5",
        question:
          "What's the correct relationship between Organization, Project, and Environment?",
        options: [
          "Environment contains Projects, Project contains Organization",
          "Organization contains Projects, Project contains Environments",
          "Project contains Organizations, Organization contains Environments",
          "They are all independent entities",
        ],
        correctAnswer: 1,
        explanation:
          "The hierarchy is: Organization (top level, represents your company) > Project (logical grouping) > Environment (specific instances like dev, test, prod).",
        scenario:
          "You're explaining the SitecoreAI CMS structure to a new project manager.",
      },
      {
        id: "saas-quiz-6",
        question:
          "Your team wants to use Vue.js instead of React for the front-end. Is this possible with SitecoreAI CMS?",
        options: [
          "No, SitecoreAI CMS only works with Next.js/React",
          "Yes, because it's headless and API-first",
          "Only if you use a special plugin",
          "Yes, but only in development environments",
        ],
        correctAnswer: 1,
        explanation:
          "SitecoreAI CMS is headless and API-first, meaning the front-end is completely decoupled. You can use any technology that can consume the GraphQL API from Experience Edge.",
        scenario:
          "Your front-end team prefers Vue.js and wants to know if they can use it with SitecoreAI CMS.",
      },
      {
        id: "saas-quiz-7",
        question:
          "Where do you manage users, access to products, and organization settings?",
        options: [
          "In the CM instance",
          "In the Deploy app",
          "In the Sitecore Cloud Portal",
          "In Experience Edge",
        ],
        correctAnswer: 2,
        explanation:
          "The Sitecore Cloud Portal is the central hub for managing your organization, users, and access to all Sitecore DXP products including SitecoreAI CMS.",
        scenario:
          "You need to add a new team member and give them access to SitecoreAI CMS.",
      },
      {
        id: "saas-quiz-8",
        question: "What are Items in Sitecore, and what identifies them?",
        options: [
          "Database records identified by auto-increment IDs",
          "Building blocks identified by GUID, path, and name",
          "File system files identified by file path only",
          "JSON objects identified by keys",
        ],
        correctAnswer: 1,
        explanation:
          "Items are the fundamental building blocks in Sitecore. Almost everything is an item (pages, templates, etc.). They're identified by GUID (unique ID), path in the content tree, and name.",
        scenario:
          "A developer asks how Sitecore identifies and organizes content internally.",
      },
      {
        id: "saas-quiz-9",
        question:
          "Your site experiences sudden traffic spikes. How does SitecoreAI CMS handle this?",
        options: [
          "You need to manually scale the servers",
          "Automatic scaling through cloud-native architecture",
          "Traffic is queued until capacity is available",
          "You need to upgrade your subscription first",
        ],
        correctAnswer: 1,
        explanation:
          "SitecoreAI CMS has a cloud-native architecture that automatically scales to handle peak traffic without manual intervention. This is a key benefit of the SaaS model.",
        scenario:
          "Your marketing team is launching a major campaign and expects 10x normal traffic.",
      },
      {
        id: "saas-quiz-10",
        question:
          "What does the rendering host do in the SitecoreAI CMS architecture?",
        options: [
          "It stores and manages content",
          "It's the front-end application that displays the website",
          "It handles GraphQL queries",
          "It manages deployments",
        ],
        correctAnswer: 1,
        explanation:
          "The rendering host is your front-end application (e.g., Next.js on Vercel) that displays the website to users. It's separate from content management and calls Experience Edge for content.",
        scenario:
          "You're explaining to stakeholders where the actual website that users see is hosted.",
      },
      {
        id: "saas-quiz-11",
        question:
          "You want to display the same data in different layouts on different pages. What should you use?",
        options: [
          "Multiple data sources",
          "Rendering variants",
          "Different templates",
          "Multiple environments",
        ],
        correctAnswer: 1,
        explanation:
          "Rendering variants allow you to display the same data in different layouts. They're variations of a rendering designed for this exact purpose.",
        scenario:
          "A component needs to show as a card on the homepage but as a list item on an archive page.",
      },
      {
        id: "saas-quiz-12",
        question: "What's included in the SitecoreAI CMS starter kit?",
        options: [
          "Only basic HTML templates",
          "Sample content and images",
          "JSS libraries, Next.js components, personalization middleware",
          "Pre-built websites for different industries",
        ],
        correctAnswer: 2,
        explanation:
          "The starter kit is a comprehensive code base including local dev resources, JSS/headless libraries, Next.js components, and personalization/analytics middleware. It's the recommended starting point.",
        scenario:
          "Your team is starting a new SitecoreAI CMS project and wants to know what's provided out-of-the-box.",
      },
    ],
  },
  {
    id: "key-architecture-components",
    title: "Key Architecture Components",
    description:
      "Developer workflow and SitecoreAI CMS architecture essentials",
    estimatedTime: 16,

    content: `# Key Architecture Components

## What is SitecoreAI CMS Architecture?

SitecoreAI CMS is a **hybrid headless** digital experience platform offered as SaaS.

**Key point:** Front-end presentation layer is **decoupled** from back-end CMS.

### What Makes It Special?

**Traditional headless:**
- Authors can update text and images only
- Changing page layout requires developer

**Sitecore hybrid headless:**
- Authors manage **both content and presentation**
- No developer needed for layout changes
- True WYSIWYG editing experience

## Core Architecture Characteristics

### Headless Architecture
Build your "head" application using **any front-end framework** you prefer.

### Enterprise Features
**Built-in capabilities:**
- Personalization
- Real-time analytics
- Layout management
- Page management

### Content Author Freedom
Authors control content **and** presentation without code changes.

---

## Key Architecture Components

### 1. Sitecore Cloud Portal

Your **central hub** for Sitecore management.

**What you do here:**
- Manage Sitecore subscriptions
- Control user access
- Provision Sitecore products
- Access all Sitecore apps

**Result:** Unified, streamlined experience

### 2. Build and Deploy Services

Manages building and deploying your projects.

**Access via:**
- Deploy app (UI)
- CLI (command line)
- REST API

### 3. SitecoreAI Deploy App

**Purpose:** UI for managing environments and deployments

**URL:** deploy.sitecorecloud.io

**Features:**
- Project creation walkthrough
- Detailed deployment logs
- Status monitoring
- Centralized environment management

**Deployment process:**
1. Provision
2. Build
3. Deploy

### 4. SitecoreAI CMS Instance (CM Instance)

Where content is **modeled and created**.

**Content Management (CM) instance handles:**
- Create and manage content
- Edit and store site content
- Content modeling

**Apps you access here:**
- Page builder
- Content Editor
- Components builder
- Form builder
- Analytics
- Settings

### 5. Experience Edge

**GraphQL API-based service** for content delivery.

**What it does:**
- Retrieves layout and content
- Distributes through CDN
- Acts as publishing target

**Key features:**
- Geographically distributed
- Exceptional speed
- High reliability
- Hosted by Sitecore

**How it works:**
- Front-end apps retrieve content via GraphQL
- Content cached globally
- Fast delivery worldwide

### 6. Editing Host

**Node-based component** for in-app editing.

**Purpose:** Display front-end app **within SitecoreAI CMS interface**

**Enables:**
- WYSIWYG editing in Page builder
- Visual content editing
- Real-time preview

**Setup:** Automatically provisioned by Deploy App when using starter kit

### 7. Rendering Host

Your **front-end application** facing end users.

**What it is:**
- The actual website users see
- Hosted separately from CMS

**Common hosting platforms:**
- Vercel
- Netlify
- Amazon Web Services (AWS)
- Microsoft Azure

**How it works:**
- Connects to Experience Edge
- Retrieves content via GraphQL
- Delivers seamless user experience

---

## Architecture Flow

### Content Creation Flow
1. **Author creates content** in CM instance
2. **Content published** to Experience Edge
3. **Rendering Host retrieves** content via GraphQL
4. **Users see** final website

### Editing Flow
1. **Author opens** Page builder
2. **Editing Host displays** front-end within CMS
3. **Author edits** visually (WYSIWYG)
4. **Changes saved** to CM instance
5. **Published** to Experience Edge
6. **Live site updates** via Rendering Host

---

## Component Relationships

### Sitecore Cloud Portal
**→ Central hub** managing everything

### Deploy App
**→ Provisions and deploys** environments

### CM Instance
**→ Creates content** and manages it

### Editing Host
**→ Shows front-end** inside CMS for editing

### Experience Edge
**→ Delivers content** via GraphQL/CDN

### Rendering Host
**→ Displays website** to end users

---

## Key Concepts

### Hybrid Headless
**Decoupled** front-end + **Visual editing** for authors

### Publishing Target
Experience Edge is where content goes when published

### GraphQL API
How front-end apps retrieve content from Experience Edge

### WYSIWYG Editing
"What You See Is What You Get" - visual editing experience

### CDN Distribution
Content cached globally for fast delivery

---

## Important Distinctions

### Editing Host vs Rendering Host
**Editing Host:**
- Internal tool
- Shows app in CMS interface
- For content authors
- Enables visual editing

**Rendering Host:**
- External website
- Shows app to end users
- For website visitors
- Hosted separately (Vercel, AWS, etc.)

### CM Instance vs Experience Edge
**CM Instance:**
- Where content is created
- Internal management
- Full editing capabilities

**Experience Edge:**
- Where content is delivered from
- External-facing API
- Read-only for front-end
- Globally distributed

---

## Key Takeaways

- **Hybrid headless** = Best of both worlds
- **Authors control presentation** without code
- **Experience Edge** = Fast, global delivery
- **Two hosts:** Editing (internal) + Rendering (public)
- **GraphQL** = Content retrieval method
- **Deploy App** = Deployment management
- **Cloud Portal** = Central management hub`,

    flashcards: [
      {
        id: "arch-1",
        question: "What makes SitecoreAI CMS 'hybrid headless'?",
        answer:
          "Authors can manage both content AND presentation without code. Traditional headless only allows content updates; layout requires developers.",
        difficulty: "medium",
      },
      {
        id: "arch-2",
        question: "What is the Sitecore Cloud Portal?",
        answer:
          "The central hub for managing Sitecore subscriptions, user access, and provisioning products. Your unified entry point.",
        difficulty: "easy",
      },
      {
        id: "arch-3",
        question: "What is Experience Edge?",
        answer:
          "A GraphQL API-based service endpoint that delivers content through a global CDN. It's the publishing target for SitecoreAI CMS.",
        difficulty: "easy",
      },
      {
        id: "arch-4",
        question:
          "What's the difference between Editing Host and Rendering Host?",
        answer:
          "Editing Host displays the app within CMS for authors to edit visually. Rendering Host is the actual website users see, hosted externally.",
        difficulty: "hard",
      },
      {
        id: "arch-5",
        question: "What does the CM instance do?",
        answer:
          "The Content Management instance is where content is created, edited, stored, and managed. Access apps like Page builder, Content Editor, Components builder.",
        difficulty: "easy",
      },
      {
        id: "arch-6",
        question:
          "What are the three ways to access Build and Deploy Services?",
        answer: "Deploy app (UI), CLI (command line), or REST API.",
        difficulty: "medium",
      },
      {
        id: "arch-7",
        question: "What is the SitecoreAI Deploy App URL?",
        answer:
          "deploy.sitecorecloud.io - It's the UI for managing environments and deployments.",
        difficulty: "easy",
      },
      {
        id: "arch-8",
        question: "How does the Rendering Host get content?",
        answer:
          "It connects to Experience Edge and retrieves content using the GraphQL delivery API.",
        difficulty: "medium",
      },
      {
        id: "arch-9",
        question: "What is WYSIWYG editing and where does it happen?",
        answer:
          "What You See Is What You Get - visual editing. Happens in Page builder using the Editing Host to display the front-end within CMS.",
        difficulty: "medium",
      },
      {
        id: "arch-10",
        question: "Name three common platforms for hosting the Rendering Host.",
        answer: "Vercel, Netlify, AWS (Amazon Web Services), or Azure.",
        difficulty: "easy",
      },
    ],

    quizQuestions: [
      {
        id: "arch-quiz-1",
        question:
          "A content author wants to change the layout of a page without involving a developer. Is this possible in SitecoreAI CMS?",
        options: [
          "No, layout changes always require a developer",
          "Yes, because of the hybrid headless architecture",
          "Only if they have developer permissions",
          "Yes, but only for simple text changes",
        ],
        correctAnswer: 1,
        explanation:
          "SitecoreAI CMS's hybrid headless architecture allows authors to manage both content and presentation. Unlike traditional headless CMS, authors can change layouts without code.",
        scenario:
          "Your content team wants to reorganize a landing page's component layout for a new campaign.",
      },
      {
        id: "arch-quiz-2",
        question:
          "You need to manage user access across all Sitecore products. Where do you do this?",
        options: [
          "CM instance",
          "Deploy app",
          "Sitecore Cloud Portal",
          "Experience Edge",
        ],
        correctAnswer: 2,
        explanation:
          "The Sitecore Cloud Portal is the central hub for managing subscriptions, user access, and provisioning across all Sitecore products.",
        scenario:
          "A new team member needs access to SitecoreAI CMS and Content Hub.",
      },
      {
        id: "arch-quiz-3",
        question:
          "Your front-end application needs to fetch content to display on the website. Which component provides this?",
        options: [
          "CM instance",
          "Editing Host",
          "Experience Edge",
          "Deploy app",
        ],
        correctAnswer: 2,
        explanation:
          "Experience Edge is the GraphQL API-based service that front-end applications use to retrieve content. It's globally distributed via CDN for fast delivery.",
        scenario:
          "Your Next.js app on Vercel needs to get the latest published content.",
      },
      {
        id: "arch-quiz-4",
        question:
          "A content author is using Page builder and seeing a visual preview of the site while editing. Which component enables this?",
        options: [
          "Rendering Host",
          "Editing Host",
          "Experience Edge",
          "Deploy app",
        ],
        correctAnswer: 1,
        explanation:
          "The Editing Host is a node-based component that displays your front-end application within the SitecoreAI CMS interface, enabling WYSIWYG editing in Page builder.",
        scenario:
          "An author wants to drag-and-drop components and see changes instantly in Page builder.",
      },
      {
        id: "arch-quiz-5",
        question:
          "You need to deploy a new version of your SitecoreAI CMS project. What's the correct URL for the Deploy app?",
        options: [
          "portal.sitecorecloud.io",
          "deploy.sitecorecloud.io",
          "xmcloud.sitecorecloud.io",
          "cms.sitecorecloud.io",
        ],
        correctAnswer: 1,
        explanation:
          "The SitecoreAI Deploy App is accessed at deploy.sitecorecloud.io. It's the UI for managing environments and deployments.",
        scenario:
          "Your team completed a new feature and needs to deploy to production.",
      },
      {
        id: "arch-quiz-6",
        question: "Where is the actual website that end users visit hosted?",
        options: [
          "On the CM instance",
          "On Experience Edge",
          "On the Rendering Host (Vercel, AWS, etc.)",
          "On the Editing Host",
        ],
        correctAnswer: 2,
        explanation:
          "The Rendering Host is the front-end application facing end users. It's hosted on platforms like Vercel, Netlify, AWS, or Azure - separate from the CMS.",
        scenario:
          "You need to explain to stakeholders where the customer-facing website is actually running.",
      },
      {
        id: "arch-quiz-7",
        question:
          "What are the three stages the Deploy app runs when creating a project?",
        options: [
          "Build, Test, Deploy",
          "Provision, Build, Deploy",
          "Create, Build, Publish",
          "Setup, Configure, Launch",
        ],
        correctAnswer: 1,
        explanation:
          "The Deploy app runs three processes to complete project creation: Provision (set up resources), Build (compile application), Deploy (make it live).",
        scenario:
          "You're monitoring the Deploy app and see these three stages running.",
      },
      {
        id: "arch-quiz-8",
        question:
          "A content author publishes content. What is the flow to get it live on the website?",
        options: [
          "CM → Editing Host → Rendering Host → Users",
          "CM → Deploy App → Experience Edge → Users",
          "CM → Experience Edge → Rendering Host → Users",
          "CM → Rendering Host → Experience Edge → Users",
        ],
        correctAnswer: 2,
        explanation:
          "Published content flows from CM instance to Experience Edge (publishing target), then Rendering Host retrieves it via GraphQL and displays to users.",
        scenario:
          "An author publishes an article and wants to understand how it reaches the live site.",
      },
      {
        id: "arch-quiz-9",
        question:
          "What protocol does the Rendering Host use to get content from Experience Edge?",
        options: ["REST API", "GraphQL", "SOAP", "WebSockets"],
        correctAnswer: 1,
        explanation:
          "The Rendering Host connects to Experience Edge and retrieves content using the GraphQL delivery API. GraphQL is the standard for SitecoreAI CMS content delivery.",
        scenario:
          "A developer asks what API format they should use to fetch content.",
      },
      {
        id: "arch-quiz-10",
        question:
          "What makes SitecoreAI CMS different from traditional headless CMS?",
        options: [
          "It's faster",
          "Authors can manage presentation, not just content",
          "It uses GraphQL",
          "It's cloud-based",
        ],
        correctAnswer: 1,
        explanation:
          "The hybrid headless architecture allows authors to manage both content and presentation without code. Traditional headless only allows content updates; layout changes require developers.",
        scenario:
          "A client asks why SitecoreAI CMS is better than other headless CMS solutions.",
      },
      {
        id: "arch-quiz-11",
        question:
          "Where do you access apps like Page builder, Content Editor, and Components builder?",
        options: [
          "Sitecore Cloud Portal",
          "Deploy app",
          "CM instance",
          "Experience Edge",
        ],
        correctAnswer: 2,
        explanation:
          "The CM (Content Management) instance is where you access all content management apps including Page builder, Content Editor, Components builder, Form builder, Analytics, and Settings.",
        scenario:
          "A content author needs to build a new component for their site.",
      },
      {
        id: "arch-quiz-12",
        question:
          "Your starter kit project just deployed. What provisioned the Editing Host automatically?",
        options: [
          "The CM instance",
          "Experience Edge",
          "The SitecoreAI Deploy App",
          "You must provision it manually",
        ],
        correctAnswer: 2,
        explanation:
          "The Editing Host is automatically provisioned by the SitecoreAI Deploy App when you use a starter kit. No manual setup required.",
        scenario:
          "Your project is deployed and Page builder shows visual editing. You didn't configure an Editing Host manually.",
      },
    ],
  },
  {
    id: "sites-and-collections",
    title: "Sites & Site Collections",
    description:
      "Multi-site management, organization structure, and content sharing",
    estimatedTime: 17,

    content: `# Sites & Site Collections

## SitecoreAI CMS Structure Overview

SitecoreAI CMS has a **hierarchical structure** for organizing your digital properties.

**Three core building blocks:**
1. Organization (top level)
2. Project (middle level)
3. Environment (where sites live)

---

## Organization

Your **highest-level container** in Sitecore.

### What It Represents
A business unit - your company or brand.

### What It Contains
- Team members
- Sitecore product subscriptions
- Multiple projects
- Access rules and permissions

### Purpose
**Manage subscriptions and control access** across all Sitecore products.

### Key Points
- Can include multiple Sitecore products (XM Cloud, Content Hub ONE, etc.)
- Accessed through Sitecore Cloud Portal
- Establishes who can access what
- **Larger companies:** May have multiple organizations
- **Smaller companies:** Usually just one organization

---

## Project

A **logical grouping of environments**.

### What It Represents
A specific web initiative or application.

### Structure
- Connected to **one source code repository**
- Houses codebase for one website/app
- Contains multiple environments (dev, QA, prod)

### Purpose
**Organize environments** for a specific web initiative.

### When to Create
Create a new project when starting a **separate software solution** that needs isolated environments.

### Benefits
- Clear separation between brands/initiatives
- Fundamental unit for managing deployments
- Organized environment management

### How to Create
- Sitecore Cloud CLI
- SitecoreAI Deploy App

---

## Environment

Where your **actual Sitecore instance lives**.

### What It Contains
- CM instance and related services
- Code branches
- Deployment logs
- Environment variables
- Developer settings
- **Multiple sites** (multi-site capable)

### Purpose
Provide **isolated spaces** for different project stages.

### Typical Setup
1. **Development** - active development
2. **QA/Staging** - testing
3. **Production** - live site

### Configuration
- Each environment has specific SLA
- **Standard license:** 1 production + 2 non-production
- Must mark correctly (prod vs non-prod)

### Key Point
**One environment can host multiple sites** - built for multi-site scenarios.

---

## Site Collections

**Containers that group related websites**.

### Purpose
Organization and content sharing between sites.

### What They Do
**Organize sites based on:**
- Business units
- Brands
- Similar characteristics

**Enable sharing:**
- Content between sites
- Data templates
- Digital assets
- Page templates
- Presentation items (designs, renderings, styles)

### Key Features
**Shared Page Templates:**
- Sites use same templates
- Ensures consistency

**Content Separation:**
- Can create dedicated collections
- When strong separation needed

**Centralized Management:**
- Manage global campaigns
- Administer sites centrally

---

## Sites

A **single website** within SitecoreAI CMS.

### What It Represents
One front-end website project.

### Where It Lives
**Must belong to a site collection** - no standalone sites.

### Creation
Created with just a few clicks in Sites app.

### Site Templates
**Choose from:**
- Empty site
- Basic site
- Custom templates you create

### Configuration Options
**Basic settings:**
- Display name
- Item/system name
- Site thumbnail

**Host configuration:**
- Host languages
- Rendering host URL

**Analytics:**
- Site identifier for CDP/Personalize

**Language support:**
- Configure multiple languages
- Create content in each language
- Language fallback support

### Shared Sites
**Mark site as "shared"** to enable:
- Content sharing across sites in collection
- Configuration sharing
- Centralized content management

---

## Multi-Site Capabilities

SitecoreAI CMS is **built for enterprise multi-site**.

### Key Capabilities
**Multiple sites per environment:**
- One environment = many sites
- Flexible for development

**Multiple languages per site:**
- Configure all needed languages
- Create content in each language
- Manage from central location

**Complex scenarios:**
- Multi-site AND multi-lingual
- Managed from one place
- Enterprise-scale support

---

## Content Sharing Strategies

### What Can Be Shared
**Within a site collection:**
- Data templates
- Digital assets (images, files)
- Page designs and partial designs
- Rendering configurations
- Styles and variants
- Centralized campaign content

### When to Share
**Good for sharing:**
- Global branding elements
- Core product information
- Base templates and components
- Company-wide campaigns

**Keep separate:**
- Brand-specific content
- Region-specific information
- Different target audiences

---

## Strategic Architecture Patterns

### Pattern 1: Multiple Brands
**Scenario:** Company owns several distinct brands

**Solution:**
- One site collection for organization
- Individual site per brand within collection
- Share foundational elements
- Brand-specific customization per site

**Benefits:**
- Central management
- Shared infrastructure
- Brand independence

### Pattern 2: Global + Regional
**Scenario:** Global company with regional sites

**Solution:**
- Primary site collection for global content
- Separate site per region
- Configure appropriate languages
- Share global branding and products

**Strategy:**
- Global content at collection level
- Localized content at site level
- Language fallback for consistency
- Clear governance model

### Pattern 3: Marketing vs. Documentation
**Scenario:** Separate marketing and product docs sites

**Solution:**
- **Two separate site collections**
- Marketing site in one collection
- Documentation site in another collection
- Complete isolation

**Benefits:**
- No accidental overlap
- Independent permissions
- Distinct information architecture
- Different update cycles

---

## Site Management Features

### Sites Dashboard
**Access from dashboard:**
- Search for sites
- View all sites
- Filter and organize

### Per-Site Configuration
**Manage for each site:**
- Display name and system name
- Thumbnail (regenerate or upload)
- Shared status toggle
- Host languages
- Rendering host configuration
- Analytics identifiers
- Available languages

### Direct Actions
**From dashboard:**
- Create new sites
- Create new site collections
- Delete sites
- Access documentation
- Raise support tickets

---

## Best Practices

### Planning Your Structure
**Before creating:**
1. Map out your brands/initiatives
2. Identify shared vs. unique content
3. Plan content governance
4. Define permissions strategy

### Site Collection Strategy
**Use separate collections when:**
- Strong content separation needed
- Different target audiences
- Distinct information architecture
- Independent governance

**Use shared collection when:**
- Related brands/initiatives
- Common foundational elements
- Shared resources beneficial
- Centralized management desired

### Environment Planning
**Standard setup:**
- Mark production correctly
- Use non-prod for dev and QA
- Configure appropriate SLAs
- Plan for multi-site if needed

---

## Key Relationships

### Organization → Projects
- One org can have multiple projects
- Project count depends on subscription

### Project → Environments
- One project contains multiple environments
- Typically: dev, QA, production

### Environment → Sites
- One environment can host multiple sites
- Multi-site capable out of the box

### Site Collection → Sites
- One collection contains multiple sites
- Sites share content and templates

---

## Important Concepts

### Multi-Site Support
**Built-in capability** to manage:
- Multiple websites
- Multiple languages
- Complex enterprise scenarios
- All from central location

### Content Governance
**Critical for success:**
- Define what's shared
- Establish content flow
- Set permissions clearly
- Plan localization strategy

### Isolation vs. Sharing
**Balance needed:**
- Share to reduce duplication
- Isolate for independence
- Clear strategy required
- Think long-term

---

## Key Takeaways

- **Hierarchy:** Organization > Project > Environment > Site Collection > Site
- **Multi-site ready:** One environment = many sites
- **Content sharing:** Collections enable sharing
- **Strategic planning:** Architecture depends on business needs
- **Flexibility:** Support small to enterprise scale
- **Governance:** Critical for multi-site success`,

    flashcards: [
      {
        id: "sites-1",
        question: "What is the hierarchy in SitecoreAI CMS structure?",
        answer:
          "Organization (top) > Project > Environment > Site Collection > Site. Each level contains the next level.",
        difficulty: "easy",
      },
      {
        id: "sites-2",
        question: "What is an Organization in SitecoreAI CMS?",
        answer:
          "The highest-level container representing a business unit. Contains team members, product subscriptions, and controls access across all Sitecore products.",
        difficulty: "easy",
      },
      {
        id: "sites-3",
        question: "What is a Project?",
        answer:
          "A logical grouping of environments connected to one source code repository. Contains dev, QA, and production environments for a specific web initiative.",
        difficulty: "easy",
      },
      {
        id: "sites-4",
        question: "What is an Environment?",
        answer:
          "Where the actual Sitecore instance lives. Contains CM instance, code branches, deployment logs, and can host multiple sites.",
        difficulty: "medium",
      },
      {
        id: "sites-5",
        question: "What is a Site Collection and what does it do?",
        answer:
          "A container that groups related websites and enables sharing of content, templates, and digital assets between sites within the collection.",
        difficulty: "medium",
      },
      {
        id: "sites-6",
        question: "Can one environment host multiple sites?",
        answer:
          "Yes! SitecoreAI CMS is built for multi-site. One environment can host multiple sites, supporting complex multi-site and multi-lingual scenarios.",
        difficulty: "easy",
      },
      {
        id: "sites-7",
        question:
          "When should you create separate site collections vs. one shared collection?",
        answer:
          "Separate collections when you need strong content separation, different audiences, or independent governance. Shared collection when you want to share resources and manage centrally.",
        difficulty: "hard",
      },
      {
        id: "sites-8",
        question: "What can be shared within a site collection?",
        answer:
          "Data templates, digital assets, page designs, rendering configurations, styles, variants, and centralized content like global campaigns.",
        difficulty: "medium",
      },
      {
        id: "sites-9",
        question: "How many environments do you get with a standard license?",
        answer:
          "1 production environment and 2 non-production environments (typically used for dev and QA).",
        difficulty: "medium",
      },
      {
        id: "sites-10",
        question: "What does marking a site as 'shared' enable?",
        answer:
          "Allows content and configuration to be shared with other sites in the same site collection, enabling centralized management.",
        difficulty: "medium",
      },
    ],

    quizQuestions: [
      {
        id: "sites-quiz-1",
        question:
          "Your company owns 3 fashion brands that share some assets but need independent branding. What's the best structure?",
        options: [
          "3 separate organizations",
          "1 site collection with 3 sites (one per brand)",
          "3 separate projects",
          "1 site with 3 languages",
        ],
        correctAnswer: 1,
        explanation:
          "One site collection with 3 sites is ideal. You can share foundational elements at the collection level while maintaining brand independence at the site level.",
        scenario:
          "You're architecting for a company with Brand A, Brand B, and Brand C fashion lines.",
      },
      {
        id: "sites-quiz-2",
        question:
          "You need a marketing site and a documentation site with completely separate content. What should you do?",
        options: [
          "1 site collection with 2 sites",
          "2 separate site collections",
          "1 site with 2 site collections",
          "2 separate environments",
        ],
        correctAnswer: 1,
        explanation:
          "Two separate site collections ensure complete content and template isolation. This prevents overlap and allows independent permissions and governance for each initiative.",
        scenario:
          "Different teams, different audiences, different content strategies.",
      },
      {
        id: "sites-quiz-3",
        question:
          "You're building a global site with regional variants for NA, Europe, and Asia. What's the best approach?",
        options: [
          "3 separate projects",
          "1 site collection with 3 regional sites",
          "3 separate organizations",
          "1 site with 3 languages",
        ],
        correctAnswer: 1,
        explanation:
          "One site collection with regional sites allows you to share global branding and core content at the collection level, while maintaining region-specific content and languages at each site.",
        scenario:
          "Global tech company needs localized content but consistent branding.",
      },
      {
        id: "sites-quiz-4",
        question:
          "How many sites can you run in a single SitecoreAI CMS environment?",
        options: [
          "Only 1 site per environment",
          "Maximum 3 sites per environment",
          "Multiple sites - no fixed limit",
          "Depends on your license tier",
        ],
        correctAnswer: 2,
        explanation:
          "SitecoreAI CMS is built for multi-site scenarios. One environment can host multiple sites, making it ideal for enterprise multi-site and multi-lingual implementations.",
        scenario:
          "You're planning a multi-brand environment and need to know capacity.",
      },
      {
        id: "sites-quiz-5",
        question:
          "Your team wants to share global campaign content across 5 brand sites. How do you enable this?",
        options: [
          "Copy content to each site manually",
          "Put all sites in one site collection and mark content as shared",
          "Create 5 separate projects",
          "Use the same environment for all sites",
        ],
        correctAnswer: 1,
        explanation:
          "Sites within the same collection can share content. Mark the site with global content as 'shared' to enable other sites in the collection to access it.",
        scenario:
          "Marketing runs campaigns that should appear across all brand sites.",
      },
      {
        id: "sites-quiz-6",
        question:
          "You have a standard SitecoreAI CMS license. How many environments do you get?",
        options: [
          "1 production only",
          "2 production, 1 non-production",
          "1 production, 2 non-production",
          "3 production environments",
        ],
        correctAnswer: 2,
        explanation:
          "Standard license includes 1 production environment and 2 non-production environments (typically used for development and QA/staging).",
        scenario: "Planning your environment strategy for a new project.",
      },
      {
        id: "sites-quiz-7",
        question: "What's the relationship between Projects and Environments?",
        options: [
          "They're the same thing",
          "One Project contains multiple Environments",
          "One Environment contains multiple Projects",
          "They're independent of each other",
        ],
        correctAnswer: 1,
        explanation:
          "A Project is a logical grouping of Environments. Typically, one project contains dev, QA, and production environments for a specific web initiative.",
        scenario: "Understanding the architecture to explain to your team.",
      },
      {
        id: "sites-quiz-8",
        question:
          "You want to manage user access across SitecoreAI CMS and Content Hub ONE. Where do you do this?",
        options: [
          "In each product separately",
          "At the Organization level in Cloud Portal",
          "In the Deploy app",
          "In the CM instance",
        ],
        correctAnswer: 1,
        explanation:
          "Organization is the top-level container accessed through Cloud Portal. It manages subscriptions, user access, and permissions across all Sitecore products.",
        scenario: "New team members need access to multiple Sitecore products.",
      },
      {
        id: "sites-quiz-9",
        question: "What can be shared between sites within a site collection?",
        options: [
          "Only content, not templates",
          "Only templates, not content",
          "Templates, content, assets, and presentation items",
          "Nothing can be shared",
        ],
        correctAnswer: 2,
        explanation:
          "Site collections enable sharing of data templates, digital assets, page designs, rendering configurations, styles, variants, and content marked as shared.",
        scenario: "Architect needs to plan what resources can be centralized.",
      },
      {
        id: "sites-quiz-10",
        question: "When should you create a new Project in SitecoreAI CMS?",
        options: [
          "For each new page",
          "For each new language",
          "When starting a separate software solution needing isolated environments",
          "Never - use one project for everything",
        ],
        correctAnswer: 2,
        explanation:
          "Create a new project when embarking on a separate software solution that requires its own isolated set of environments. Each project typically connects to one code repository.",
        scenario:
          "Company is launching a new initiative separate from existing sites.",
      },
      {
        id: "sites-quiz-11",
        question:
          "Your site needs to support English, French, and German. Where do you configure this?",
        options: [
          "At the Organization level",
          "At the Project level",
          "At the Site level in site configuration",
          "In the Environment settings",
        ],
        correctAnswer: 2,
        explanation:
          "Language support is configured at the Site level. You can add multiple languages and then create content in each language using Page builder.",
        scenario: "European website needs multi-language support.",
      },
      {
        id: "sites-quiz-12",
        question:
          "What's the purpose of marking an environment as Production vs Non-Production?",
        options: [
          "It's just a label with no real effect",
          "Production gets faster support and specific SLA",
          "Non-production environments are slower",
          "Production environments can't host multiple sites",
        ],
        correctAnswer: 1,
        explanation:
          "Production environments get faster support than non-production environments and have specific SLAs. It's crucial to mark them correctly based on intended use.",
        scenario: "Setting up environments and choosing the right designation.",
      },
    ],
  },
  {
    id: "deployment-fundamentals",
    title: "Deployment Fundamentals",
    description: "Deploy app, CLI, API, environments, and development setup",
    estimatedTime: 22,

    content: `# Deployment Fundamentals

## Three Deployment Tools

SitecoreAI CMS provides **3 main tools** for managing deployments.

### 1. SitecoreAI Deploy App

**Web-based visual interface** for project management.

**URL:** https://deploy.sitecorecloud.io

**Who can access:** Organization Admin or Owner role required

**Best for:**
- Visual, GUI-based management
- Quick project creation
- Managing connections

**Key features:**
- Out-of-the-box connectors (Vercel, GitHub, Azure DevOps)
- Central hub for projects and environments
- Credential management
- Visual deployment monitoring

**Perfect when:** You want a user-friendly interface

### 2. CLI SitecoreAI CMS Plugin

**Command-line tool** extending Sitecore CLI.

**Best for:**
- Automation and CI/CD
- Scripting deployments
- Detailed output and monitoring

**Key commands:**
- \`login\` - Authenticate with organization
- \`logout\` - Log out of environment
- \`organization\` - Manage organizations
- \`project\` - Manage projects
- \`environment\` - Manage environments
- \`deployment\` - Manage deployments

**Benefits:**
- Unified commands for serialization and publishing
- Automate CI/CD pipelines
- Support any source control system
- More verbose output than API
- Can combine multiple API calls

**Perfect when:** You need automation or detailed feedback

### 3. SitecoreAI Deploy API

**REST API** for custom automation.

**Base URL:** https://xmclouddeploy-api.sitecorecloud.io

**Authentication:** JWT access tokens (from automation client ID/secret)

**Best for:**
- Custom build pipelines
- Integration with other systems
- Advanced automation

**Benefits:**
- Full programmatic control
- Custom processes
- Integration flexibility
- Build custom tools

**Perfect when:** You need complete customization

---

## Deployment Process (3 Stages)

**All tools follow the same process:**

### Stage 1: Provisioning

**Initial infrastructure setup.**

**What happens:**
- Resource allocation (servers, databases, services)
- Environment configuration (dev, QA, prod)
- Service setup (Experience Edge, auth services)

**Think:** "Setting up the foundation"

### Stage 2: Build

**Code and content compilation.**

**What happens:**
- Code compilation (Next.js front-end, back-end configs)
- Content serialization (packaging for deployment)
- Dependencies installation
- Asset processing

**Think:** "Preparing the package"

### Stage 3: Deployment

**Pushing to environment.**

**What happens:**
- Artifact deployment (push built app)
- Environment variables application
- Configuration settings
- Service connections

**Post-actions (automatic):**
- Index schema population
- Index rebuilding
- CM instance warm-up

**Think:** "Going live"

---

## Foundation Template (Starter Kit)

**Pre-configured starting point** for new projects.

### What It Provides
- Standardized structure
- Best practices built-in
- Essential components
- Saves setup time

### Repository Structure

**Key folders:**

**\`authoring/\`**
- Serialization files
- Serialized items
- Content definitions

**\`headapps/\`**
- Next.js starter app
- Angular starter app
- Front-end code

**\`local-containers/\`**
- PowerShell scripts
- Docker setup for local dev
- Local environment tools

**Key files:**

**\`Sitecore.json\`**
- Content Serialization config
- Project configuration

**\`xmcloud.build.json\`**
- Build process settings
- Host definitions
- Build targets
- Content deployment config

---

## Prerequisites for Deployment

### Required Access

**Organization Admin or Owner role**
- Necessary for Deploy app
- Can create/manage projects
- Grant access to team members

**How to grant access:**
- Change team member's org role to Admin
- Done in Cloud Portal

### Required Connections

**GitHub or Azure DevOps**
- Automates source code deployment
- Links repo to Deploy app
- Enables automatic deployments

**Setup:**
1. Click "Create connection"
2. Select GitHub or Azure DevOps
3. Authorize Sitecore Deploy app

**Vercel (for hosting)**
- Automates deployment to Vercel
- Connects hosting service
- Manages rendering host

**Setup:**
1. In Hosting tab, "Create connection"
2. Select Vercel
3. Add Sitecore XM Cloud integration

---

## Creating Your First Project

### Step-by-Step Process

**1. Access Deploy App**
- Log in to Cloud Portal
- Click "SitecoreAI CMS Deploy"
- Or go to deploy.sitecorecloud.io

**2. Create Project**
- Click "Create project"
- Enter project name
- Select "Connect to GitHub"
- Choose "Use SitecoreAI CMS template"
- Select GitHub account
- Name repository

**3. Configure Environment**
- Name environment (e.g., "dev")
- Select Production SLA: **No** for dev (can't change later!)
- Auto-redeploy on push: **No** (enable later if needed)
- Monitor deployment status

**Result:** New project with environment deployed!

---

## Deployment Logs

**Critical for troubleshooting** deployment issues.

### Accessing Logs

**In Deploy app:**
1. Select project
2. Select environment
3. Click actions menu (...)
4. Select "View deployment logs"
5. Review or download

### What Logs Show

**Progress tracking:**
- Current deployment status
- Phase progression
- Timestamped entries

**Warnings:**
- Non-critical issues
- Potential future problems
- Configuration notices

**Errors:**
- Critical failures
- Specific error details
- Failure reasons

### Deployment Phases in Logs

**1. Provisioning**
- Infrastructure setup
- Resource allocation

**2. Build**
- Code compilation
- Content packaging
- Dependency installation

**3. Deployment**
- Artifact deployment
- Configuration application

**4. Post Actions**
- Index operations
- CM warm-up
- Final setup

### Troubleshooting with Logs

**Build failures:**
- Compiler errors (syntax, dependencies)
- Node.js build errors (npm failures)
- Configuration errors (env vars)
- **Look for:** Error messages in Build phase

**Deployment issues:**
- Warnings (deprecated settings)
- Anomalous activity (unusual timing)
- Post-action script errors
- **Look for:** Issues during Deployment/Post-actions

---

## Managing Projects & Environments

### Project Dashboard

**View all projects** in your organization.

**Filter:** "My projects" to see your projects

**Actions available:**
- Create new project
- View project details
- Delete project (must delete all environments first)

**Limit:** Project count per subscription

### Environment Management

**Actions menu (...) options:**

**Create environment:**
- Max: 1 production + 2 non-production

**Build and deploy:**
- Create new build
- Deploy to environment
- Based on latest commits

**Manage variables:**
- Set environment variables
- Configuration settings

**Delete:**
- Remove environment

**Open dashboard:**
- Access CM dashboard

**Restart environment:**
- Restart only (no rebuild/redeploy)

### Environment Details

**Tabs available:**
- Websites (available sites)
- Content Management (authoring details)
- Context IDs (preview/published)
- Operational logs
- Environment variables
- Developer settings

---

## Site Collections & Sites

### Creating Site Collection

**Purpose:** Grouping container for related websites.

**All sites must belong to a collection.**

**Creation methods:**
1. Independently in dashboard
2. During site creation

**Steps:**
1. In Deploy app, select environment
2. Click actions (...) → "Open dashboard"
3. Click "Create" → "Collection"
4. Fill name and description
5. Click "Create"

**Multi-site support:** Multiple collections + multiple sites per environment

### Creating a Site

**Components:** Content + presentation + settings

**Each site has:** Unique analytics identifier

**Steps:**
1. Click "Create site" in collection
2. Choose template (e.g., "Basic")
3. Provide name and description
4. Add languages (default: English)
5. Select default language

**Important:** Can't move sites between collections after creation

### Site Structure

**Typical site folders:**

**Home** - Site pages and presentation

**Media** - Digital assets (Media Library)

**Data** - Reusable data sources

**Dictionary** - Translatable phrases

**Presentation** - Layouts, designs, styles, components

**Settings** - Site configurations

### Analytics Identifiers

**Purpose:**
- Define analytics scope (language, site, multi-site)
- Independent analytics calculation
- Track user interactions
- Enable personalization

**Assigning identifier:**
1. Click site settings icon
2. Select "Site hosts"
3. Choose site
4. Go to "Analytics and personalization" tab
5. Click ⊕ to assign/create identifier

**View all:** Dashboard → Settings → Analytics identifiers

---

## Development Approaches

### Two Development Modes

**Choose based on your needs.**

### Front-End Only Development

**Your machine:** Runs front-end code (Next.js)

**The cloud:** Hosts CM instance (content)

**The bridge:** Local app connects to cloud CM

**When to use:**
- Focus on UI/UX only
- Styling and layout work
- Component logic (front-end)
- Quick iterations

**Benefits:**
- **Simplicity** - No local Docker/CM
- **Speed** - Faster startup
- **Focus** - UI/UX tasks only
- **Real data** - Actual cloud content

**Limitations:**
- Can't modify CM locally
- Content changes in cloud only
- Template changes need full setup
- No local editing without config

**Perfect for:** Front-end developers, UI work

### Full-Stack Development

**Everything runs locally** including CM.

**When to use:**
- Developing Sitecore backend (C#)
- Creating/modifying templates
- Backend logic changes
- Complete isolation needed
- Heavy CM interface work

**Setup:** Docker containers with full CM

**Perfect for:** Backend developers, template work

---

## Front-End Setup Walkthrough

### Prerequisites

**Install:** Latest Node.js LTS version

**Access:** Environment's Developer settings

### Step 1: Access Developer Settings

**In Deploy app:**
1. Select project environment
2. Click "Developer settings" tab
3. Select your site
4. Choose "Preview" context (for non-published content)

### Step 2: Clone Repository

**Copy command from step 1:**
- Clones repository
- Switches to project directory
- Installs dependencies

**Run in terminal** - follow on-screen instructions

### Step 3: Configure Environment Variables

**In Deploy app:**
1. Copy environment variables
2. Open project in code editor
3. Create \`.env.local\` file
4. Paste variables

**Variables connect:** Local app → Cloud CM

### Step 4: Run and Configure

**Start the app:**
bash
npm run start:connected

**View site:** http://localhost:3000

**Configure editing host:**
1. Open Page builder in CM
2. Change local host to http://localhost:3000
3. Edit content in Page builder
4. Verify updates on localhost

**Result:** Local editing with cloud content!

---

## Key Concepts Summary

### Deployment Tools
- **Deploy App** = Visual management
- **CLI** = Automation & scripting
- **API** = Custom integration

### Deployment Stages
1. **Provision** = Setup infrastructure
2. **Build** = Compile code/content
3. **Deploy** = Push to environment

### Site Organization
- **Collection** = Groups related sites
- **Site** = Individual website
- **Multi-site** = Multiple sites per environment

### Development Modes
- **Front-end only** = UI focus, cloud CM
- **Full-stack** = Complete local setup

### Critical Points
- **Admin access required** for Deploy app
- **Connections needed** (GitHub, Vercel)
- **Logs are essential** for troubleshooting
- **Can't move sites** between collections
- **Production SLA** can't be changed after creation

---

## Best Practices

### Planning
- Plan environment strategy (dev, QA, prod)
- Choose right deployment tool for task
- Set up connections before starting
- Understand front-end vs. full-stack needs

### Troubleshooting
- Always check deployment logs first
- Look for errors in specific phases
- Review warnings for future issues
- Download logs for detailed analysis

### Development
- Use front-end only when possible (faster)
- Full-stack when modifying templates/backend
- Configure environment variables correctly
- Test locally before deploying`,

    flashcards: [
      {
        id: "deploy-1",
        question: "What are the three deployment tools for SitecoreAI CMS?",
        answer:
          "1) Deploy App (web UI), 2) CLI plugin (command-line), 3) Deploy API (REST API for custom automation).",
        difficulty: "easy",
      },
      {
        id: "deploy-2",
        question: "What are the three stages of deployment?",
        answer:
          "1) Provisioning (setup infrastructure), 2) Build (compile code/content), 3) Deployment (push to environment + post-actions).",
        difficulty: "easy",
      },
      {
        id: "deploy-3",
        question: "What role is required to access the Deploy app?",
        answer:
          "Organization Admin or Organization Owner role. These have permissions to create and manage projects and environments.",
        difficulty: "easy",
      },
      {
        id: "deploy-4",
        question: "What connections are needed before deploying?",
        answer:
          "1) GitHub or Azure DevOps (source code), 2) Vercel (hosting). Plus Admin access to Cloud Portal.",
        difficulty: "medium",
      },
      {
        id: "deploy-5",
        question: "Can you change Production SLA after environment creation?",
        answer:
          "No! The Production SLA setting cannot be changed after environment creation. Choose carefully.",
        difficulty: "medium",
      },
      {
        id: "deploy-6",
        question: "Where do you find deployment logs and what do they show?",
        answer:
          "Deploy app → Project → Environment → Actions (...) → View logs. Shows progress, warnings, and errors across all deployment phases.",
        difficulty: "medium",
      },
      {
        id: "deploy-7",
        question: "Can sites be moved between site collections after creation?",
        answer:
          "No. Sites cannot be moved between collections once created. Plan your collections carefully.",
        difficulty: "medium",
      },
      {
        id: "deploy-8",
        question:
          "What's the difference between front-end only and full-stack development?",
        answer:
          "Front-end only: Local UI code + cloud CM (fast, simple). Full-stack: Everything local including CM (needed for backend/template work).",
        difficulty: "hard",
      },
      {
        id: "deploy-9",
        question: "What does the foundation template provide?",
        answer:
          "Pre-configured starter kit with: standardized structure, best practices, authoring files, headapps (Next.js), local-containers, and config files.",
        difficulty: "medium",
      },
      {
        id: "deploy-10",
        question:
          "How many environments do you get with standard license and what's the limit?",
        answer:
          "1 production environment + 2 non-production environments (typically dev and QA).",
        difficulty: "easy",
      },
      {
        id: "deploy-11",
        question: "What is an analytics identifier used for?",
        answer:
          "Defines analytics scope, tracks user interactions, enables personalization, ensures independent analytics calculation per site/language.",
        difficulty: "medium",
      },
      {
        id: "deploy-12",
        question: "What's in the .env.local file and why is it needed?",
        answer:
          "Environment variables that connect your local front-end app to the cloud CM instance. Required for front-end development.",
        difficulty: "medium",
      },
    ],

    quizQuestions: [
      {
        id: "deploy-quiz-1",
        question:
          "Your team wants to automate deployments in a CI/CD pipeline. Which tool should you use?",
        options: [
          "Deploy App only",
          "CLI plugin or Deploy API",
          "Manual deployment through Cloud Portal",
          "Vercel dashboard",
        ],
        correctAnswer: 1,
        explanation:
          "CLI plugin or Deploy API are designed for automation. CLI provides commands for scripting, while API enables custom pipelines. Deploy App is for manual/visual management.",
        scenario: "DevOps team needs automated deployment workflow.",
      },
      {
        id: "deploy-quiz-2",
        question:
          "Your deployment failed during the Build phase. Where do you look first to understand why?",
        options: [
          "Cloud Portal settings",
          "Deployment logs in Deploy app",
          "GitHub repository",
          "Vercel dashboard",
        ],
        correctAnswer: 1,
        explanation:
          "Deployment logs show detailed error messages for each phase. Look for 'Error' entries in the Build phase - they'll show compiler errors, npm failures, or configuration issues.",
        scenario: "Build failed and you need to diagnose the problem.",
      },
      {
        id: "deploy-quiz-3",
        question:
          "You're creating a dev environment. Should you mark it as Production SLA?",
        options: [
          "Yes, for better performance",
          "No, and this can't be changed later",
          "Yes, you can change it later",
          "Doesn't matter for dev",
        ],
        correctAnswer: 1,
        explanation:
          "Never mark dev as Production SLA. This setting CANNOT be changed after creation. Production SLA is for live sites only and affects support priority.",
        scenario: "Creating your first development environment.",
      },
      {
        id: "deploy-quiz-4",
        question:
          "You need to modify Sitecore templates and test locally. Which development approach do you need?",
        options: [
          "Front-end only development",
          "Full-stack local development with Docker",
          "Deploy app visual editor",
          "CLI commands only",
        ],
        correctAnswer: 1,
        explanation:
          "Modifying templates requires the full local CM instance. Front-end only development connects to cloud CM but can't modify templates or backend logic.",
        scenario: "Developer needs to create new content templates.",
      },
      {
        id: "deploy-quiz-5",
        question:
          "Your designer only needs to work on CSS and React components. What's the fastest setup?",
        options: [
          "Full Docker setup with local CM",
          "Front-end only development",
          "Deploy and test on cloud only",
          "CLI development mode",
        ],
        correctAnswer: 1,
        explanation:
          "Front-end only is perfect for UI/UX work. Faster setup, no Docker needed, connects to cloud for content. Designer can focus solely on styling and components.",
        scenario: "UI designer needs to iterate on component styling.",
      },
      {
        id: "deploy-quiz-6",
        question:
          "You created 3 sites in collection A. Now you want to move one to collection B. Can you do this?",
        options: [
          "Yes, in site settings",
          "Yes, through CLI",
          "No, sites can't be moved between collections",
          "Yes, but only in Deploy app",
        ],
        correctAnswer: 2,
        explanation:
          "Sites cannot be moved between collections after creation. You must plan your site collection structure carefully before creating sites.",
        scenario: "Reorganizing your multi-site architecture.",
      },
      {
        id: "deploy-quiz-7",
        question: "What role is required to access the SitecoreAI Deploy app?",
        options: [
          "Any authenticated user",
          "Organization Admin or Owner",
          "Project Manager",
          "Developer role",
        ],
        correctAnswer: 1,
        explanation:
          "Organization Admin or Owner role is required to access Deploy app. These roles can create/manage projects, grant access, and configure deployments.",
        scenario: "New team member needs Deploy app access.",
      },
      {
        id: "deploy-quiz-8",
        question:
          "During deployment, you see warnings in the log but it completes successfully. What should you do?",
        options: [
          "Ignore them completely",
          "Review warnings - they may indicate future problems",
          "Roll back the deployment",
          "Delete and redeploy",
        ],
        correctAnswer: 1,
        explanation:
          "Warnings are non-critical but should be reviewed. They may indicate deprecated settings or potential issues that could cause problems later. Address them proactively.",
        scenario: "Deployment succeeded but logs show warnings.",
      },
      {
        id: "deploy-quiz-9",
        question:
          "Your local front-end app needs to connect to cloud CM. What file contains the connection settings?",
        options: [
          "package.json",
          ".env.local",
          "sitecore.json",
          "xmcloud.build.json",
        ],
        correctAnswer: 1,
        explanation:
          ".env.local contains environment variables that connect your local app to cloud CM. Copy these from Deploy app's Developer settings.",
        scenario: "Setting up local development environment.",
      },
      {
        id: "deploy-quiz-10",
        question:
          "You have standard license. How many production environments can you create per project?",
        options: [
          "Unlimited",
          "3 production environments",
          "1 production + 2 non-production",
          "2 production + 1 non-production",
        ],
        correctAnswer: 2,
        explanation:
          "Standard license includes 1 production environment and 2 non-production environments per project. Plan your dev, QA, and prod strategy accordingly.",
        scenario: "Planning environment strategy for new project.",
      },
      {
        id: "deploy-quiz-11",
        question:
          "What's the purpose of an analytics identifier assigned to a site?",
        options: [
          "Just a unique ID with no function",
          "Tracks interactions and enables personalization",
          "Required for deployment only",
          "Links to Google Analytics",
        ],
        correctAnswer: 1,
        explanation:
          "Analytics identifiers track user interactions, enable personalization, and define the scope of analytics (per site, language, or multi-site). Essential for CDP/Personalize.",
        scenario: "Setting up analytics for new site.",
      },
      {
        id: "deploy-quiz-12",
        question:
          "Which deployment tool gives the most verbose output for troubleshooting?",
        options: [
          "Deploy App",
          "Deploy API",
          "CLI plugin",
          "All provide same output",
        ],
        correctAnswer: 2,
        explanation:
          "CLI plugin provides more verbose output than the REST API and can combine multiple API calls. Best for detailed monitoring and troubleshooting.",
        scenario: "Need detailed deployment feedback for debugging.",
      },
    ],
  },
  {
    id: "experience-edge-apis",
    title: "Experience Edge & APIs",
    description: "GraphQL queries, mutations, Admin API, and webhooks",
    estimatedTime: 24,

    content: `# Experience Edge & APIs

## What is Experience Edge?

**Globally distributed, scalable API endpoint** for content delivery.

### Purpose
Replaces traditional **Content Delivery (CD) servers** with cloud-based CDN.

### How It Works
**Content flow:**
1. Author content in **CM instance**
2. Publish to **Experience Edge**
3. Front-end apps fetch via **GraphQL API**
4. Content delivered through **global CDN**

### Key Characteristics
- Serves **static, cached content**
- Highly efficient
- Globally distributed
- API-first access (GraphQL)

---

## Benefits of Experience Edge

### Scalability
Handles **massive traffic spikes** effortlessly.

### Performance
**Rapid global delivery** through:
- CDN caching
- Optimized API access
- Geographic distribution

### Reduced Complexity
**Eliminates need** for:
- Managing CD servers
- Scaling infrastructure
- Server maintenance

### Cost-Effectiveness
**More affordable** than dedicated CD infrastructure.

### Better Development
**Clean API access** for front-end developers.

---

## SitecoreAI CMS APIs

Five main APIs for different purposes.

### 1. Preview API

**Purpose:** Preview content before publishing

**Access:** Content directly from CM instance

**Used for:** Testing in staging environments

**Endpoint:** \`https://<your-host>/sitecore/api/graph/edge\`

**GraphQL IDE:** \`https://<your-host>/sitecore/api/graph/edge/ide\`

**Key point:** Sees drafts and unapproved content

### 2. Delivery API (Live)

**Purpose:** Access published content on Edge

**Used for:** Production websites and apps

**Endpoint:** \`https://edge.sitecorecloud.io/api/graphql/v1\`

**GraphQL IDE:** \`https://edge.sitecorecloud.io/api/graphql/ide\`

**Key point:** High-performance, highly available

### 3. Authoring and Management API

**Purpose:** Manage Sitecore content via GraphQL

**Capabilities:** Read AND write (CRUD operations)

**Endpoint:** \`https://{instance}/sitecore/api/authoring/graphql/v1\`

**GraphQL IDE:** \`https://{instance}/sitecore/api/authoring/graphql/ide\`

**Key point:** Single endpoint for content management

### 4. Token API

**Purpose:** Manage API keys

**Type:** REST API

**Used for:** Controlling Delivery API access

### 5. Admin API

**Purpose:** Administer Edge configuration

**Type:** REST API

**Used for:** Webhooks, cache management, settings

**Base URL:** \`https://edge.sitecorecloud.io/api/admin/v1\`

---

## Context IDs

**Unified identifier** that maps to all your resources.

### Purpose
Simplifies setup and configuration for solutions.

### Two Types

**Preview Context ID:**
- Access **all content** (drafts + approved)
- Uses **Preview API**
- For development/testing

**Live Context ID:**
- Access **published content only**
- Uses **Delivery API**
- For production sites

### Important
**Regenerating Context ID** requires:
- Update all apps/services
- Redeploy environment

---

## API Tokens

**Required for authentication** when accessing APIs.

### Preview API Token

**Generate in Deploy app:**
- Environment Details tab
- "Generate Preview API token"
- Copy token

**Use for:** 
- Testing content
- Development work
- Accessing drafts

### Delivery API Token

**Generate in Deploy app:**
- Environment Details tab
- "Generate Delivery API token"
- Copy token

**Use for:**
- Production sites
- Published content only
- Live applications

### Using Tokens

**Add to HTTP headers:**
json
{
  "sc_apikey": "YOUR-API-TOKEN"
}

---

## Environment Variables

**Key-value pairs** for configuration settings.

### Where to Manage
Three locations:
1. \`.env\` or \`.env.local\` file
2. Hosting provider settings (e.g., Vercel)
3. **SitecoreAI Deploy app** (recommended)

### Benefits
- External to source code
- Environment-dependent values
- Easy configuration changes
- No code modifications needed

### Pre-Defined Variables

**Sitecore_GraphQL_ExposePlayground:**
- Enables/disables GraphQL playground
- Set to "true" to enable

**SITECORE_SPE_ELEVATION:**
- User account control for PowerShell Extension

**PUBLISHING_LOG_LEVEL_VALUE:**
- Log level for publishing

**LOG_LEVEL_VALUE:**
- General log level

### Managing Variables

**In Deploy app:**
1. Select project and environment
2. Click "Variables" tab
3. Edit or create variables
4. Set as "Secret" to hide values
5. Choose target (CM, rendering, or both)
6. **Must rebuild/redeploy** to apply changes!

---

## GraphQL IDE Setup

**Interactive playground** for testing queries.

### Preview API Setup

**Steps:**
1. Deploy app → Environment → Details
2. Click "Launch IDE" for Preview
3. Generate Preview API token
4. Add to HTTP headers: \`{"sc_apikey":"token"}\`
5. Test queries!

**What you can do:**
- Test all content (including drafts)
- Query CM instance directly
- Develop and debug queries

### Delivery API Setup

**Steps:**
1. Generate Delivery API token
2. Open Delivery GraphQL IDE
3. Add token to headers
4. Query published content

**What you can do:**
- Test published content only
- Simulate production queries
- Verify Edge delivery

---

## Experience Edge Schema

**Organized structure** of GraphQL API.

### Exploring Schema

**In GraphQL IDE:**
- **Docs tab** - API documentation
- **Schema tab** - Type system structure
- Both help understand available operations

### Query Entry Points

**Four main entry points:**

**item:**
- Query content by path or ID
- Access specific items

**layout:**
- Query by site and route
- Get Layout Service JSON

**search:**
- Boolean search queries
- Find items by field values

**site:**
- Retrieve site information
- Access site configurations

---

## Querying Content

### Basic Query Structure

**Example - Query item by path:**
graphql
query {
  item(path: "/sitecore/content/home") {
    name
    id
    fields {
      name
      value
    }
  }
}

### Using Variables

**Declare variables:**
graphql
query GetItem($path: String!) {
  item(path: $path) {
    name
    id
  }
}

**In Variables panel:**
json
{
  "path": "/sitecore/content/home"
}

### Layout Query

**Get page layout:**
graphql
query {
  layout(
    language: "en"
    routePath: "/"
    site: "skate-park"
  ) {
    item {
      rendered
    }
  }
}

### Site Query

**Get site info:**
graphql
query {
  site {
    allSiteInfo {
      results {
        name
        routes(first: 10, language: "en") {
          results {
            routePath
          }
        }
      }
    }
  }
}

---

## Authoring and Management API

**Dedicated GraphQL API** for content management.

### Key Difference
**Other APIs:** Read-only content delivery

**This API:** Read AND write operations

### Supported Operations

**Queries:** Read content and configurations

**Mutations:** Create, update, delete content

### Key Features

**Dedicated schema:**
- Purpose-built for management
- Separate from delivery API

**Read/Write flexibility:**
- Full CRUD operations
- Content modifications

**Upgrade safety:**
- No in-process code
- Easier upgrades

**Standardized:**
- Uses GraphQL
- Consistent patterns

**Extended functionality:**
- Operations beyond UI
- Automation possible

### API Types Covered

**Core types:**
- **Item** - Content CRUD
- **Media** - Asset management
- **Template** - Template operations
- **Search** - Content finding
- **Site** - Site management
- **Others** - Archive, Database, Index, Job, Language, Publishing, Security, Workflow, Rules

### Practical Use Cases

**Custom migration tools:**
- External automation
- No code deployment to CM
- Independent operation

**Editorial dashboards:**
- Custom interfaces
- Specialized workflows

**Multi-channel distribution:**
- Automated content push
- Integration with other systems

### Access Requirements

**Role needed:** "sitecore\\Sitecore Client Users" or higher

**Enable playground:** Set \`Sitecore_GraphQL_ExposePlayground\` to "true"

---

## GraphQL Mutations

**Modify content** using GraphQL.

### What are Mutations?

**Queries = Read**

**Mutations = Write** (Create, Update, Delete)

### CRUD Operations

**Create item:**
graphql
mutation {
  createItem(
    input: {
      name: "New Page"
      templateId: "{template-guid}"
      parent: "/sitecore/content"
    }
  ) {
    item {
      id
      name
    }
  }
}

**Update fields:**
graphql
mutation {
  updateItem(
    input: {
      path: "/sitecore/content/home"
      fields: [
        { name: "Title", value: "New Title" }
        { name: "Content", value: "New content" }
      ]
    }
  ) {
    item {
      name
      fields {
        name
        value
      }
    }
  }
}

**Delete item:**
graphql
mutation {
  deleteItem(
    input: {
      path: "/sitecore/content/old-page"
    }
  ) {
    success
  }
}

### Publishing Operations

**Publish item:**
graphql
mutation {
  publishItem(
    input: {
      path: "/sitecore/content/home"
      targets: ["web"]
    }
  ) {
    success
  }
}

---

## Experience Edge Admin API

**REST API** for administrative operations.

### Purpose
Manage Edge tenant configuration and operations.

### Key Endpoints

**ClearCacheForTenant:**
- Clear entire cache
- Force content refresh

**DeleteContent:**
- Remove tenant data
- Clean up storage

**GetSettings:**
- List all settings
- Review configuration

**UpdateSettings:**
- Update all settings
- Full configuration change

**PatchSettings:**
- Update specific setting
- Partial updates

**Webhook endpoints:**
- Create, update, delete webhooks
- List and get webhooks

### Authentication

**Uses JWT (JSON Web Token)**

**Header format:**
Authorization: Bearer <token>

### Getting JWT

**Prerequisites:**
Create client credentials:
- **Edge administration client** - Environment-specific
- **Organization automation client** - Org-wide access

**Request token:**

**POST to:** \`https://auth.sitecorecloud.io/oauth/token\`

**Include:**
- \`audience\`: "https://api.sitecorecloud.io"
- \`grant_type\`: "client_credentials"
- \`client_id\`: Your client ID
- \`client_secret\`: Your client secret

**Token validity:** 24 hours

### Creating Client Credentials

**In Deploy app:**
1. Go to Credentials tab
2. Click Environment tab
3. "Create credentials" → "Edge administration"
4. Fill details and create
5. **Copy secret immediately** (shown once!)

### Using Admin API

**Example - Get settings:**

**HTTP GET:** \`https://edge.sitecorecloud.io/api/admin/v1/settings\`

**Headers:** \`Authorization: Bearer <jwt>\`

**Response includes:**
- \`contentCacheTtl\` (default: 4 hours)
- Other configuration settings

---

## Experience Edge Webhooks

**Real-time notifications** for content events.

### Purpose

**Inform external apps** about:
- Content updates
- Publishing events
- Changes to Edge

**Trigger automated actions:**
- Cache clearing
- Build processes
- Integration workflows

### Common Use Case

**Static Site Generation (SSG):**

1. Content published to Edge
2. Webhook triggers at end of publishing
3. Calls build system (Vercel, Netlify)
4. Build system pulls latest content
5. New static site generated and deployed

**Perfect for:** Gatsby, Next.js static exports

### Execution Modes

**OnEnd (Default):**
- Executes after publishing completes
- Configurable body format
- Can use text/plain or application/json

**OnUpdate:**
- Executes with content changes
- Always application/json format
- Includes change details

### Managing Webhooks

**Via Admin API endpoints:**

**ListWebhooks:**
- \`GET /api/admin/v1/webhooks\`
- See all webhooks

**CreateWebhook:**
- \`POST /api/admin/v1/webhooks\`
- Create new webhook

**UpdateWebhook:**
- \`PUT /api/admin/v1/webhooks/{id}\`
- Modify existing webhook

**GetWebhookById:**
- \`GET /api/admin/v1/webhooks/{id}\`
- Get specific webhook

**DeleteWebhook:**
- \`DELETE /api/admin/v1/webhooks/{id}\`
- Remove webhook

### Creating Webhook

**POST request properties:**
json
{
  "executionMode": "OnEnd",
  "url": "https://your-build-system.com/webhook",
  "headers": {
    "Authorization": "Bearer token"
  }
}

### Testing Webhooks

**Steps:**
1. Create webhook pointing to test URL
2. Publish content to Edge
3. Check publishing status
4. Verify payload received at target URL

**Test tool:** webhook.site (for testing payloads)

---

## Key Concepts Summary

### APIs Overview
- **Preview API** = Draft content from CM
- **Delivery API** = Published content from Edge
- **Authoring API** = CRUD operations
- **Admin API** = Edge configuration
- **Token API** = Key management

### Context IDs
- **Preview** = All content (dev/test)
- **Live** = Published only (production)

### Authentication
- **API tokens** = For Preview/Delivery APIs
- **JWT** = For Admin API (24hr validity)

### GraphQL Operations
- **Queries** = Read data
- **Mutations** = Write/modify data

### Webhooks
- **OnEnd** = After publishing
- **OnUpdate** = With changes
- **Use case** = Trigger builds/automation

### Important Points
- **Must rebuild** after env variable changes
- **Context ID regeneration** requires redeploy
- **Client secret** shown only once
- **JWT expires** after 24 hours
- **Webhooks require** Admin API access

---

## Best Practices

### Development
- Use **Preview API** for development
- Test queries in **GraphQL IDE** first
- Use **variables** for reusable queries
- Store **tokens securely** in .env files

### Production
- Use **Delivery API** for live sites
- Cache responses when possible
- Monitor **webhook execution**
- Set appropriate **cache TTL**

### Security
- **Never expose** API tokens in client code
- Rotate tokens regularly
- Use **Secret** option for sensitive env vars
- Limit **JWT scope** to what's needed

### Performance
- Leverage **CDN caching** on Edge
- Query **only needed fields**
- Use **pagination** for large datasets
- Implement **error handling**`,

    flashcards: [
      {
        id: "edge-1",
        question: "What is Experience Edge and what does it replace?",
        answer:
          "A globally distributed, scalable API endpoint for content delivery via CDN. Replaces traditional Content Delivery (CD) servers.",
        difficulty: "easy",
      },
      {
        id: "edge-2",
        question: "What's the difference between Preview API and Delivery API?",
        answer:
          "Preview API: Access all content including drafts from CM. Delivery API: Access only published content from Edge for production.",
        difficulty: "medium",
      },
      {
        id: "edge-3",
        question: "What are the two Context ID types?",
        answer:
          "1) Preview Context ID - all content including drafts, 2) Live Context ID - published content only for production.",
        difficulty: "easy",
      },
      {
        id: "edge-4",
        question: "What authentication do you need for Admin API?",
        answer:
          "JWT (JSON Web Token) obtained via client credentials (client ID and secret). Token valid for 24 hours. Use Bearer token in Authorization header.",
        difficulty: "medium",
      },
      {
        id: "edge-5",
        question:
          "What's the difference between GraphQL queries and mutations?",
        answer:
          "Queries = Read operations (GET data). Mutations = Write operations (CREATE, UPDATE, DELETE data).",
        difficulty: "easy",
      },
      {
        id: "edge-6",
        question: "What does the Authoring and Management API enable?",
        answer:
          "Full CRUD operations on Sitecore content via GraphQL. Unlike other APIs, it supports both read AND write operations for content management.",
        difficulty: "medium",
      },
      {
        id: "edge-7",
        question: "What are the four GraphQL query entry points?",
        answer:
          "1) item - query by path/ID, 2) layout - query by site/route, 3) search - Boolean queries, 4) site - site information.",
        difficulty: "hard",
      },
      {
        id: "edge-8",
        question: "What are Experience Edge webhooks used for?",
        answer:
          "Real-time notifications about content events. Trigger automated actions like builds, cache clearing, or integrations when content is published.",
        difficulty: "medium",
      },
      {
        id: "edge-9",
        question:
          "What are the two webhook execution modes and when do they trigger?",
        answer:
          "OnEnd (default) - executes after publishing completes. OnUpdate - executes with content changes as they happen.",
        difficulty: "hard",
      },
      {
        id: "edge-10",
        question:
          "What must you do after changing environment variables in Deploy app?",
        answer:
          "You MUST rebuild and redeploy the environment. Changes don't apply until rebuild/redeploy.",
        difficulty: "medium",
      },
      {
        id: "edge-11",
        question: "Where do you add API tokens when using GraphQL IDE?",
        answer: 'In HTTP Headers section, add: {"sc_apikey":"YOUR-TOKEN"}',
        difficulty: "easy",
      },
      {
        id: "edge-12",
        question: "How long is a JWT token valid for Admin API?",
        answer:
          "24 hours. After that, you must request a new JWT using client credentials.",
        difficulty: "easy",
      },
    ],

    quizQuestions: [
      {
        id: "edge-quiz-1",
        question:
          "Your front-end app needs to fetch published content for your live production website. Which API should you use?",
        options: [
          "Preview API",
          "Delivery API",
          "Authoring and Management API",
          "Admin API",
        ],
        correctAnswer: 1,
        explanation:
          "Delivery API is designed for production use, accessing published content from Edge with high performance and availability. Preview API is for development/testing.",
        scenario:
          "Building production Next.js app that displays content to users.",
      },
      {
        id: "edge-quiz-2",
        question:
          "You're developing locally and need to test content that's not yet published. Which Context ID and API should you use?",
        options: [
          "Live Context ID with Delivery API",
          "Preview Context ID with Preview API",
          "Either Context ID works the same",
          "Admin API with JWT",
        ],
        correctAnswer: 1,
        explanation:
          "Preview Context ID with Preview API accesses all content including drafts and unapproved items directly from CM. Perfect for development and testing.",
        scenario: "Developer needs to test draft content before publishing.",
      },
      {
        id: "edge-quiz-3",
        question:
          "You need to create and update content items programmatically. Which API provides this capability?",
        options: [
          "Preview API (read-only)",
          "Delivery API (read-only)",
          "Authoring and Management API (read/write)",
          "Token API",
        ],
        correctAnswer: 2,
        explanation:
          "Authoring and Management API is the only one that supports write operations (mutations). Preview and Delivery APIs are read-only for content retrieval.",
        scenario: "Building custom content migration tool.",
      },
      {
        id: "edge-quiz-4",
        question:
          "You changed the Sitecore_GraphQL_ExposePlayground variable to 'true' but the IDE still won't load. What's missing?",
        options: [
          "Wait 24 hours for changes to apply",
          "Rebuild and redeploy the environment",
          "Regenerate the Context ID",
          "Create new API token",
        ],
        correctAnswer: 1,
        explanation:
          "Environment variable changes require a rebuild and redeploy to take effect. The changes are not applied until you explicitly rebuild/redeploy.",
        scenario: "Trying to enable GraphQL playground access.",
      },
      {
        id: "edge-quiz-5",
        question:
          "Your static site generator needs to rebuild automatically when content is published. What should you set up?",
        options: [
          "Polling the Delivery API every minute",
          "Experience Edge webhook with OnEnd mode",
          "Manual rebuild after each publish",
          "Admin API cache clear",
        ],
        correctAnswer: 1,
        explanation:
          "Webhooks with OnEnd mode notify your build system when publishing completes. This triggers automatic builds without polling or manual intervention.",
        scenario: "Automating Next.js static site builds on content changes.",
      },
      {
        id: "edge-quiz-6",
        question:
          "You're getting '401 Unauthorized' when calling Admin API. What do you need?",
        options: [
          "API token in sc_apikey header",
          "JWT in Authorization: Bearer header",
          "Preview Context ID",
          "Regenerate Live Context ID",
        ],
        correctAnswer: 1,
        explanation:
          "Admin API requires JWT authentication with Bearer token in Authorization header. API tokens (sc_apikey) are for Preview/Delivery APIs, not Admin API.",
        scenario: "Trying to clear Edge cache programmatically.",
      },
      {
        id: "edge-quiz-7",
        question: "Your JWT for Admin API stopped working. Most likely reason?",
        options: [
          "Context ID was regenerated",
          "24-hour expiration reached",
          "Environment was redeployed",
          "API token was rotated",
        ],
        correctAnswer: 1,
        explanation:
          "JWTs for Admin API expire after 24 hours. You must request a new token using your client credentials when the old one expires.",
        scenario: "Admin API calls failing after working yesterday.",
      },
      {
        id: "edge-quiz-8",
        question:
          "What's the correct HTTP header format for adding an API token in GraphQL IDE?",
        options: [
          '{"Authorization":"Bearer token"}',
          '{"sc_apikey":"token"}',
          '{"api-token":"token"}',
          '{"X-API-Key":"token"}',
        ],
        correctAnswer: 1,
        explanation:
          'Preview and Delivery GraphQL APIs use sc_apikey header: {"sc_apikey":"YOUR-TOKEN"}. Bearer token is for Admin API, not GraphQL content APIs.',
        scenario: "Setting up GraphQL IDE for first time.",
      },
      {
        id: "edge-quiz-9",
        question: "You regenerated a Context ID. What must you do now?",
        options: [
          "Nothing, it updates automatically",
          "Update all apps/services and redeploy environment",
          "Just restart the environment",
          "Clear the Edge cache",
        ],
        correctAnswer: 1,
        explanation:
          "Regenerating Context ID requires updating all apps/services using the old ID and redeploying the environment. The old ID stops working immediately.",
        scenario: "Context ID was compromised and needs rotation.",
      },
      {
        id: "edge-quiz-10",
        question: "Where are environment variables stored in Deploy app?",
        options: [
          "In the source code repository",
          "In Variables tab of environment settings",
          "In the .env.local file only",
          "In Vercel project settings only",
        ],
        correctAnswer: 1,
        explanation:
          "Deploy app stores environment variables in the Variables tab of each environment. This is separate from source code and hosting providers for centralized management.",
        scenario: "Managing configuration across environments.",
      },
      {
        id: "edge-quiz-11",
        question:
          "What query entry point should you use to get Layout Service JSON for a page?",
        options: ["item", "layout", "search", "site"],
        correctAnswer: 1,
        explanation:
          "The 'layout' entry point is specifically designed to query items by site and route path to retrieve Layout Service JSON for rendering.",
        scenario: "Next.js app needs page layout data for rendering.",
      },
      {
        id: "edge-quiz-12",
        question:
          "Your webhook is created but not triggering. What should you verify first?",
        options: [
          "JWT is still valid",
          "Content is actually being published to Edge",
          "Context ID is correct",
          "API token is not expired",
        ],
        correctAnswer: 1,
        explanation:
          "Webhooks trigger on publish events. Verify content is being published to Edge successfully. Check publishing status in Authoring API or CM interface.",
        scenario: "Webhook configured but build not triggering.",
      },
    ],
  },
  {
    id: "templates-content-modeling-intro",
    title: "Introduction to Templates & Content Modeling",
    description:
      "Understanding items, templates, and content modeling fundamentals",
    estimatedTime: 20,

    content: `# Introduction to Templates & Content Modeling

## What Are Items in SitecoreAI CMS?

**Everything in SitecoreAI CMS is an item.** Items are the fundamental building blocks stored in a hierarchical content tree.

### Types of Items

Items can represent:
- **Web pages** - Like your Home page or product pages
- **Components** - Reusable content blocks
- **Pure data entities** - Structured data without presentation
- **Configuration elements** - System settings and definitions

**Example:** The Home page in a Skate Park site is a web page item with a unique GUID identifier.

## What Are Templates?

**Templates are blueprints for items.** Every item in SitecoreAI CMS is based on a template.

### Templates Define Two Key Things

1. **Structure** - What fields and data the item can contain
2. **Type** - What kind of item it is

**Think of it like a form:** The template is the blank form with labeled fields, and the item is the filled-out form with actual data.

### Example: Page Template

A Page template might define:
- Title field (text)
- Content field (rich text)
- Image field (image)
- Publish date (date)

Each page item based on this template will have these same fields ready to fill in.

## Data Templates as Content Models

**Data templates specifically define content structure:**

### Key Characteristics

- **Serve as the content model** for your data
- **Determine fields and values** an item can contain
- **Establish relationships** between content types
- **Shape the authoring experience** for content editors

### Why Content Modeling Matters

Content modeling is fundamental to Sitecore development:

**Impact on flexibility:**
- Good models allow content reuse
- Support multiple presentation contexts
- Enable easy content migrations

**Impact on scalability:**
- Well-structured models grow with your needs
- Reduce technical debt
- Make maintenance easier

**Impact on authoring experience:**
- Clear, logical field organization
- Intuitive content creation
- Reduced training time for editors

**⚡ Best Practice:** Plan your content model **before** jumping into the CMS. Draw it out, get feedback, iterate.

## Content Modeling Process

The typical workflow involves:

### 1. Creating Data Templates
Define the structure with fields, types, and sections.

### 2. Defining Standard Values
Set default content and behaviors for new items.

### 3. Assigning Insert Options
Control what content types can be created where.

### 4. Creating Content Items
Build actual content based on your templates.

## Key Takeaways

- Everything in SitecoreAI CMS is an item
- Templates are blueprints that define item structure
- Data templates serve as your content model
- Content modeling should happen before implementation
- Good modeling improves flexibility, scalability, and UX
- The process: templates → standard values → insert options → content`,

    flashcards: [
      {
        id: "tmpl-intro-1",
        question: "What is an item in SitecoreAI CMS?",
        answer:
          "Everything in SitecoreAI CMS is an item. Items are content and configuration elements stored in a hierarchical tree, including web pages, components, data entities, and configuration.",
        difficulty: "easy",
      },
      {
        id: "tmpl-intro-2",
        question: "What is a template in SitecoreAI CMS?",
        answer:
          "A template is a blueprint that defines the structure and type of an item. Every item is based on a template that determines what fields and data it can contain.",
        difficulty: "easy",
      },
      {
        id: "tmpl-intro-3",
        question: "What is a data template?",
        answer:
          "A data template is the content model that defines the structure of content items, including what fields, values, and relationships they can have.",
        difficulty: "easy",
      },
      {
        id: "tmpl-intro-4",
        question: "Why is content modeling important?",
        answer:
          "Content modeling impacts flexibility, scalability, and the authoring experience. Good models enable content reuse, support growth, and make editing intuitive for content teams.",
        difficulty: "medium",
      },
      {
        id: "tmpl-intro-5",
        question:
          "What are the four main steps in the content modeling process?",
        answer:
          "Creating data templates, defining standard values, assigning insert options, and creating content items.",
        difficulty: "medium",
      },
      {
        id: "tmpl-intro-6",
        question: "What's the difference between a template and an item?",
        answer:
          "A template is the blueprint (like a blank form), while an item is the instance based on that template (like a filled-out form with actual data).",
        difficulty: "medium",
      },
      {
        id: "tmpl-intro-7",
        question: "What types of things can be represented as items?",
        answer:
          "Web pages, components, pure data entities, and configuration elements - everything in Sitecore is an item.",
        difficulty: "easy",
      },
      {
        id: "tmpl-intro-8",
        question: "When should content modeling happen?",
        answer:
          "Before jumping into the CMS. Plan, draw out the model, get feedback, and iterate before implementation.",
        difficulty: "medium",
      },
    ],

    quizQuestions: [
      {
        id: "tmpl-intro-quiz-1",
        question:
          "You're starting a new project. When should you design your content model?",
        options: [
          "After building some pages to see what's needed",
          "Before jumping into the CMS",
          "After content editors start requesting features",
          "During the deployment phase",
        ],
        correctAnswer: 1,
        explanation:
          "Content modeling should happen before CMS implementation. Plan it out, get feedback, and iterate. This prevents technical debt and ensures your model supports all requirements from the start.",
        scenario: "Project kickoff for a new Sitecore implementation.",
      },
      {
        id: "tmpl-intro-quiz-2",
        question:
          "A content editor needs a new field on all blog posts. Where should you add it?",
        options: [
          "Directly to each existing blog post item",
          "To the Blog Post template",
          "To the Standard Template",
          "To the insert options",
        ],
        correctAnswer: 1,
        explanation:
          "Add fields to the template, not individual items. When you modify the Blog Post template, all blog post items based on it will automatically have the new field available.",
      },
      {
        id: "tmpl-intro-quiz-3",
        question: "What makes a good content model?",
        options: [
          "Lots of templates with many specific fields",
          "One template per page type with all fields",
          "Reusable, flexible structure that supports growth",
          "Exact replica of the visual design",
        ],
        correctAnswer: 2,
        explanation:
          "Good content models are reusable, flexible, and support growth. They separate content from presentation, enable reuse across contexts, and scale as requirements evolve.",
      },
      {
        id: "tmpl-intro-quiz-4",
        question:
          "Your project has Events, News, and Blog posts with similar fields. What's the best approach?",
        options: [
          "Create three separate templates with duplicated fields",
          "Use one generic 'Content' template for all three",
          "Create a base template with shared fields and inherit it",
          "Copy and paste fields between templates",
        ],
        correctAnswer: 2,
        explanation:
          "Use template inheritance. Create a base template with shared fields (title, date, image) and have Events, News, and Blog templates inherit from it. This reduces duplication and makes maintenance easier.",
        scenario: "Multiple content types need similar fields.",
      },
      {
        id: "tmpl-intro-quiz-5",
        question: "What is NOT a type of item in SitecoreAI CMS?",
        options: [
          "Web pages",
          "Components",
          "Templates themselves",
          "Server configuration files",
        ],
        correctAnswer: 3,
        explanation:
          "Templates, pages, and components are all items in the content tree. Server configuration files are external to Sitecore's item system - they're actual files on disk, not items in the content tree.",
      },
      {
        id: "tmpl-intro-quiz-6",
        question: "How does content modeling affect the authoring experience?",
        options: [
          "It doesn't - modeling is only for developers",
          "Clear structure makes editing intuitive and reduces training time",
          "More fields always make editing easier",
          "It only matters for the front-end display",
        ],
        correctAnswer: 1,
        explanation:
          "Content modeling directly impacts editors. Clear, logical field organization makes content creation intuitive, reduces training time, and prevents errors. Good models consider both developer and editor needs.",
      },
      {
        id: "tmpl-intro-quiz-7",
        question:
          "You need to store product data that won't be displayed as pages. What should you create?",
        options: [
          "Regular page items",
          "Component items",
          "Pure data items based on a data template",
          "Configuration elements",
        ],
        correctAnswer: 2,
        explanation:
          "Pure data items are perfect for structured data without presentation. Create a Product template with appropriate fields, and items based on it will store data that can be referenced by pages but don't need their own URLs.",
      },
      {
        id: "tmpl-intro-quiz-8",
        question: "What two things do templates define?",
        options: [
          "Content and presentation",
          "Structure and type",
          "Fields and workflows",
          "Layout and styling",
        ],
        correctAnswer: 1,
        explanation:
          "Templates define structure (what fields and data the item contains) and type (what kind of item it is). Presentation, workflows, and styling are separate concerns configured elsewhere.",
      },
      {
        id: "tmpl-intro-quiz-9",
        question:
          "Your content model is becoming complex with many templates. What's a warning sign?",
        options: [
          "Templates inherit from multiple base templates",
          "Templates have 'inert fields' - inherited but irrelevant",
          "Different templates for different content types",
          "Using field sections to organize fields",
        ],
        correctAnswer: 1,
        explanation:
          "Inert fields (inherited but not relevant to the content type) indicate your inheritance hierarchy needs refinement. This confuses editors and wastes space. Review your base templates and consider breaking them into smaller, more focused components.",
      },
      {
        id: "tmpl-intro-quiz-10",
        question: "Each item in Sitecore has a GUID. Why is this important?",
        options: [
          "It makes URLs shorter",
          "It provides a unique, permanent identifier regardless of name or location",
          "It improves performance",
          "It's required for templates only",
        ],
        correctAnswer: 1,
        explanation:
          "GUIDs provide permanent, unique identification. Even if an item is renamed or moved, its GUID stays the same. This enables reliable referencing across languages, versions, and system boundaries.",
      },
    ],
  },
  {
    id: "defining-data-templates",
    title: "Defining Data Templates",
    description: "Field types, sections, properties, and template structure",
    estimatedTime: 22,

    content: `# Defining Data Templates

## Anatomy of a Template

Think of creating a data template like designing a database table:
- **Fields** are like columns
- **Field types** define what data can be stored
- **Field sections** group related fields together

## Fields: Where Content Lives

Fields are the fundamental units of content in a template.

### Key Characteristics

**Each field represents a single piece of information:**
- A title
- An image
- A date
- A description

**Fields have types that determine data storage:**
- Single-Line Text
- Rich Text Editor
- Image
- Date
- Number

**Fields are where content authors input content:**
- Content editors see fields as form inputs
- Field types determine the editing interface
- Good field naming helps editors understand what to enter

## Field Sections: Organizing Fields

Field sections create logical groupings of related fields.

### Benefits of Field Sections

**Improve navigation:**
- Sections can be expanded or collapsed
- Reduce visual clutter in Content Editor
- Help editors find fields quickly

**Create logical groupings:**
- Group "Content" fields separately from "Metadata"
- Keep related fields together
- Mirror editorial workflow

**Consistent naming improves UX:**
- Use "Content" for main editorial fields
- Use "Metadata" for SEO/technical fields
- Use "Settings" for behavior configuration

### Example Field Section Structure

**Content Section:**
- Title
- Introduction
- Body
- Image

**Details Section:**
- Event Date
- Location
- Duration
- Related Events

## Field Properties and Configuration

Each field has important configuration options.

### Basic Properties

**Name:**
- Display name shown to content editors
- Use clear, descriptive names
- Avoid technical jargon

**Type:**
- Determines what kind of data is stored
- Affects the editing interface
- Choose appropriate types for content needs

### Source Field Configuration

The **Source** field configures type-specific options:

**For Image/File fields:**
- Sets the browsing location
- Example: \`/sitecore/media library/Project/Images\`

**For Rich Text fields:**
- Configures toolbar options
- Controls available formatting
- Example: \`/sitecore/system/Settings/Html Editor Profiles/Rich Text Full\`

**For Droplink/Droptree fields:**
- Sets the source of selectable items
- Example: \`/sitecore/content/Settings/Locations\`

### Versioning Options

Fields can behave differently across languages and versions:

**Versioned (default):**
- Unique data per language AND version
- Example: Page title that changes in each version and language

**Shared:**
- Data shared across ALL languages and ALL versions
- Example: Product SKU that's universal

**Unversioned:**
- Unique per language, shared across versions
- Example: Product name (translated but not versioned)

*Note: We'll cover versioning in detail in a later section.*

## Template Icons for Visual Identification

Icons help content authors quickly identify item types.

### Benefits

- **Visual cues** in the content tree
- **Quick identification** of content types
- **Support content management** at scale

### How to Set

- Set on the template item itself
- Choose from Sitecore's icon library
- Pick icons that clearly represent the content type

**Example:** Use a calendar icon for Event templates, a document icon for Article templates.

## Common Field Types

SitecoreAI CMS provides a comprehensive set of field types.

### Text Fields

**Single-Line Text:**
- Short text without formatting
- Use for: Titles, names, short descriptions
- Max length: Reasonable for one line

**Multi-Line Text:**
- Longer text without formatting
- Use for: Descriptions, summaries
- Plain text only

**Rich Text:**
- Formatted text with HTML
- Use for: Article bodies, formatted content
- Includes toolbar for formatting

### Selection Fields

**Droplink:**
- Select one item from a list
- Use for: Category, location, single reference
- Source defines selectable items

**Droptree:**
- Select one item from a tree view
- Use for: Hierarchical selections
- Shows full tree structure

**Checklist:**
- Select multiple items from a list
- Use for: Tags, multiple categories
- Returns multiple values

**Treelist:**
- Select multiple items from a tree
- Use for: Related items, multiple references
- Combines tree navigation with multi-select

### Media Fields

**Image:**
- Single image selection
- Use for: Photos, graphics, icons
- Stores reference to media library item

**File:**
- Any file type selection
- Use for: PDFs, downloads, documents
- Stores reference to media library item

### Date and Number Fields

**Date:**
- Date picker
- Use for: Event dates, publication dates
- Stores date value

**Datetime:**
- Date and time picker
- Use for: Precise timestamps
- Stores date and time

**Number:**
- Numeric input
- Use for: Quantities, durations, scores
- Validates numeric input

### Link and Reference Fields

**General Link:**
- Any type of link
- Use for: CTAs, navigation links
- Supports internal items, external URLs, mailto, etc.

**Droplink/Droptree:**
- Reference to another item
- Use for: Related content, lookups
- Stores item reference

### Boolean Fields

**Checkbox:**
- True/false value
- Use for: Flags, toggles, yes/no options
- Example: "Hide from navigation"

## Defining a Template: Real Example

Let's design a template for an Event Details page.

### Content Analysis

**Identify content pieces needed:**
- Heading for the event
- Introductory text
- Main content image
- Navigation thumbnail

**Identify detail fields:**
- Event location (from predefined list)
- Holiday types (multiple selection)
- Event date
- Duration in days
- Option to hide event date
- Highlights (formatted text)
- Related events
- Featured link

### Template Design

**Field Section: Content**

| Field Name | Field Type | Purpose |
|------------|------------|---------|
| ContentHeading | Single-Line Text | Event title |
| ContentIntro | Multi-Line Text | Brief description |
| ContentImage | Image | Main event image |
| NavigationImage | Image | Thumbnail for lists |

**Field Section: Details**

| Field Name | Field Type | Purpose |
|------------|------------|---------|
| EventLocation | Droplink | Select location |
| HolidayTypes | Checklist | Select types |
| EventDate | Date | When event occurs |
| EventDuration | Number | Length in days |
| HideEventDate | Checkbox | Toggle date display |
| Highlights | Rich Text | Formatted highlights |
| RelatedEvents | Treelist | Related event items |
| FeaturedLink | General Link | Call to action |

### Creating the Template

**In Content Editor:**

1. Navigate to \`/sitecore/templates/Project/[YourProject]\`
2. Create a template folder (e.g., "Events")
3. Create a new template named "Event Details"
4. Add "Content" field section
5. Add all Content fields with appropriate types
6. Add "Details" field section
7. Add all Details fields with appropriate types
8. Assign an appropriate icon
9. Save

## Key Takeaways

- Templates are structured with fields organized into sections
- Field types determine what data can be stored and how it's edited
- Source configuration customizes field behavior
- Versioning options control how fields behave across languages/versions
- Icons provide visual identification in the content tree
- Good template design considers both technical needs and editor experience
- Plan field structure before implementation`,

    flashcards: [
      {
        id: "define-tmpl-1",
        question: "What are the three main components of a template structure?",
        answer:
          "Fields (the individual data points), field types (defining what data is stored), and field sections (grouping related fields together).",
        difficulty: "easy",
      },
      {
        id: "define-tmpl-2",
        question: "What is a field section and why is it useful?",
        answer:
          "A field section groups related fields together. It improves navigation by allowing expand/collapse, reduces clutter, and helps editors find fields quickly.",
        difficulty: "easy",
      },
      {
        id: "define-tmpl-3",
        question: "What does the Source property do in a field?",
        answer:
          "Source configures field-specific options: for Image/File fields it sets browsing location, for Rich Text it configures toolbar options, for Droplink it sets selectable items.",
        difficulty: "medium",
      },
      {
        id: "define-tmpl-4",
        question:
          "What's the difference between Single-Line Text and Multi-Line Text?",
        answer:
          "Single-Line Text is for short text like titles and names (one line). Multi-Line Text is for longer plain text like descriptions and summaries (multiple lines).",
        difficulty: "easy",
      },
      {
        id: "define-tmpl-5",
        question: "When would you use a Droplink vs. a Treelist field?",
        answer:
          "Droplink is for selecting one item from a list (single reference). Treelist is for selecting multiple items from a tree (multiple references).",
        difficulty: "medium",
      },
      {
        id: "define-tmpl-6",
        question:
          "What's the difference between versioned, unversioned, and shared fields?",
        answer:
          "Versioned: unique per language and version. Unversioned: unique per language, same across versions. Shared: same across all languages and versions.",
        difficulty: "hard",
      },
      {
        id: "define-tmpl-7",
        question: "Why add icons to templates?",
        answer:
          "Icons provide visual cues in the content tree, helping content authors quickly identify item types, especially when managing content at scale.",
        difficulty: "easy",
      },
      {
        id: "define-tmpl-8",
        question: "What field type should you use for a yes/no toggle?",
        answer:
          "Checkbox field type - it stores a true/false value and is perfect for flags, toggles, and yes/no options.",
        difficulty: "easy",
      },
      {
        id: "define-tmpl-9",
        question: "When would you use a General Link field?",
        answer:
          "General Link is used for any type of link: internal items, external URLs, mailto links, or anchors. Perfect for CTAs and navigation links.",
        difficulty: "medium",
      },
      {
        id: "define-tmpl-10",
        question:
          "What's the best practice for organizing fields into sections?",
        answer:
          "Use consistent, logical groupings: 'Content' for main editorial fields, 'Metadata' for SEO/technical fields, and 'Settings' for behavior configuration. This mirrors editorial workflow.",
        difficulty: "medium",
      },
    ],

    quizQuestions: [
      {
        id: "define-tmpl-quiz-1",
        question:
          "You need a field for a product SKU that should be the same across all languages and versions. What versioning should you use?",
        options: ["Versioned", "Unversioned", "Shared", "Language-specific"],
        correctAnswer: 2,
        explanation:
          "Shared fields are identical across all languages and versions. A product SKU is a universal identifier that doesn't change, making it perfect for a shared field. Check both Shared and Unversioned boxes.",
        scenario: "Creating a Product template with universal identifiers.",
      },
      {
        id: "define-tmpl-quiz-2",
        question:
          "Content editors complain they can't format text in a description field. What's the issue?",
        options: [
          "They don't have permissions",
          "The field is Single-Line or Multi-Line Text instead of Rich Text",
          "The Source property is misconfigured",
          "The field is marked as Shared",
        ],
        correctAnswer: 1,
        explanation:
          "Single-Line and Multi-Line Text fields don't support formatting. Change the field type to Rich Text to enable the formatting toolbar. Configure the Source to specify which toolbar profile to use.",
      },
      {
        id: "define-tmpl-quiz-3",
        question:
          "You want editors to select multiple categories from a list. Which field type is best?",
        options: ["Droplink", "Checklist", "Droptree", "Multi-Line Text"],
        correctAnswer: 1,
        explanation:
          "Checklist allows selecting multiple items from a list. Droplink only allows one selection, and Droptree shows a tree structure. Checklist is perfect for multiple categories or tags.",
      },
      {
        id: "define-tmpl-quiz-4",
        question:
          "Your Event template has 20 fields. Editors are overwhelmed. What should you do?",
        options: [
          "Remove unnecessary fields",
          "Create multiple templates",
          "Organize fields into logical field sections",
          "Make some fields shared",
        ],
        correctAnswer: 2,
        explanation:
          "Field sections organize fields into collapsible, logical groups. Create sections like 'Content', 'Details', and 'Settings' to reduce visual clutter and help editors navigate. This doesn't remove fields but makes them manageable.",
        scenario: "Improving the editing experience for complex templates.",
      },
      {
        id: "define-tmpl-quiz-5",
        question:
          "What should you configure in the Source property for an Image field?",
        options: [
          "The default image to use",
          "The browsing location in the media library",
          "The image dimensions",
          "The alt text default",
        ],
        correctAnswer: 1,
        explanation:
          "For Image and File fields, Source sets the starting browsing location. This helps editors find the right assets quickly. Example: /sitecore/media library/Project/Images",
      },
      {
        id: "define-tmpl-quiz-6",
        question:
          "You need a field for product names that translate but don't need version history. What versioning?",
        options: ["Versioned", "Unversioned", "Shared", "Language-versioned"],
        correctAnswer: 1,
        explanation:
          "Unversioned fields have different values per language but the same value across all numbered versions. Perfect for product names that need translation but rarely change within a language. Check only the Unversioned box.",
      },
      {
        id: "define-tmpl-quiz-7",
        question:
          "Editors need to select one location from a hierarchical tree. Which field type?",
        options: ["Droplink", "Droptree", "Treelist", "Checklist"],
        correctAnswer: 1,
        explanation:
          "Droptree shows a tree structure and allows selecting one item. It's perfect for hierarchical data where you need single selection. Treelist would allow multiple selections, and Droplink doesn't show hierarchy.",
      },
      {
        id: "define-tmpl-quiz-8",
        question: "What's the best practice when naming template fields?",
        options: [
          "Use technical database-style names",
          "Use clear, descriptive names that editors understand",
          "Use short abbreviated names to save space",
          "Match the CSS class names",
        ],
        correctAnswer: 1,
        explanation:
          "Field names should be clear and descriptive for content editors, not developers. Avoid technical jargon. 'Event Title' is better than 'evt_ttl' or 'h1Content'. Good naming reduces training time and errors.",
      },
      {
        id: "define-tmpl-quiz-9",
        question:
          "You're creating an Event Details template. What should you do FIRST?",
        options: [
          "Start adding fields in Content Editor",
          "Analyze content needs and plan field structure",
          "Assign an icon to the template",
          "Create Standard Values",
        ],
        correctAnswer: 1,
        explanation:
          "Always plan before implementing. Identify what content needs to be stored, decide field names and types, and group related fields into sections. This prevents rework and ensures a logical structure.",
      },
      {
        id: "define-tmpl-quiz-10",
        question:
          "Your Rich Text field is showing the wrong toolbar. Where do you fix this?",
        options: [
          "In the item's field value",
          "In the template field's Source property",
          "In the Standard Values",
          "In the rendering parameters",
        ],
        correctAnswer: 1,
        explanation:
          "The Source property on Rich Text fields specifies which toolbar profile to use. Reference a profile like /sitecore/system/Settings/Html Editor Profiles/Rich Text Full to control available formatting options.",
      },
      {
        id: "define-tmpl-quiz-11",
        question:
          "What field type would you use for a 'Hide from navigation' toggle?",
        options: [
          "Single-Line Text with validation",
          "Droplink with Yes/No items",
          "Checkbox",
          "Number field (0 or 1)",
        ],
        correctAnswer: 2,
        explanation:
          "Checkbox is the correct field type for boolean true/false values. It provides a clear toggle interface for editors and stores a proper boolean value. Don't overcomplicate simple yes/no options.",
      },
    ],
  },
  {
    id: "template-inheritance",
    title: "Template Inheritance",
    description:
      "Building composable templates with inheritance and base templates",
    estimatedTime: 20,

    content: `# Template Inheritance

## What is Template Inheritance?

Template inheritance is one of SitecoreAI CMS's most powerful features. It allows you to build complex content structures from simpler, reusable templates.

### Key Concept

**Templates can inherit from other templates:**
- Child templates automatically include all fields from parent templates
- Changes to parent templates propagate automatically
- Multiple inheritance is supported
- Follows object-oriented design principles

**Think of it like:** Biological inheritance - children inherit traits from parents, but can have their own unique characteristics too.

## How Template Inheritance Works

### Automatic Field Inclusion

When a template inherits from another template:

**All fields from the base template are automatically included:**
- No need to recreate common fields
- Fields appear as if they're part of the child template
- Content editors see a unified field set

**Sections from base templates are merged:**
- Field sections combine with child template sections
- Maintains logical organization
- Editors see one organized interface

**Changes propagate automatically:**
- Update a base template field
- All inheriting templates update instantly
- No need to update each template manually

**Multiple inheritance is supported:**
- Templates can inherit from several base templates
- Fields from all base templates are included
- Powerful but use carefully to avoid complexity

### Example

**Base Template: "_Base Content"**
- Intro (Multi-Line Text)
- ContentImage (Image)
- NavigationImage (Image)

**Child Template: "Event Details" inherits from "_Base Content"**
- Gets all _Base Content fields automatically
- Plus its own fields:
  - EventLocation (Droplink)
  - EventDate (Date)
  - EventDuration (Number)

## The Foundation: Standard Template

Every template ultimately inherits from the system's **Standard Template**.

### Characteristics

**Root of all inheritance:**
- Every template in SitecoreAI CMS inherits from Standard Template
- Forms the base of the inheritance hierarchy
- Cannot be avoided or removed

**Provides essential system fields:**
- \_\_Created, \_\_Updated dates
- \_\_Owner, \_\_Updated by
- \_\_Workflow, \_\_Lock
- Many other system fields (prefixed with \_\_)

**Normally hidden from view:**
- System fields hidden in Content Editor by default
- Keeps interface clean for editors
- Fields are still there and functional

**Critical - never modify:**
- Standard Template is part of Sitecore core
- Modifying it breaks the system
- Always inherit from it, never edit it

## Designing an Inheritance Structure

### The Problem: Field Duplication

**Without inheritance:**

**Blog Post Template:**
- Title, Intro, ContentImage, NavigationImage
- Author, PublishDate, Category

**Event Details Template:**
- Heading, Intro, ContentImage, NavigationImage
- EventDate, Location, Duration

**News Article Template:**
- Headline, Intro, ContentImage, NavigationImage
- PublishDate, Source, Region

**Problems:**
- Intro, ContentImage, NavigationImage repeated three times
- If you need to change field type, update in three places
- Easy to make mistakes
- Hard to maintain

### The Solution: Base Templates

**Create "_Base Content" Template:**
- Intro (Multi-Line Text)
- ContentImage (Image)
- NavigationImage (Image)

**Blog Post inherits from "_Base Content":**
- Gets Intro, ContentImage, NavigationImage automatically
- Adds: Author, PublishDate, Category

**Event Details inherits from "_Base Content":**
- Gets Intro, ContentImage, NavigationImage automatically
- Adds: EventDate, Location, Duration

**News Article inherits from "_Base Content":**
- Gets Intro, ContentImage, NavigationImage automatically
- Adds: PublishDate, Source, Region

**Benefits:**
- Define shared fields once
- Update in one place, applies everywhere
- Consistent field naming
- Easier maintenance
- Less prone to errors

## Implementing Template Inheritance

### Step 1: Create Base Template

**In Content Editor:**

1. Navigate to your template folder
2. Create new template: "_Base Content"
3. Add field section: "Content"
4. Add shared fields: Intro, ContentImage, NavigationImage
5. Save

**Naming convention:** Prefix base templates with underscore (\_) to indicate they're not used directly for items.

### Step 2: Clean Up Child Templates

**Remove duplicate fields from child templates:**

1. Open Event Details template
2. Select Builder tab
3. Select duplicate field section (e.g., "Content")
4. Click Builder OPTIONS > Remove
5. This removes the entire section and its fields
6. Save

**Note:** Only remove fields that will come from the base template.

### Step 3: Assign Base Templates

**Configure inheritance:**

1. Open child template (e.g., "Event Details")
2. Click Content tab (not Builder tab)
3. In "Base Template" field, add "_Base Content"
4. Save

**Result:** Child template now has all base template fields plus its own unique fields.

### Step 4: Multi-Level Inheritance

You can create inheritance chains:

**"_Base Content" inherits from "Page"**
- Page provides layout-related fields
- _Base Content adds content fields
- Event Details inherits from _Base Content
- Gets fields from both Page and _Base Content

**Configure in "_Base Content":**
1. Click Content tab
2. In "Base Template" field, add "Page"
3. Save

## Inheritance Best Practices

### Limit Hierarchy Complexity

**Keep inheritance chains reasonable:**
- 2-3 levels is ideal
- More than 4-5 levels gets confusing
- Deeper hierarchies harder to debug

**Example - Good:**

Standard Template
  └─ Page
      └─ _Base Content
          └─ Event Details

**Example - Too Complex:**

Standard Template
  └─ Base Page
      └─ Content Base
          └─ Editorial Base
              └─ Article Base
                  └─ News Base
                      └─ Local News

### Prevent Inert Fields

**Inert fields** are inherited fields that aren't relevant to the content type.

**Problem Example:**
- All templates inherit from "Commerce Product"
- Product templates get Price, SKU fields (good)
- Article templates also get Price, SKU fields (bad - inert)

**Solution:**
- Create focused base templates
- Only include fields needed by all children
- Consider multiple small base templates vs one large one

### Never Duplicate Field Names

**Issue:**
If a child template has a field with the same name as a base template field, it causes problems.

**Example - Bad:**
- Base Template has "Title" field (Single-Line Text)
- Child Template also defines "Title" field (Rich Text)
- Which one is used? Causes confusion.

**Solution:**
- Use unique field names across the inheritance chain
- Remove duplicate fields from child templates
- Let inheritance provide the field

### Avoid Cyclic References

**Never create inheritance loops:**

**Example - Bad:**
- Template A inherits from Template B
- Template B inherits from Template A
- Creates infinite loop

**Sitecore prevents this**, but don't try it.

### Use Editor-Friendly Names

**Base templates for developers:**
- Prefix with underscore: "_Base Content"
- Indicates not for direct use
- Clear naming: "_Base Article", "_Commerce Product"

**Content templates for editors:**
- No underscore: "Event Details", "Blog Post"
- Descriptive names
- Clear purpose

### Work with Conventions

**Common naming patterns:**

**Base templates:**
- _Base Content
- _Base Page
- _Commerce Product
- _Metadata

**Content templates:**
- Event Details
- Blog Post
- Product Page
- News Article

**Folder structure:**
Templates/
  Project/
    [YourProject]/
      _Base/
        _Base Content
        _Base Page
      Events/
        Event Details
        Event List
      Blog/
        Blog Post
        Blog Home

## Key Takeaways

- Template inheritance reduces field duplication
- Base templates define shared fields once
- Child templates automatically inherit base template fields
- Changes to base templates propagate to all children
- Multiple inheritance is supported but use carefully
- Every template inherits from Standard Template
- Keep inheritance hierarchies simple (2-3 levels ideal)
- Prevent inert fields by creating focused base templates
- Never duplicate field names in inheritance chain
- Prefix base templates with underscore (_) by convention`,

    flashcards: [
      {
        id: "inherit-1",
        question: "What is template inheritance?",
        answer:
          "Template inheritance allows templates to inherit fields from other templates. Child templates automatically include all fields from parent templates, and changes to parents propagate automatically.",
        difficulty: "easy",
      },
      {
        id: "inherit-2",
        question: "What is the Standard Template?",
        answer:
          "The Standard Template is the root of all template inheritance in Sitecore. Every template inherits from it. It provides essential system fields and should never be modified.",
        difficulty: "easy",
      },
      {
        id: "inherit-3",
        question: "What are the benefits of template inheritance?",
        answer:
          "Reduces field duplication, simplifies maintenance (update once, applies everywhere), ensures consistency, promotes modularity, and makes templates easier to manage.",
        difficulty: "medium",
      },
      {
        id: "inherit-4",
        question: "What are 'inert fields' and why are they bad?",
        answer:
          "Inert fields are inherited fields that aren't relevant to the content type. They confuse editors, waste interface space, and indicate your inheritance hierarchy needs refinement.",
        difficulty: "medium",
      },
      {
        id: "inherit-5",
        question:
          "How do you configure a template to inherit from a base template?",
        answer:
          "In the child template, go to the Content tab (not Builder), add the base template to the 'Base Template' field, and save.",
        difficulty: "medium",
      },
      {
        id: "inherit-6",
        question: "Why prefix base templates with an underscore?",
        answer:
          "The underscore (_) indicates the template is a base template not meant for creating items directly. It's a convention that helps developers distinguish base templates from content templates.",
        difficulty: "easy",
      },
      {
        id: "inherit-7",
        question: "What happens when you update a field in a base template?",
        answer:
          "The change automatically propagates to all templates that inherit from it. All child templates immediately have the updated field without manual updates.",
        difficulty: "medium",
      },
      {
        id: "inherit-8",
        question: "Can a template inherit from multiple base templates?",
        answer:
          "Yes, Sitecore supports multiple inheritance. A template can inherit from several base templates and will include fields from all of them. Use carefully to avoid complexity.",
        difficulty: "medium",
      },
      {
        id: "inherit-9",
        question: "What's the ideal depth for inheritance hierarchies?",
        answer:
          "2-3 levels is ideal. More than 4-5 levels gets confusing and harder to debug. Keep inheritance chains reasonable.",
        difficulty: "hard",
      },
      {
        id: "inherit-10",
        question:
          "What happens if a child template has a field with the same name as a base template field?",
        answer:
          "It causes conflicts and confusion. Never duplicate field names across the inheritance chain. Remove duplicate fields from child templates and let inheritance provide them.",
        difficulty: "hard",
      },
    ],

    quizQuestions: [
      {
        id: "inherit-quiz-1",
        question:
          "You have Blog, News, and Event templates all with Title, Intro, and Image fields. What should you do?",
        options: [
          "Keep the duplicated fields for clarity",
          "Create a _Base Content template with shared fields and inherit it",
          "Use copy/paste to keep fields in sync",
          "Create one generic 'Content' template for all three",
        ],
        correctAnswer: 1,
        explanation:
          "Create a base template with shared fields (Title, Intro, Image) and have Blog, News, and Event templates inherit from it. This eliminates duplication and centralizes updates.",
        scenario: "Multiple templates share common fields.",
      },
      {
        id: "inherit-quiz-2",
        question:
          "Your Article template inherits from _Base Content, but editors see 'ProductSKU' field. What's the issue?",
        options: [
          "Standard Template includes this field",
          "_Base Content has inert fields not relevant to articles",
          "Multiple inheritance is pulling from wrong template",
          "The field is marked as Shared",
        ],
        correctAnswer: 1,
        explanation:
          "This is an inert field - inherited but not relevant. _Base Content likely inherits from a commerce template. Refine your base templates to be more focused. Create separate base templates for different content types.",
      },
      {
        id: "inherit-quiz-3",
        question:
          "You updated a field in _Base Content but child templates don't show the change. Why?",
        options: [
          "Need to rebuild indexes",
          "Need to restart the server",
          "Existing items won't update, only the template definition changed",
          "Changes don't propagate automatically",
        ],
        correctAnswer: 2,
        explanation:
          "Template changes affect the definition, not existing item content. Items created from templates already have their field values. The field structure is updated in child templates, but existing item data remains unchanged.",
      },
      {
        id: "inherit-quiz-4",
        question: "What's the purpose of the Standard Template?",
        options: [
          "Provides standard values for all items",
          "Root of inheritance providing essential system fields",
          "Default template for new items",
          "Template for creating other templates",
        ],
        correctAnswer: 1,
        explanation:
          "Standard Template is the root of all template inheritance. It provides essential system fields (like __Created, __Updated, __Owner) to every template. Every template ultimately inherits from it.",
      },
      {
        id: "inherit-quiz-5",
        question:
          "Your inheritance chain is: Standard Template → Base → Content → Article → News → LocalNews. What's the problem?",
        options: [
          "Too many levels - chain is too deep",
          "Standard Template should be at the end",
          "News should inherit directly from Standard Template",
          "No problem - this is correct",
        ],
        correctAnswer: 0,
        explanation:
          "This is 6 levels deep - too complex. Ideal is 2-3 levels. Deeper chains are harder to understand, debug, and maintain. Simplify by removing intermediate layers or restructuring.",
        scenario: "Reviewing template architecture for a project.",
      },
      {
        id: "inherit-quiz-6",
        question:
          "Can you modify the Standard Template to add custom fields for your project?",
        options: [
          "Yes, that's the best place for universal fields",
          "Yes, but only in production",
          "No, never modify Standard Template",
          "Yes, if you prefix field names with __",
        ],
        correctAnswer: 2,
        explanation:
          "Never modify Standard Template - it's part of Sitecore's core system. Modifying it can break your installation. Instead, create your own base templates (like _Base Page) and inherit from Standard Template.",
      },
      {
        id: "inherit-quiz-7",
        question:
          "How do you remove duplicate fields from a child template before adding inheritance?",
        options: [
          "Delete each field individually",
          "Select the field section and use Builder OPTIONS > Remove",
          "Leave them - inheritance will override",
          "Create a new template and delete the old one",
        ],
        correctAnswer: 1,
        explanation:
          "Select the entire field section containing duplicate fields, then use Builder OPTIONS > Remove. This removes the section and all its fields at once. Then configure inheritance to get those fields from the base template.",
      },
      {
        id: "inherit-quiz-8",
        question:
          "Your Event template needs fields from both _Base Content and _Commerce Product. How?",
        options: [
          "Can't be done - only single inheritance allowed",
          "Create a new combined base template",
          "Use multiple inheritance - add both to Base Template field",
          "Duplicate the fields",
        ],
        correctAnswer: 2,
        explanation:
          "Sitecore supports multiple inheritance. In Event template's Base Template field, add both _Base Content and _Commerce Product. The template will include fields from both base templates.",
      },
      {
        id: "inherit-quiz-9",
        question:
          "Why should base templates be named with a leading underscore?",
        options: [
          "Required by Sitecore for inheritance to work",
          "Makes them appear first in alphabetical lists",
          "Convention indicating they're not for direct item creation",
          "Hides them from content editors",
        ],
        correctAnswer: 2,
        explanation:
          "The underscore is a naming convention (not a requirement) that signals the template is a base template not meant for creating items directly. It helps developers identify base vs. content templates.",
      },
      {
        id: "inherit-quiz-10",
        question:
          "Template A inherits from Template B, which inherits from Template C. You add a field to Template C. What happens?",
        options: [
          "Only Template B gets the new field",
          "Only direct children get it, not grandchildren",
          "Templates A and B both automatically get the new field",
          "Need to rebuild inheritance for it to propagate",
        ],
        correctAnswer: 2,
        explanation:
          "Inheritance propagates through the entire chain. When you add a field to Template C, both Template B (direct child) and Template A (grandchild) automatically inherit it. This is the power of inheritance.",
      },
    ],
  },
  {
    id: "standard-values",
    title: "Standard Values",
    description: "Default content, tokens, and template configuration",
    estimatedTime: 18,

    content: `# Standard Values

## What Are Standard Values?

Standard Values provide default settings and content for items created from a template. Think of them as the "factory settings" automatically applied to new items.

### Key Concept

**Standard Values pre-populate fields:**
- Set default text, images, or other content
- Configure initial workflow states
- Set default presentation/layout
- Apply default insert options

**Applied at creation time:**
- Values copy to new items when created
- One-time application
- Changes to Standard Values don't affect existing items

**Stored as a special item:**
- __Standard Values item
- Child of the template
- Has the same fields as items created from the template

## Storage and Structure

### The __Standard Values Item

**Location:**
- Child item of the template
- Named "__Standard Values" (with double underscore prefix)
- Found in the template's folder

**Example:**
Templates/
  Project/
    Events/
      Event Details
        __Standard Values  ← This item

**Characteristics:**
- Has all the same fields as the template
- Whatever you enter here becomes the default
- Acts like a regular item but serves as the template

## What Standard Values Can Configure

Standard Values are powerful and control multiple aspects:

### 1. Default Field Values

**Static defaults:**
- Default text for a title field
- Default image for a placeholder
- Default selection in a droplink

**Dynamic defaults (tokens):**
- Use tokens that resolve during item creation
- Examples: $name, $date, $time, $parentname

### 2. Default Presentation

**Configure initial renderings:**
- Set up default components/renderings
- Define layout structure
- Configure datasources

**Note:** Presentation will be covered in a future lesson.

### 3. Default Workflow

**Assign workflow state:**
- New items start in specified workflow
- Controls publishing permissions
- Ensures review process

**Note:** Workflows will be covered in a future lesson.

### 4. Default Insert Options

**Control child item types:**
- Define what can be created under items
- Enforce content structure
- Simplify editor choices

**Note:** Insert Options will be covered in the next lesson.

## Tokens in Standard Values

Tokens are placeholders that get replaced with dynamic values when items are created.

### Common Tokens

**$name**
- Replaced with the item's name
- Most commonly used token
- Example use: Auto-populate Title field

**$date**
- Replaced with current date
- Format: MM/DD/YYYY
- Example use: Publication date field

**$time**
- Replaced with current time
- Format: HH:MM:SS
- Example use: Creation timestamp

**$parentname**
- Replaced with parent item's name
- Example use: Inherit category from parent

**$id**
- Replaced with item's GUID
- Example use: Unique references

**$parentid**
- Replaced with parent item's GUID
- Example use: Link to parent container

### Token Usage Examples

**Auto-populate Title from Item Name:**
Title field in Standard Values: $name

When editor creates item named "Summer Sale":
- Title field automatically contains "Summer Sale"

**Create Descriptive Intro:**
Intro field in Standard Values: $name intro

When editor creates item named "Spring Event":
- Intro field automatically contains "Spring Event intro"

**Set Default Date:**
PublishDate field in Standard Values: $date

When item is created:
- PublishDate automatically set to current date

**Combine Tokens:**
Description field: Created on $date at $time

When item is created:
- Description: "Created on 12/06/2025 at 14:30:00"

### Important Token Behaviors

**Resolved at creation time:**
- Tokens resolve when the item is created
- Not when Standard Values are saved
- Not dynamic after creation

**Can be edited after creation:**
- Token-generated values can be changed
- They're not locked or read-only
- Editor can override if needed

**Inherited and overridden:**
- Base template Standard Values can have tokens
- Child template Standard Values can override them
- More specific values win

## Creating and Configuring Standard Values

### Step 1: Create Standard Values Item

**In Content Editor:**

1. Navigate to your template (e.g., "Event Details")
2. Ensure Builder tab is selected
3. Click "Builder OPTIONS" in the ribbon
4. Click "Standard Values" command
5. __Standard Values item is created as a child

**Verify:**
- __Standard Values appears under your template
- Opens automatically with template's fields

### Step 2: Populate Fields

**Enter default values and tokens:**

1. Click on __Standard Values item
2. Enter values in fields:
   - Static text: "Default heading"
   - Tokens: "$name intro"
   - Upload default images
   - Select default droplink items
3. Save

**Example for Event Details:**
- Intro field: "$name intro"
- ContentImage: Upload a default placeholder image
- NavigationImage: Upload a default thumbnail
- HideEventDate: Unchecked (default false)

### Step 3: Test the Defaults

**Create a new item:**

1. Navigate to where items are created
2. Insert new item based on your template
3. Name it: "Test Event"
4. Check field values:
   - Intro should contain: "Test Event intro"
   - ContentImage should show default image
   - NavigationImage should show default thumbnail

**Success:** New items automatically have your defaults!

## Inheritance and Standard Values

Standard Values follow inheritance rules:

### Child Templates Inherit Standard Values

**Base template "_Base Content":**
- Has __Standard Values with:
  - Intro: "$name intro"
  - ContentImage: default-image.jpg

**Child template "Event Details" inherits from "_Base Content":**
- Automatically gets those defaults
- Can create its own __Standard Values to override
- Can add defaults for its own fields

### Overriding Inherited Standard Values

**Create Standard Values in child template:**

1. Open child template (e.g., "Event Details")
2. Create __Standard Values
3. Inherited fields show base template values (images, tokens)
4. Override specific fields if needed
5. Add defaults for child-specific fields

**Example:**
- _Base Content sets Intro to "$name intro"
- Event Details Standard Values keeps that (inherited)
- Event Details adds: EventDate to "$date"

## Standard Values Best Practices

### Use Tokens for Dynamic Content

**Good:**
- Title: "$name"
- Intro: "$name intro"
- PublishDate: "$date"

**Avoid:**
- Title: "Page Title" (too generic)
- Intro: "Enter introduction here" (unhelpful)

### Set Helpful Defaults

**Placeholder images:**
- Help editors identify missing content
- Show expected dimensions
- Better than empty fields

**Logical dropdown selections:**
- Set most common option
- Reduces clicks for editors
- Can be changed if needed

**Checkboxes with sensible defaults:**
- ShowInNavigation: Checked (most pages do)
- HideDate: Unchecked (most show dates)
- Editors only change exceptions

### Don't Overuse Standard Values

**Only set defaults when useful:**
- Not every field needs a default
- Some fields should be intentionally filled by editors
- Too many defaults can create clutter

**Required fields:**
- Consider leaving empty to force intentional input
- Editors must think about the content
- Prevents "default" content going live

### Document Token Usage

**In team documentation:**
- List which templates use tokens
- Explain expected behavior
- Note any special token combinations

**Helps team understand:**
- Why certain fields auto-populate
- How to modify or extend tokens
- Troubleshooting unexpected values

## Common Pitfalls

### Standard Values Don't Update Existing Items

**Common mistake:**
- Change Standard Values expecting existing items to update
- Only NEW items get the new defaults
- Existing items remain unchanged

**Solution:**
- Standard Values are for new items only
- Update existing items separately (bulk update, PowerShell, etc.)
- Consider this when planning changes

### Tokens Only Resolve at Creation

**Common mistake:**
- Expecting $date to update dynamically
- Thinking $name stays linked to item name

**Reality:**
- Tokens resolve once at item creation
- Become static text after that
- Editing item name doesn't update $name fields

### Child Template Standard Values Behavior

**Gotcha:**
- Creating Standard Values in child template shows inherited values
- These are display-only from base template
- Not stored in child's Standard Values unless overridden
- Changing base updates inherited values in child's display

**Note:** For existing items (created before workflow assignment), the workflow isn't applied retroactively to current versions - only to new versions created after.

## Key Takeaways

- Standard Values provide default settings for new items
- Stored in __Standard Values child item of template
- Tokens like $name, $date resolve dynamically at creation
- Can configure defaults, workflow, presentation, and insert options
- Applied once at item creation, not ongoing
- Child templates inherit Standard Values from base templates
- Can be overridden in child template Standard Values
- Don't affect existing items, only new items
- Use tokens for dynamic defaults, static text for fixed defaults`,

    flashcards: [
      {
        id: "stdval-1",
        question: "What are Standard Values?",
        answer:
          "Standard Values provide default settings and content for items created from a template. They're the 'factory settings' automatically applied to new items at creation time.",
        difficulty: "easy",
      },
      {
        id: "stdval-2",
        question: "What is a token in Standard Values?",
        answer:
          "Tokens are placeholders (like $name, $date, $time) that get replaced with dynamic values when an item is created. They enable intelligent default content.",
        difficulty: "easy",
      },
      {
        id: "stdval-3",
        question: "What does the $name token do?",
        answer:
          "$name is replaced with the item's name when created. Commonly used to auto-populate title or intro fields.",
        difficulty: "easy",
      },
      {
        id: "stdval-4",
        question: "Where are Standard Values stored?",
        answer:
          "In a special __Standard Values item that's a child of the template. It has the same fields as items created from the template.",
        difficulty: "medium",
      },
      {
        id: "stdval-5",
        question: "When are Standard Values applied?",
        answer:
          "Standard Values are applied once at item creation time. They don't update existing items, and changes to Standard Values only affect newly created items.",
        difficulty: "medium",
      },
      {
        id: "stdval-6",
        question: "What four things can Standard Values configure?",
        answer:
          "Default field values (static and token-based), default presentation/layout, default workflow state, and default insert options.",
        difficulty: "hard",
      },
      {
        id: "stdval-7",
        question:
          "Can editors change token-generated values after item creation?",
        answer:
          "Yes, token-generated values can be edited after creation. They're not locked or read-only - editors can override if needed.",
        difficulty: "medium",
      },
      {
        id: "stdval-8",
        question: "How do child templates inherit Standard Values?",
        answer:
          "Child templates automatically inherit Standard Values from base templates. They can create their own __Standard Values to override inherited values or add defaults for their own fields.",
        difficulty: "hard",
      },
      {
        id: "stdval-9",
        question:
          "What happens if you change Standard Values after items are created?",
        answer:
          "Existing items remain unchanged. Standard Values changes only affect newly created items. Existing items must be updated separately.",
        difficulty: "medium",
      },
      {
        id: "stdval-10",
        question: "Can you combine multiple tokens in one field?",
        answer:
          "Yes, you can combine tokens like 'Created on $date at $time' or '$name intro'. They resolve together when the item is created.",
        difficulty: "medium",
      },
    ],

    quizQuestions: [
      {
        id: "stdval-quiz-1",
        question:
          "You set Intro field in Standard Values to '$name intro'. What happens when an editor creates an item named 'Summer Sale'?",
        options: [
          "Intro field is empty",
          "Intro field contains '$name intro'",
          "Intro field contains 'Summer Sale intro'",
          "Intro field contains error message",
        ],
        correctAnswer: 2,
        explanation:
          "The $name token resolves to the item's name at creation time. 'Summer Sale' replaces $name, resulting in 'Summer Sale intro' in the Intro field.",
        scenario: "Testing token behavior in Standard Values.",
      },
      {
        id: "stdval-quiz-2",
        question:
          "You updated a Standard Value from 'Old Text' to 'New Text'. What happens to existing items?",
        options: [
          "All items update automatically",
          "Items update after republishing",
          "Existing items remain unchanged - only new items get 'New Text'",
          "Need to rebuild indexes for changes to apply",
        ],
        correctAnswer: 2,
        explanation:
          "Standard Values only apply at item creation time. Existing items keep their current values. Only newly created items will have 'New Text'. Update existing items separately if needed.",
      },
      {
        id: "stdval-quiz-3",
        question: "Where do you create Standard Values for a template?",
        options: [
          "Content tab → Create Standard Values button",
          "Builder tab → Builder OPTIONS → Standard Values",
          "/sitecore/system/Settings/Standard Values",
          "Right-click template → Insert → Standard Values",
        ],
        correctAnswer: 1,
        explanation:
          "In Content Editor, open the template, select Builder tab, click Builder OPTIONS in the ribbon, and click Standard Values. This creates the __Standard Values child item.",
      },
      {
        id: "stdval-quiz-4",
        question:
          "You want a PublishDate field to always default to the current date. What should you do?",
        options: [
          "Set PublishDate in Standard Values to today's date",
          "Set PublishDate in Standard Values to '$date' token",
          "Set PublishDate in Standard Values to '$time' token",
          "Leave PublishDate empty and use workflow",
        ],
        correctAnswer: 1,
        explanation:
          "Use the $date token in Standard Values. It resolves to the current date when each item is created, ensuring every new item gets its creation date automatically.",
      },
      {
        id: "stdval-quiz-5",
        question:
          "Your base template has Standard Values with Intro: '$name intro'. Child template needs a different default. What do you do?",
        options: [
          "Remove inheritance to change it",
          "Create Standard Values in child template and override the Intro field",
          "Change the base template Standard Values",
          "Can't be done - base template wins",
        ],
        correctAnswer: 1,
        explanation:
          "Create __Standard Values in the child template and set a different value for Intro. Child template Standard Values override inherited values. Base template remains unchanged for other children.",
      },
      {
        id: "stdval-quiz-6",
        question:
          "An editor creates an item named 'Holiday Events' with Title using $name token. They rename the item to 'Winter Events'. What happens to the Title field?",
        options: [
          "Title updates to 'Winter Events' automatically",
          "Title remains 'Holiday Events' - tokens only resolve at creation",
          "Title breaks showing '$name'",
          "Title clears and must be re-entered",
        ],
        correctAnswer: 1,
        explanation:
          "Tokens resolve once at creation time, then become static text. The Title field still contains 'Holiday Events' even after renaming. Tokens don't create ongoing links - they're one-time replacements.",
      },
      {
        id: "stdval-quiz-7",
        question:
          "What's a good use case for setting a default image in Standard Values?",
        options: [
          "Forcing all items to use the same image",
          "Providing a placeholder that shows expected dimensions",
          "Preventing editors from changing images",
          "Improving SEO automatically",
        ],
        correctAnswer: 1,
        explanation:
          "Default images serve as helpful placeholders showing expected dimensions and helping editors identify missing content. They can be replaced by editors and are better than empty fields.",
      },
      {
        id: "stdval-quiz-8",
        question: "Which field is a POOR candidate for Standard Values?",
        options: [
          "ShowInNavigation checkbox (most pages show in nav)",
          "Event Title (should be unique per event)",
          "Default placeholder image",
          "HideDate checkbox (most pages show dates)",
        ],
        correctAnswer: 1,
        explanation:
          "Event Title should be unique and intentional for each event. It's a poor candidate for defaults. Fields that require editor input for uniqueness shouldn't have defaults - it prevents 'default' content going live.",
      },
      {
        id: "stdval-quiz-9",
        question:
          "You want to create a Description field that says 'Created on [date] by [item name]'. What should you set?",
        options: [
          "Description: 'Created on $time by $id'",
          "Description: 'Created on $date by $name'",
          "Description: 'Created on [date] by [item name]'",
          "Can't be done with Standard Values",
        ],
        correctAnswer: 1,
        explanation:
          "Use 'Created on $date by $name' in Standard Values. Both tokens resolve at creation: $date becomes the current date and $name becomes the item's name. Tokens can be combined in a single field.",
      },
      {
        id: "stdval-quiz-10",
        question:
          "Your Event Details template inherits from _Base Content. Both have __Standard Values. What happens?",
        options: [
          "Event Details Standard Values completely replace base values",
          "Can't have Standard Values in both - causes error",
          "Event Details shows inherited values and can override them",
          "Base template Standard Values are ignored",
        ],
        correctAnswer: 2,
        explanation:
          "Event Details inherits Standard Values from _Base Content. It displays inherited values and can override specific fields in its own __Standard Values. Unoverridden fields continue using base values.",
      },
    ],
  },
  {
    id: "insert-options",
    title: "Insert Options",
    description:
      "Enforcing content hierarchy and structure with insert options",
    estimatedTime: 16,

    content: `# Insert Options

## What Are Insert Options?

Insert Options define which item types can be created under a specific item in the content tree. They control the available templates content editors see when creating new items.

### Key Purpose

**Control content structure:**
- Define allowed child item types
- Enforce hierarchical rules
- Prevent incorrect content placement

**Simplify editor experience:**
- Show only relevant template choices
- Reduce confusion
- Guide content creation

**Maintain consistency:**
- Ensure proper site structure
- Prevent structural errors
- Support governance policies

## Why Insert Options Matter

### Without Insert Options

**Problems arise:**
- Editors see ALL templates when creating items
- Risk of creating wrong item types
- Structural inconsistencies
- Navigation issues
- Broken assumptions in code

**Example - Bad:**
Home
  ├─ Event Details (should be under Event List!)
  ├─ Blog Post (no blog section exists!)
  └─ Product Page (misplaced!)

### With Insert Options

**Structure is enforced:**
- Only valid templates shown
- Impossible to create wrong types
- Consistent hierarchy
- Predictable structure

**Example - Good:**
Home
  ├─ Events Section
  │   └─ Event List
  │       └─ Event Details (only allowed here)
  └─ Blog Section
      └─ Blog Post (only allowed here)

## Real-World Example

Consider an Events website structure:

### Desired Hierarchy

Home
  └─ Events (Event Section template)
      ├─ Climbing (Event List template)
      │   ├─ Climbing the Face of Half Dome (Event Details)
      │   └─ Hiking Pikes Peak (Event Details)
      └─ Hiking (Event List template)
          └─ Various events (Event Details)

### Insert Options Configuration

**Home page:**
- Can create: Event Section, Page

**Event Section items:**
- Can create: Event List only

**Event List items:**
- Can create: Event Details only

**Event Details items:**
- Can create: Nothing (leaf nodes)

**Result:** Editors cannot create incorrect structures. The system guides them to proper hierarchy.

## Where to Assign Insert Options

Insert Options can be assigned at two levels:

### 1. Standard Values (Preferred)

**Assign at template level:**
- Configured in __Standard Values
- Applies to ALL items created from template
- Centralized management
- Easier maintenance

**Best for:**
- Consistent structure requirements
- Template-level rules
- Most use cases

**Example:**
- Event List template's Standard Values
- Insert Options: Event Details template
- Every Event List item allows Event Details children

### 2. Item Level

**Assign to individual items:**
- Configured in specific item's Insert Options field
- Only affects that one item
- Overrides Standard Values
- More flexibility but harder to manage

**Best for:**
- Special cases
- Unique structural requirements
- Root items (like Home)

**Example:**
- Home page specifically
- Insert Options: Event Section, Page, Blog Section
- Only this Home item, not all pages

### Best Practice

**Prefer Standard Values:**
- Use Standard Values whenever possible
- Only use item-level when truly necessary
- Reduces maintenance
- Ensures consistency
- Easier to understand structure

## Configuring Insert Options

### Method 1: Page Builder (Recommended)

**At Item Level:**

1. Open Page Builder
2. Select the item (e.g., Home)
3. Click action menu (...) → Settings
4. In Insert Options section, select allowed templates
5. Save

**At Template Level (Standard Values):**

1. Open Page Builder
2. Click Templates menu (enter templates mode)
3. Find your template row
4. Click Pencil icon next to Insert Options column
5. Select allowed templates in "Parent of" tab
6. Save

**Benefits:**
- Visual interface
- Clear overview
- Easy to use
- No need for Content Editor navigation

### Method 2: Content Editor

**At Standard Values Level:**

1. Navigate to template's __Standard Values
2. Find "Insert Options" field (usually in Settings section)
3. Add allowed templates
4. Save

**At Item Level:**

1. Navigate to specific item
2. Find "Insert Options" field
3. Add allowed templates
4. Save

## Insert Options and Inheritance

Insert Options follow Standard Values inheritance:

### Base Template Insert Options

**If base template has Standard Values with Insert Options:**
- Child templates inherit them
- Child templates can override in their Standard Values
- More specific values take precedence

**Example:**

**_Base Content Standard Values:**
- Insert Options: Page

**Event List (inherits from _Base Content):**
- Inherits: Page
- Adds in its own Standard Values: Event Details
- Result: Event List items can create Page OR Event Details

### Overriding Insert Options

**To completely replace inherited Insert Options:**

1. Create __Standard Values in child template
2. Set Insert Options field
3. This replaces inherited options (doesn't add to them)

**To add to inherited Insert Options:**
- Not directly possible
- Must explicitly list all templates (inherited + new)

## Complete Site Structure Example

Let's implement Insert Options for the Events site:

### Step 1: Home Page (Item Level)

**Home page Insert Options:**
- Event Section template
- Page template (for other pages)

**Configuration:**
- Page Builder → Home → Settings
- Insert Options: Event Section, Page

### Step 2: Event Section Template (Standard Values)

**Event Section Standard Values:**
- Insert Options: Event List

**Configuration:**
- Page Builder → Templates mode
- Event Section row → Edit Insert Options
- Parent of: Event List

**Result:** All Event Section items can create Event List children.

### Step 3: Event List Template (Standard Values)

**Event List Standard Values:**
- Insert Options: Event Details

**Configuration:**
- Page Builder → Templates mode
- Event List row → Edit Insert Options
- Parent of: Event Details

**Result:** All Event List items can create Event Details children.

### Step 4: Event Details Template (Standard Values)

**Event Details Standard Values:**
- Insert Options: None (or cleared)

**Configuration:**
- Page Builder → Templates mode
- Event Details row → Edit Insert Options
- Clear Page template (if inherited)

**Result:** Event Details items are leaf nodes - no children allowed.

### Testing the Structure

**Create content in Page Builder:**

1. Select Home → Create subpage
   - See: Event Section, Page ✓
2. Select Events item → Create subpage
   - See: Event List ✓
3. Select Climbing item → Create subpage
   - See: Event Details ✓
4. Select an Event Details item → Create subpage
   - See: Nothing (or error/empty list) ✓

**Success:** Structure is enforced!

## Common Patterns

### Pattern 1: Container → List → Details

**Structure:**
Section (Container)
  └─ List
      └─ Details

**Insert Options:**
- Section: List only
- List: Details only
- Details: None

**Use case:** Events, Products, Articles

### Pattern 2: Flexible Pages

**Structure:**
Any Page
  └─ Any Page (recursive)

**Insert Options:**
- Page: Page (itself)

**Use case:** Simple websites, flexible navigation

### Pattern 3: Fixed Home Structure

**Structure:**
Home
  ├─ Section A
  ├─ Section B
  └─ Section C (only these allowed)

**Insert Options:**
- Home: Section A, Section B, Section C templates

**Use case:** Controlled site structure, specific sections

## Insert Options Best Practices

### Keep It Simple

**Don't over-restrict:**
- Allow reasonable flexibility
- Consider future needs
- Balance control vs usability

**Too restrictive:**
- Editors can't work efficiently
- Requires developer for simple changes
- Frustrating user experience

### Document Structure

**Create a site structure diagram:**
- Shows allowed hierarchies
- Documents Insert Options decisions
- Helps team understand rules

**Example documentation:**
Home (Item specific)
  ├─ Event Section (from Standard Values)
  │   └─ Event List (from Standard Values)
  │       └─ Event Details (from Standard Values)
  └─ Blog Section (from Standard Values)
      └─ Blog Post (from Standard Values)

### Consider Editor Workflows

**Think about how editors work:**
- What items do they create frequently?
- What mistakes do they make?
- Where do they need flexibility?

**Optimize for common cases:**
- Allow common patterns
- Restrict error-prone patterns
- Test with actual editors

### Use Standard Values When Possible

**Benefits:**
- Centralized management
- Easier updates
- Clear rules
- Less maintenance

**Reserve item-level for:**
- Root items (Home, Settings)
- Special exceptions
- Override scenarios

## Common Pitfalls

### Too Many Options

**Problem:**
- Assigning too many templates as Insert Options
- Defeats the purpose
- Editors still confused

**Solution:**
- Only allow truly valid children
- Group related content under sections
- Use hierarchy to organize

### Forgetting to Clear Inherited Options

**Problem:**
- Base template allows Page
- Child template (leaf node) inherits it
- Leaf nodes can create children (wrong!)

**Solution:**
- Explicitly clear Insert Options in leaf templates
- Check inherited values
- Test structure thoroughly

### Item-Level Overload

**Problem:**
- Setting Insert Options on every item individually
- Hard to maintain
- Inconsistent structure
- Difficult to understand

**Solution:**
- Use Standard Values for consistency
- Only use item-level for exceptions
- Document exceptions clearly

## Key Takeaways

- Insert Options control which templates can be created under items
- Essential for maintaining content structure and consistency
- Can be assigned at Standard Values (template level) or item level
- Standard Values is preferred for consistency
- Use Page Builder or Content Editor to configure
- Inheritance works through Standard Values
- Proper Insert Options improve editor experience and prevent errors
- Balance control with flexibility
- Test with actual content editors
- Document your site structure`,

    flashcards: [
      {
        id: "insert-1",
        question: "What are Insert Options?",
        answer:
          "Insert Options define which item types (templates) can be created under a specific item in the content tree. They control structure and guide content editors.",
        difficulty: "easy",
      },
      {
        id: "insert-2",
        question: "What are the two places Insert Options can be assigned?",
        answer:
          "Standard Values (template level, preferred) or item level. Standard Values applies to all items from the template; item level affects only that specific item.",
        difficulty: "medium",
      },
      {
        id: "insert-3",
        question: "Why should you prefer Standard Values for Insert Options?",
        answer:
          "Standard Values provide centralized management, easier maintenance, consistent rules, and clear structure. Item-level should be reserved for special cases.",
        difficulty: "medium",
      },
      {
        id: "insert-4",
        question: "What happens if you don't configure Insert Options?",
        answer:
          "Editors see ALL templates when creating items, leading to incorrect item placement, structural inconsistencies, and potential errors in code that assumes proper structure.",
        difficulty: "easy",
      },
      {
        id: "insert-5",
        question:
          "How do you set Insert Options in Page Builder at template level?",
        answer:
          "Click Templates menu → Find template row → Click Pencil icon next to Insert Options → Select allowed templates in 'Parent of' tab → Save.",
        difficulty: "medium",
      },
      {
        id: "insert-6",
        question: "What's a common structure pattern for content types?",
        answer:
          "Container → List → Details. Example: Event Section → Event List → Event Details, where each level's Insert Options only allows the next level down.",
        difficulty: "medium",
      },
      {
        id: "insert-7",
        question:
          "How do leaf nodes (items with no children) configure Insert Options?",
        answer:
          "Clear or remove all Insert Options so no child items can be created. This prevents unwanted structure extensions.",
        difficulty: "medium",
      },
      {
        id: "insert-8",
        question: "Do Insert Options inherit through Standard Values?",
        answer:
          "Yes, if a base template's Standard Values has Insert Options, child templates inherit them. Child templates can override by setting their own Insert Options.",
        difficulty: "hard",
      },
      {
        id: "insert-9",
        question: "What's the benefit of Insert Options for editors?",
        answer:
          "Simplifies content creation by showing only relevant template choices, reduces confusion, guides proper structure, and prevents mistakes.",
        difficulty: "easy",
      },
      {
        id: "insert-10",
        question: "When should you use item-level Insert Options?",
        answer:
          "For special cases, unique requirements, root items (like Home), or when overriding Standard Values for a specific item. Most cases should use Standard Values.",
        difficulty: "hard",
      },
    ],

    quizQuestions: [
      {
        id: "insert-quiz-1",
        question:
          "Event List items should only allow Event Details children. Where should you configure this?",
        options: [
          "On each Event List item individually",
          "In Event List template's Standard Values",
          "In Event Details template's Standard Values",
          "In the Home page item",
        ],
        correctAnswer: 1,
        explanation:
          "Configure in Event List template's Standard Values. This applies to ALL Event List items consistently. Set Insert Options field to Event Details template. Item-level would require configuring each Event List separately.",
        scenario: "Enforcing structure for an Events section.",
      },
      {
        id: "insert-quiz-2",
        question:
          "Editors complain they see too many template choices when creating items. What's the issue?",
        options: [
          "They need more training",
          "Insert Options aren't configured properly",
          "Too many templates in the system",
          "Templates need better naming",
        ],
        correctAnswer: 1,
        explanation:
          "Lack of proper Insert Options means editors see all templates. Configure Insert Options at Standard Values level to restrict choices to only valid templates for each location.",
      },
      {
        id: "insert-quiz-3",
        question:
          "Your Event Details template is a leaf node but still allows creating children. What should you do?",
        options: [
          "Leave it - might be needed later",
          "Train editors not to create children",
          "Clear Insert Options in Event Details Standard Values",
          "Delete the Event Details template and recreate it",
        ],
        correctAnswer: 2,
        explanation:
          "Leaf nodes should have no Insert Options. Clear the Insert Options field in Event Details template's Standard Values (likely inherited from base template). This prevents any child creation.",
      },
      {
        id: "insert-quiz-4",
        question:
          "You want Home page to allow Event Section and Blog Section. Where do you configure this?",
        options: [
          "Home page template's Standard Values",
          "Home page item's Insert Options field",
          "Event Section and Blog Section templates",
          "In site configuration",
        ],
        correctAnswer: 1,
        explanation:
          "Home is typically a unique item, not one of many from a template. Configure Insert Options on the Home page item itself (not Standard Values). This is a valid use case for item-level Insert Options.",
      },
      {
        id: "insert-quiz-5",
        question:
          "How do you add Insert Options using Page Builder at the template level?",
        options: [
          "Editor mode → Select item → Settings → Insert Options",
          "Templates mode → Template row → Pencil icon → Parent of tab",
          "Create mode → Configure → Insert Options",
          "Can't be done in Page Builder - use Content Editor",
        ],
        correctAnswer: 1,
        explanation:
          "In Page Builder, click Templates menu to enter templates mode, find your template row, click the Pencil icon next to Insert Options, select templates in the 'Parent of' tab, and save.",
      },
      {
        id: "insert-quiz-6",
        question:
          "Your structure is: Home → Events → Event List → Event Details. An editor created Event Details directly under Home. What happened?",
        options: [
          "Editor has special permissions",
          "Insert Options weren't configured on Home",
          "Event Details template wasn't configured properly",
          "This is allowed by design",
        ],
        correctAnswer: 1,
        explanation:
          "Home's Insert Options likely allowed all templates or included Event Details. Configure Home's Insert Options to only allow Events (Event Section) and other valid top-level templates, not Event Details.",
      },
      {
        id: "insert-quiz-7",
        question:
          "Base template's Standard Values has Insert Options: Page. Child template should only allow Article. What do you do?",
        options: [
          "Add Article to inherited list",
          "Create Standard Values in child and set Insert Options to Article (replaces inherited)",
          "Remove Insert Options from base template",
          "Can't override inherited Insert Options",
        ],
        correctAnswer: 1,
        explanation:
          "Create __Standard Values in child template and set Insert Options field to Article. This replaces (not adds to) inherited Insert Options. The child will only allow Article, not Page.",
      },
      {
        id: "insert-quiz-8",
        question:
          "What's a warning sign your Insert Options are too restrictive?",
        options: [
          "Editors frequently request developer help to create content",
          "Content structure is very organized",
          "Templates are well-defined",
          "Few content errors occur",
        ],
        correctAnswer: 0,
        explanation:
          "If editors constantly need developer help for normal content creation, Insert Options may be too restrictive. Balance control with flexibility. Structure should enable editors, not block them.",
      },
      {
        id: "insert-quiz-9",
        question:
          "You configured Insert Options in Event List Standard Values, but new Event List items don't show the restrictions. Why?",
        options: [
          "Need to republish content",
          "Need to restart Sitecore",
          "Insert Options only apply to items created AFTER Standard Values were configured",
          "Insert Options are cached and need clearing",
        ],
        correctAnswer: 2,
        explanation:
          "Insert Options from Standard Values apply at item creation time. Existing items aren't affected. New Event List items created after the change will have the Insert Options. Update existing items individually if needed.",
      },
      {
        id: "insert-quiz-10",
        question: "Which scenario is a GOOD use of item-level Insert Options?",
        options: [
          "Every Event List item has different Insert Options",
          "The Home page has specific allowed templates",
          "All Blog Posts have the same Insert Options",
          "Event Details items in one section vs another",
        ],
        correctAnswer: 1,
        explanation:
          "Home page is a unique, special item that often has specific structure requirements. Item-level Insert Options are appropriate. Other scenarios should use Standard Values for consistency.",
      },
    ],
  },
  {
    id: "content-versioning",
    title: "Language & Numbered Versions",
    description:
      "Understanding versioning types and field versioning strategies",
    estimatedTime: 18,

    content: `# Language & Numbered Versions

## Content Versioning in SitecoreAI CMS

SitecoreAI CMS can hold multiple versions of any page and item. You can add as many versions as you like, created manually or automatically with workflows.

### Two Types of Versions

**1. Numbered Versions**
- Multiple versions of an item in the SAME language
- Track content changes over time
- Maintain version history
- Can be named or just numbered

**2. Language Versions**
- Versions of an item in DIFFERENT languages
- Support multilingual content
- Separate content per language
- Enable localization

**Important:** These two versioning types are handled independently.

## Numbered Versions

Numbered versions track changes to content within the same language.

### Key Characteristics

**Version history:**
- See what content looked like previously
- Track changes over time
- Revert to previous versions if needed

**Optional naming:**
- Assign names to versions for clarity
- Example: "Summer 2025", "Holiday Update"
- Or use just numbers: Version 1, 2, 3...

**Independent per language:**
- English might have 5 versions
- Spanish might have 3 versions
- Each language has its own numbered version history

### Example Use Case

**Blog Post Title Field:**
- Version 1: "10 Tips for Better Code"
- Version 2: "10 Expert Tips for Better Code"
- Version 3: "Expert Guide: 10 Tips for Better Code"

You can see the progression and revert if needed.

### Creating Numbered Versions

**In Page Builder:**
1. Select item
2. Version dropdown (top right)
3. Click "Add a new version"
4. Optionally name it
5. Make content changes

**What happens:**
- New version created
- Fields copy from previous version
- Make changes in new version
- Previous versions preserved

## Language Versions

Language versions provide content in different languages for the same logical item.

### Key Characteristics

**Multilingual support:**
- Single item with multiple language representations
- Example: Product page in English, Spanish, French

**Same structure, different content:**
- Same fields across all languages
- Content translated/localized per language
- Not all fields may need translation

**Independent workflows:**
- Each language version can be in different workflow states
- English might be approved while Spanish is in draft

### Example Use Case

**Product Page:**
- English version: "Sunblock" with English description
- French version: "Crème Solaire" with French description
- Spanish version: "Bloqueador Solar" with Spanish description

### Creating Language Versions

**Prerequisites:**
- Target language must be configured in Sitecore
- Typically configured at system level

**In Page Builder:**
1. Select item
2. Language selector
3. Choose target language
4. Add language version
5. Translate/localize content

## Field Versioning Types

Not all fields need to behave the same way across versions and languages. Sitecore provides three distinct field versioning types.

### 1. Versioned Fields (Default)

**Behavior:**
- Different values for each language
- Different values for each numbered version within each language
- Full flexibility

**Configuration:**
- Uncheck Shared
- Uncheck Unversioned
- (Or leave both unchecked - default)

**Best Used For:**
- Marketing copy (changes frequently, needs localization)
- Product descriptions
- News articles
- Blog posts
- Page titles
- Any content that changes AND needs translation

**Example:**

| Language | Version | Title Field |
|----------|---------|-------------|
| English | 1 | "Summer Sale" |
| English | 2 | "Big Summer Sale" |
| Spanish | 1 | "Venta de Verano" |
| Spanish | 2 | "Gran Venta de Verano" |

Each combination of language + version has unique content.

### 2. Unversioned Fields

**Behavior:**
- Different values for each language
- SAME value across all numbered versions within a language
- Language-specific but version-stable

**Configuration:**
- Check Unversioned checkbox
- Leave Shared unchecked

**Best Used For:**
- Product names (translate but rarely change within language)
- Category labels
- Legal disclaimers specific to regions
- Location names
- Translated but stable content

**Example:**

| Language | Version | Product Name Field |
|----------|---------|-------------------|
| English | 1 | "Sunblock" |
| English | 2 | "Sunblock" (same) |
| English | 3 | "Sunblock" (same) |
| Spanish | 1 | "Bloqueador Solar" |
| Spanish | 2 | "Bloqueador Solar" (same) |

Value varies by language but is consistent across all versions within that language.

### 3. Shared Fields

**Behavior:**
- SAME value across ALL languages
- SAME value across ALL numbered versions
- Universal content

**Configuration:**
- Check Shared checkbox
- Check Unversioned checkbox

**Best Used For:**
- Product SKUs
- Image assets (if same globally)
- Universal identifiers
- Numeric IDs
- Dates (if universal)
- Anything truly identical everywhere

**Example:**

| Language | Version | Product SKU Field |
|----------|---------|------------------|
| English | 1 | "SB-2025" |
| English | 2 | "SB-2025" (same) |
| Spanish | 1 | "SB-2025" (same) |
| Spanish | 2 | "SB-2025" (same) |

Same value everywhere - no variation by language or version.

## Choosing the Right Versioning Type

### Decision Matrix

**Ask yourself:**

1. **Does this content need translation?**
   - Yes → Versioned or Unversioned
   - No → Shared

2. **Does this content change frequently within a language?**
   - Yes → Versioned
   - No → Unversioned or Shared

3. **Is this content truly universal?**
   - Yes → Shared
   - No → Versioned or Unversioned

### Examples by Content Type

**Title/Heading:**
- Versioned ✓
- Needs translation, changes frequently

**Product SKU:**
- Shared ✓
- Universal, never changes

**Product Name:**
- Unversioned ✓
- Needs translation, rarely changes within language

**Marketing Banner Text:**
- Versioned ✓
- Needs translation, updates frequently

**Image (global brand asset):**
- Shared ✓
- Same image worldwide

**Image (localized content):**
- Versioned ✓
- Different per language, might change

**Publication Date:**
- Depends on business logic
- Universal event date → Shared
- Language-specific publish date → Unversioned

## Configuring Field Versioning

Field versioning is set when creating or editing template fields.

### When Creating a Field

**In Content Editor:**
1. Open template in Builder view
2. Add or edit field
3. Look for versioning checkboxes:
   - Shared checkbox
   - Unversioned checkbox
4. Configure based on need:
   - Versioned: Both unchecked
   - Unversioned: Only Unversioned checked
   - Shared: Both checked
5. Save

### Impact on Existing Items

**Changing field versioning type:**
- Affects how content behaves going forward
- Existing data may need migration
- Test thoroughly before changing
- Consider implications carefully

## Field Versioning Strategy

Plan field versioning during template design.

### Design Considerations

**Default to Versioned for content:**
- Most editorial fields should be versioned
- Provides maximum flexibility
- Can always restrict later

**Use Unversioned for stable translations:**
- Reduces redundant work
- Appropriate for product catalogs
- Legal text, disclaimers

**Reserve Shared for truly universal:**
- Be certain it's needed
- Hard to change later
- Examples: SKUs, IDs, universal dates

### Team Communication

**Document versioning decisions:**
- Explain why fields are unversioned/shared
- Help editors understand behavior
- Prevent confusion

**Train content editors:**
- Explain how versioning works
- Show where to add versions
- Clarify which fields translate

## Working with Versions in Page Builder

### Managing Numbered Versions

**View versions:**
- Version dropdown (top right)
- See all versions with names/numbers
- Switch between versions

**Create new version:**
- Click "Add a new version"
- Optionally name it
- Edit content in new version

**Compare versions:**
- Switch between versions
- See what changed
- Revert if needed

### Managing Language Versions

**View languages:**
- Language selector
- See available languages
- Switch between languages

**Add language version:**
- Select target language
- Add version
- Translate/localize content

**Status per language:**
- Each language has independent workflow state
- Publish separately if needed

## Common Versioning Patterns

### Pattern 1: Global Product Catalog

**Shared fields:**
- SKU, Price, Weight

**Unversioned fields:**
- Product Name, Category

**Versioned fields:**
- Marketing description, Feature bullets

**Rationale:** SKU never changes, name translates but is stable, marketing content updates frequently.

### Pattern 2: News Articles

**Shared fields:**
- Publication Date (universal), Article ID

**Unversioned fields:**
- Author Name (rarely changes per language)

**Versioned fields:**
- Headline, Body, Summary

**Rationale:** Date and ID are universal, author stable, editorial content changes.

### Pattern 3: Event Pages

**Shared fields:**
- Event Date, Location Coordinates, Event ID

**Unversioned fields:**
- Location Name (translates but stable)

**Versioned fields:**
- Event Title, Description, Highlights

**Rationale:** Date and coordinates universal, location name translates, descriptions update.

## Key Takeaways

- Sitecore supports two version types: numbered (within language) and language (across languages)
- Three field versioning types: Versioned, Unversioned, Shared
- Versioned: Different per language AND version (default, most flexible)
- Unversioned: Different per language, same across versions
- Shared: Same across ALL languages and versions
- Choose versioning type based on content behavior and business needs
- Default to Versioned for most editorial content
- Use Unversioned for translated but stable content
- Reserve Shared for truly universal values
- Configure during template design in Builder view
- Document decisions and train editors`,

    flashcards: [
      {
        id: "version-1",
        question: "What are the two types of versions in Sitecore?",
        answer:
          "Numbered versions (multiple versions within the same language) and language versions (versions in different languages). They're handled independently.",
        difficulty: "easy",
      },
      {
        id: "version-2",
        question: "What is a versioned field?",
        answer:
          "A field with different values for each language AND each numbered version. Most flexible - content changes and translates. This is the default.",
        difficulty: "easy",
      },
      {
        id: "version-3",
        question: "What is an unversioned field?",
        answer:
          "A field with different values per language but the SAME value across all numbered versions within that language. Good for translated but stable content.",
        difficulty: "medium",
      },
      {
        id: "version-4",
        question: "What is a shared field?",
        answer:
          "A field with the SAME value across all languages and all numbered versions. Used for truly universal content like SKUs or IDs.",
        difficulty: "medium",
      },
      {
        id: "version-5",
        question: "How do you configure a field as versioned?",
        answer:
          "Leave both Shared and Unversioned checkboxes unchecked when creating/editing the field. This is the default setting.",
        difficulty: "easy",
      },
      {
        id: "version-6",
        question: "How do you configure a field as shared?",
        answer:
          "Check BOTH the Shared and Unversioned checkboxes when creating/editing the field.",
        difficulty: "medium",
      },
      {
        id: "version-7",
        question: "When should you use an unversioned field?",
        answer:
          "For content that needs translation but rarely changes within a language. Examples: product names, category labels, location names.",
        difficulty: "medium",
      },
      {
        id: "version-8",
        question: "When should you use a shared field?",
        answer:
          "For truly universal content that's identical across all languages and versions. Examples: product SKUs, universal IDs, image assets (if global).",
        difficulty: "medium",
      },
      {
        id: "version-9",
        question: "Can numbered versions be named?",
        answer:
          "Yes, you can assign optional names to versions for clarity (like 'Summer 2025' or 'Holiday Update') or just use numbers.",
        difficulty: "easy",
      },
      {
        id: "version-10",
        question: "Are numbered versions independent per language?",
        answer:
          "Yes, each language has its own numbered version history. English might have 5 versions while Spanish has 3 - they're independent.",
        difficulty: "hard",
      },
    ],

    quizQuestions: [
      {
        id: "version-quiz-1",
        question:
          "You have a Product SKU field that should be identical everywhere. How should it be configured?",
        options: [
          "Versioned (both boxes unchecked)",
          "Unversioned (only Unversioned checked)",
          "Shared (both boxes checked)",
          "Language-specific",
        ],
        correctAnswer: 2,
        explanation:
          "Product SKU is universal - same across all languages and versions. Configure as Shared by checking both Shared and Unversioned checkboxes. This ensures one value everywhere.",
        scenario: "Creating a product template.",
      },
      {
        id: "version-quiz-2",
        question:
          "Product Name translates but doesn't change often within a language. What versioning type?",
        options: ["Versioned", "Unversioned", "Shared", "Language-locked"],
        correctAnswer: 1,
        explanation:
          "Unversioned fields have different values per language but stay the same across versions within a language. Perfect for product names - they translate ('Sunblock' vs 'Bloqueador Solar') but remain stable.",
      },
      {
        id: "version-quiz-3",
        question: "Your Page Title field is versioned. What does this mean?",
        options: [
          "Same value in all languages and versions",
          "Different per language, same across versions",
          "Different per language AND per version",
          "Only English versions can edit it",
        ],
        correctAnswer: 2,
        explanation:
          "Versioned fields (default) can have different values for each language and each numbered version. English version 1 can have different title than English version 2, and both different from Spanish versions.",
      },
      {
        id: "version-quiz-4",
        question:
          "You updated a shared field in English version 1. What happens?",
        options: [
          "Only English version 1 changes",
          "All English versions change, other languages unchanged",
          "All versions across all languages change",
          "Only latest version of each language changes",
        ],
        correctAnswer: 2,
        explanation:
          "Shared fields are the same everywhere. Updating in any language/version updates the value globally. All languages and all versions immediately reflect the change. This is why shared fields should only be used for truly universal data.",
      },
      {
        id: "version-quiz-5",
        question:
          "What's the default field versioning type if you don't check any boxes?",
        options: ["Unversioned", "Shared", "Versioned", "Language-specific"],
        correctAnswer: 2,
        explanation:
          "Versioned is the default (both Shared and Unversioned unchecked). This provides maximum flexibility - different values per language and version. Change only if you have specific need for unversioned or shared behavior.",
      },
      {
        id: "version-quiz-6",
        question:
          "English has 3 numbered versions, Spanish has 1. Editor creates Spanish version 2. What happens?",
        options: [
          "Error - Spanish must have same number as English",
          "Spanish version 2 created independently",
          "English versions copy to Spanish",
          "Spanish version 2 links to English version 2",
        ],
        correctAnswer: 1,
        explanation:
          "Language versions are independent. Each language maintains its own numbered version history. Spanish can have different number of versions than English with no problems.",
      },
      {
        id: "version-quiz-7",
        question:
          "Which field is a good candidate for unversioned configuration?",
        options: [
          "Marketing headline that changes monthly",
          "Product category label",
          "Blog post body text",
          "Seasonal promotion description",
        ],
        correctAnswer: 1,
        explanation:
          "Product category label needs translation but rarely changes within a language - perfect for unversioned. Marketing headlines, blog posts, and promotions change frequently - they should be versioned.",
      },
      {
        id: "version-quiz-8",
        question:
          "You made an Event Date field shared but different regions have different dates. What's the problem?",
        options: [
          "Performance issues",
          "Can't have different values - all regions see same date",
          "Permissions are incorrect",
          "Need to enable multi-region support",
        ],
        correctAnswer: 1,
        explanation:
          "Shared fields are identical everywhere. If regions need different dates, the field should be unversioned (per language) or versioned. Wrong versioning type causes business logic issues - all regions forced to same date.",
      },
      {
        id: "version-quiz-9",
        question: "Where do you configure field versioning types?",
        options: [
          "In Standard Values",
          "On each item individually",
          "In template field definition (Builder view)",
          "In Sitecore settings",
        ],
        correctAnswer: 2,
        explanation:
          "Field versioning is configured in the template field definition using Builder view. Set the Shared and Unversioned checkboxes when creating/editing the field. This applies to all items using that template.",
      },
      {
        id: "version-quiz-10",
        question: "What's the best approach for most editorial content fields?",
        options: [
          "Make everything shared for consistency",
          "Use unversioned to reduce redundancy",
          "Default to versioned for flexibility",
          "Mix all three types equally",
        ],
        correctAnswer: 2,
        explanation:
          "Default to versioned for most editorial content. It provides maximum flexibility - content can change AND translate. Use unversioned/shared only when you're certain the content fits those specific behaviors.",
      },
    ],
  },
  {
    id: "sitecore-workflows",
    title: "SitecoreAI CMS Workflows",
    description:
      "Understanding workflow concepts, states, commands, and actions",
    estimatedTime: 20,

    content: `# SitecoreAI CMS Workflows

## What is a Workflow?

By default, items in Sitecore are publishable from the moment they're created. This can lead to unfinished content being published accidentally. **Workflows prevent this.**

### Definition

A workflow is:
- **A series of steps** that item versions flow through from creation to publication
- **Created to meet organizational needs** (approval processes, review stages)
- **Assigned to template's Standard Values** (automatic application)

### Purpose

Workflows provide essential governance:

**Visibility into content status:**
- See what's in draft
- Track what's in review
- Know what's approved

**Proper review and approval:**
- Content reviewed before publishing
- Stakeholder sign-off
- Quality control

**Prevent accidental publishing:**
- Unfinished content can't go live
- Explicit approval required
- Protection against mistakes

### Example: Sample Workflow

SitecoreAI CMS includes a built-in Sample Workflow:

**Flow:**
Draft → Awaiting Approval → Approved (publishable)

**States:**
1. Draft - Content being created
2. Awaiting Approval - Submitted for review
3. Approved - Ready to publish (Final state)

## Anatomy of a Workflow

Workflows and all their elements are defined as items in Sitecore (just like everything else!).

### Storage Location

**Path:** \`/sitecore/System/Workflows\`

All workflow definitions stored here as items in the content tree.

### Three Main Components

**1. States** - The phases content passes through
**2. Commands** - Actions users take to move between states
**3. Actions** - Automated methods Sitecore executes

## Component 1: States

States are the fundamental building blocks of workflows. They represent distinct phases in the content lifecycle.

### Key Properties

**Display Name:**
- What content editors see
- Examples: "Draft", "Awaiting Approval", "Approved"

**Initial State field (on workflow):**
- Determines which state new content starts in
- Set on the workflow item itself
- Points to one of the workflow's states

**Final checkbox:**
- Marks state as "publishable"
- Content in Final states can be published
- Non-final states cannot publish

### State Behavior

**When content enters a Final state:**
- Item becomes publishable
- Appears in publishing queue
- Publish action can proceed

**When a user edits content in a Final state:**
- Sitecore automatically creates a new version
- New version moves to Initial state
- Published version remains in Final state

**Example:**

1. Article in "Approved" state (Final) with version 1
2. Editor makes changes
3. Sitecore creates version 2 in "Draft" state (Initial)
4. Version 1 stays "Approved" and remains published
5. Version 2 goes through workflow again

### States in Content Tree

**Structure:**
Workflows/
  Sample Workflow/
    Draft (State)
    Awaiting Approval (State)
    Approved (State, marked Final)

Each state is an item under the workflow.

## Component 2: Commands

Commands enable users to move content from one state to another.

### Key Properties

**Display Name:**
- What users see in UI
- Examples: "Submit", "Approve", "Reject"

**Next State field:**
- Defines target state after command executes
- Required - where does content go?

**Associated Actions:**
- Actions that run when command executes
- Optional but powerful

### Where Commands Appear

**Page Builder:**
- Top toolbar as Actions
- Click to execute

**Content Editor:**
- Review tab in Workflow group
- Commands listed based on current state

**Workbox:**
- Specialized workflow management interface
- Shows commands per item

**Visibility:**
- Commands only visible when content is in corresponding state
- Permission-based - user must have appropriate access

### Command Structure in Content Tree

**Structure:**
Workflows/
  Sample Workflow/
    Draft (State)
      Submit (Command) → Next State: Awaiting Approval
    Awaiting Approval (State)
      Approve (Command) → Next State: Approved
      Reject (Command) → Next State: Draft
    Approved (State)
      [No commands - final state]

Commands are child items under their source state.

## Component 3: Actions

Actions represent methods that Sitecore executes at specific points in the workflow process. They're the "workers" that perform operations automatically.

### Two Types of Actions

**State Actions:**
- Executed when content ENTERS the state
- Automatic - no user interaction
- Example: Send email when content enters "Awaiting Approval"

**Command Actions:**
- Executed when user triggers the command
- Before state transition
- Example: Validate content before allowing "Approve"

### Common Action Use Cases

**State Actions:**

**Send notifications:**
- Email reviewers when content enters "Awaiting Approval"
- Alert authors when content is published

**Log changes:**
- Record state transitions
- Audit trail for compliance

**Auto-assign:**
- Assign content to specific users/teams
- Route based on content type or metadata

**Command Actions:**

**Validate content:**
- Check required fields before approval
- Ensure quality standards met
- Block transition if validation fails

**Update related content:**
- Sync changes to related items
- Update indexes or caches

**External integrations:**
- Trigger webhooks to external systems
- Notify external workflows

### Action Structure in Content Tree

**State Actions:**
Workflows/
  Sample Workflow/
    Approved (State)
      Final State (Actions folder)
        Publish (Action) - publishes the item

**Command Actions:**
Workflows/
  Sample Workflow/
    Awaiting Approval (State)
      Approve (Command)
        ValidateContent (Action)
        SendNotification (Action)

Actions are child items under states or commands.

## Complete Workflow Example

### Sample Workflow Structure

**Workflow: Sample Workflow**
- Initial State: Draft

**State: Draft**
- Not final
- Command: Submit
  - Next State: Awaiting Approval

**State: Awaiting Approval**
- Not final
- Command: Approve
  - Next State: Approved
- Command: Reject
  - Next State: Draft

**State: Approved**
- Final: Yes (checked)
- State Action: Publish
  - Publishes the item automatically

### User Flow Example

1. **Editor creates Event Details item**
   - Item starts in "Draft" state (Initial State)
   - "Submit" command available

2. **Editor clicks Submit**
   - Item moves to "Awaiting Approval" state
   - Notification email sent to reviewers (State Action)
   - "Approve" and "Reject" commands available

3. **Reviewer clicks Approve**
   - Item moves to "Approved" state (Final)
   - Publish action executes (State Action)
   - Item is now published

4. **Editor makes changes**
   - New version created automatically
   - New version in "Draft" state
   - Original version still published

## Assigning Workflows to Content

### Assignment Method: Standard Values

**Best practice:** Assign workflows to template's Standard Values.

**Why Standard Values?**
- Applies to all items created from template
- Centralized configuration
- Consistent behavior
- Easy maintenance

**How to Assign:**

1. Navigate to template's __Standard Values
2. Click REVIEW tab in Content Editor
3. Click "Initial" command in ribbon
4. Select workflow (e.g., "Event Approval Workflow")
5. Save

**Result:**
- All new items from this template enter the workflow
- Start in workflow's Initial State
- Must follow workflow to publish

### Important Note: Existing Items

**New items:** Get workflow automatically

**Existing items:**
- Workflow NOT applied retroactively to current version
- Will apply to NEW versions created after assignment
- Current version (e.g., version 1) remains outside workflow
- Version 2+ will be in workflow

**Implication:** If you add workflow to existing template, create new versions of existing items to bring them into workflow.

## Workflow Benefits

### Content Quality

**Review process:**
- Multiple eyes on content
- Catch errors before publishing
- Maintain brand standards

**Approval gates:**
- Ensure stakeholder sign-off
- Compliance requirements met
- Legal review if needed

### Content Safety

**Prevent accidents:**
- Can't publish draft content
- Must go through approval
- Explicit publish action required

**Version control:**
- Published version preserved
- Edits don't affect live content
- Safe experimentation

### Visibility and Tracking

**Status awareness:**
- See what's in draft vs approved
- Track content through pipeline
- Identify bottlenecks

**Audit trail:**
- Who approved what when
- State transition history
- Compliance documentation

## When to Use Workflows

### Good Candidates

**High-visibility content:**
- Homepage
- Marketing pages
- Press releases

**Multiple stakeholders:**
- Requires approval from marketing, legal, etc.
- Cross-team collaboration

**Compliance requirements:**
- Financial disclosures
- Healthcare information
- Legal content

**Training/junior editors:**
- New team members
- Review before publishing
- Learning process

### Poor Candidates

**Personal blogs:**
- Single author
- Quick updates
- No review needed

**Internal content:**
- Team documentation
- Non-public information
- Low risk

**Automated content:**
- Generated by systems
- No human review needed
- High volume

## Key Takeaways

- Workflows control content from creation to publication
- Prevent unfinished content from being published accidentally
- Consist of States, Commands, and Actions
- States represent phases (Draft, Awaiting Approval, Approved)
- Commands move content between states (Submit, Approve, Reject)
- Actions automate processes (notifications, publishing, validation)
- Final states are publishable; non-final states are not
- Editing published content creates new version in Initial state
- Assign workflows via template's Standard Values
- Workflows stored as items in /sitecore/System/Workflows
- Essential for content governance and quality control`,

    flashcards: [
      {
        id: "workflow-1",
        question: "What is a workflow in Sitecore?",
        answer:
          "A series of steps that item versions flow through from creation to publication, ensuring proper review and preventing accidental publishing of unfinished content.",
        difficulty: "easy",
      },
      {
        id: "workflow-2",
        question: "What are the three main components of a workflow?",
        answer:
          "States (phases content passes through), Commands (actions users take to move between states), and Actions (automated methods Sitecore executes).",
        difficulty: "medium",
      },
      {
        id: "workflow-3",
        question: "What is a workflow state?",
        answer:
          "A phase in the content lifecycle representing where content is in the workflow process. Examples: Draft, Awaiting Approval, Approved.",
        difficulty: "easy",
      },
      {
        id: "workflow-4",
        question: "What is a Final state?",
        answer:
          "A state marked with the Final checkbox where content is publishable. Content in non-final states cannot be published.",
        difficulty: "medium",
      },
      {
        id: "workflow-5",
        question: "What happens when you edit content in a Final state?",
        answer:
          "Sitecore automatically creates a new version in the Initial state. The published version remains in the Final state, and the new version goes through the workflow again.",
        difficulty: "hard",
      },
      {
        id: "workflow-6",
        question: "What is a workflow command?",
        answer:
          "An action users take to move content from one state to another. Commands have a Next State property defining the destination state.",
        difficulty: "medium",
      },
      {
        id: "workflow-7",
        question: "What are State Actions?",
        answer:
          "Automated methods executed when content enters a state. Examples: send notification emails, log changes, or auto-publish.",
        difficulty: "medium",
      },
      {
        id: "workflow-8",
        question: "What are Command Actions?",
        answer:
          "Automated methods executed when a user triggers a command. Examples: validate content, update related items, or trigger webhooks.",
        difficulty: "medium",
      },
      {
        id: "workflow-9",
        question: "How should you assign workflows to content?",
        answer:
          "Assign workflows to template's Standard Values. This applies the workflow to all items created from that template automatically.",
        difficulty: "medium",
      },
      {
        id: "workflow-10",
        question: "Where are workflows stored in Sitecore?",
        answer:
          "In the content tree at /sitecore/System/Workflows. Workflows and their components (states, commands, actions) are all items.",
        difficulty: "easy",
      },
    ],

    quizQuestions: [
      {
        id: "workflow-quiz-1",
        question: "Why are workflows important?",
        options: [
          "They make publishing faster",
          "They prevent unfinished content from being published accidentally",
          "They automatically translate content",
          "They improve page load times",
        ],
        correctAnswer: 1,
        explanation:
          "Workflows provide governance by preventing accidental publishing of unfinished content. They ensure proper review and approval before content goes live, maintaining quality and preventing mistakes.",
      },
      {
        id: "workflow-quiz-2",
        question:
          "An item is in 'Approved' state (marked Final). An editor makes changes. What happens?",
        options: [
          "Changes apply directly to published version",
          "New version created in Initial state, original stays published",
          "Item moves back to Draft state",
          "Changes blocked until workflow reset",
        ],
        correctAnswer: 1,
        explanation:
          "Sitecore automatically creates a new version when editing content in a Final state. The new version starts in the Initial state and goes through the workflow. The original published version remains unaffected.",
        scenario: "Editor updating published content.",
      },
      {
        id: "workflow-quiz-3",
        question:
          "Content is in 'Awaiting Approval' state but not showing in publish queue. Why?",
        options: [
          "Caching issue - rebuild needed",
          "State is not marked as Final - content not publishable",
          "Workflow is disabled",
          "User lacks permissions",
        ],
        correctAnswer: 1,
        explanation:
          "Only content in Final states is publishable. 'Awaiting Approval' is not a Final state - content must be approved first. Mark a state as Final by checking the Final checkbox in the state definition.",
      },
      {
        id: "workflow-quiz-4",
        question:
          "You want to send an email when content enters 'Awaiting Approval'. What should you use?",
        options: [
          "Command Action on Submit command",
          "State Action on Awaiting Approval state",
          "Final state action",
          "Workflow validation rule",
        ],
        correctAnswer: 1,
        explanation:
          "State Actions execute when content enters a state. Add an email notification action to the 'Awaiting Approval' state. It will automatically trigger whenever content reaches that state, regardless of which command was used.",
      },
      {
        id: "workflow-quiz-5",
        question:
          "Where should you assign a workflow to ensure all Event Details use it?",
        options: [
          "On each Event Details item individually",
          "In Event Details template's Standard Values",
          "In the workflow configuration",
          "In site settings",
        ],
        correctAnswer: 1,
        explanation:
          "Assign workflows to template's Standard Values. This applies the workflow to all items created from the template automatically. Consistent, centralized, and maintainable.",
      },
      {
        id: "workflow-quiz-6",
        question: "What does the 'Initial State' field on a workflow define?",
        options: [
          "The first state content can enter",
          "The state new content starts in",
          "The state required before publishing",
          "The default state for errors",
        ],
        correctAnswer: 1,
        explanation:
          "Initial State determines where new content starts. When an item is created or a new version is made (from Final state edit), it enters the workflow at this state. Usually set to 'Draft' or similar.",
      },
      {
        id: "workflow-quiz-7",
        question:
          "You added workflow to Event Details template. Existing items (version 1) aren't in workflow. Why?",
        options: [
          "Need to republish the items",
          "Workflow doesn't apply retroactively to existing versions",
          "Template cache needs clearing",
          "Workflow assignment failed",
        ],
        correctAnswer: 1,
        explanation:
          "Workflows assigned via Standard Values only apply to new items or new versions. Existing version 1 remains outside workflow. Create version 2 of existing items to bring them into the workflow.",
      },
      {
        id: "workflow-quiz-8",
        question: "What's a Command Action best used for?",
        options: [
          "Automatically publishing content",
          "Validating content before allowing state transition",
          "Creating new workflow states",
          "Assigning permissions",
        ],
        correctAnswer: 1,
        explanation:
          "Command Actions execute when users trigger commands, making them perfect for validation. For example, check that required fields are filled before allowing 'Approve' command. Can block transition if validation fails.",
      },
      {
        id: "workflow-quiz-9",
        question:
          "Your workflow has states Draft → Review → Approved. Only Approved is Final. Where can editors publish from?",
        options: [
          "From any state",
          "Only from Approved state",
          "From Review and Approved",
          "Need to configure publishing separately",
        ],
        correctAnswer: 1,
        explanation:
          "Only Final states are publishable. Since only 'Approved' is marked Final, content must reach that state before publishing. Content in Draft or Review cannot be published - this is the governance benefit of workflows.",
      },
      {
        id: "workflow-quiz-10",
        question: "Which content is a POOR candidate for workflows?",
        options: [
          "Homepage requiring legal and marketing approval",
          "Personal blog posts by single author",
          "Press releases with compliance requirements",
          "Product pages requiring review",
        ],
        correctAnswer: 1,
        explanation:
          "Personal blogs with single authors publishing their own content don't benefit from workflows. Workflows add overhead. Use for high-visibility content, multiple stakeholders, or compliance requirements - not simple, low-risk scenarios.",
      },
    ],
  },
  {
    id: "creating-workflows",
    title: "Creating & Implementing Workflows",
    description: "Build custom workflows with states, commands, and actions",
    estimatedTime: 22,

    content: `# Creating & Implementing Workflows

## Planning Your Workflow

Before creating a workflow in Sitecore, plan the structure based on your organizational needs.

### Define Your States

**Ask:**
- What phases does content go through?
- Who reviews at each stage?
- When is content ready to publish?

**Example: Event Approval Workflow**

**States needed:**
1. Draft - Content creation
2. Awaiting Approval - Submitted for review
3. Approved - Ready to publish (Final)

### Define Your Commands

**For each state, determine:**
- What actions can users take?
- Where does content go next?
- Who can execute each command?

**Example Commands:**
- Draft → Submit → Awaiting Approval
- Awaiting Approval → Approve → Approved
- Awaiting Approval → Reject → Draft

### Define Your Actions

**Consider automation needs:**
- Notifications (email reviewers)
- Publishing (auto-publish on approval)
- Validation (check required fields)
- Logging (audit trail)

**Example Actions:**
- State Action on Approved: Publish the item
- Command Action on Submit: Validate required fields

## Creating a Custom Workflow

Let's create an "Event Approval Workflow" step by step.

### Step 1: Create the Workflow Item

**In Content Editor:**

1. Navigate to \`/sitecore/System/Workflows\`
2. Right-click → Insert → Workflow
3. Name: "Event Approval Workflow"
4. Save

**Result:** New workflow container created.

### Step 2: Create States

**Create Draft State:**

1. Right-click "Event Approval Workflow"
2. Insert → Workflow State
3. Name: "Draft"
4. Leave "Final" unchecked
5. Save

**Create Awaiting Approval State:**

1. Right-click "Event Approval Workflow"
2. Insert → Workflow State
3. Name: "Awaiting Approval"
4. Leave "Final" unchecked
5. Save

**Create Approved State:**

1. Right-click "Event Approval Workflow"
2. Insert → Workflow State
3. Name: "Approved"
4. CHECK "Final" checkbox ✓
5. Save

**Result:** Three states created.

### Step 3: Set Initial State

**Configure workflow's starting point:**

1. Select "Event Approval Workflow" item
2. Find "Initial state" field
3. Select "Draft" state from tree
4. Save

**Result:** New items will start in Draft state.

### Step 4: Create Commands

**Create Submit Command (in Draft state):**

1. Right-click "Draft" state
2. Insert → Workflow Command
3. Name: "Submit"
4. In "Next state" field, select "Awaiting Approval"
5. Save

**Create Approve Command (in Awaiting Approval state):**

1. Right-click "Awaiting Approval" state
2. Insert → Workflow Command
3. Name: "Approve"
4. In "Next state" field, select "Approved"
5. Save

**Create Reject Command (in Awaiting Approval state):**

1. Right-click "Awaiting Approval" state
2. Insert → Workflow Command
3. Name: "Reject"
4. In "Next state" field, select "Draft"
5. Save

**Result:** Commands configured for state transitions.

### Step 5: Add Actions

**Add Publish Action to Approved State:**

This makes content automatically publish when approved.

1. Navigate to Sample Workflow → Approved → Final State (actions folder)
2. Find "Publish" action
3. Copy it
4. Navigate to your Event Approval Workflow → Approved
5. Paste the Publish action
6. Save

**Result:** Content automatically publishes when reaching Approved state.

**Note:** Other actions (email notifications, validation, webhooks) will be covered in the next lesson.

### Step 6: Verify Structure

**Check your workflow structure:**

Event Approval Workflow
  ├─ Draft (State)
  │   └─ Submit (Command) → Next: Awaiting Approval
  ├─ Awaiting Approval (State)
  │   ├─ Approve (Command) → Next: Approved
  │   └─ Reject (Command) → Next: Draft
  └─ Approved (State, Final ✓)
      └─ Final State (folder)
          └─ Publish (Action)

**Verify:**
- Initial state set to Draft
- Approved marked as Final
- Commands have correct Next State
- Publish action present in Approved

## Assigning Workflow to Content

Now that the workflow exists, assign it to templates.

### Method: Assign to Template's Standard Values

**Why Standard Values?**
- All new items from template get workflow
- Centralized configuration
- Consistent governance

**Steps:**

1. **Navigate to template's __Standard Values**
   - Example: Event Details template → __Standard Values

2. **Open REVIEW tab**
   - In Content Editor ribbon
   - Shows workflow commands

3. **Click "Initial" command**
   - Opens workflow selector dialog

4. **Select your workflow**
   - Choose "Event Approval Workflow"
   - OK to confirm

5. **Save**
   - __Standard Values now has workflow assigned

**Result:** All new Event Details items will be in workflow.

### Handling Existing Items

**Important caveat:**
- Workflow assignment via Standard Values is "forward-looking"
- Existing items (current versions) won't get workflow retroactively
- NEW versions of existing items will get workflow

**For existing items:**

**Option 1: Create new versions**
- Open each existing item
- Create new version
- New version enters workflow
- Original version remains outside workflow

**Option 2: Manually assign workflow**
- Open existing item
- REVIEW tab → Initial command
- Select workflow
- Applies to current version

**Option 3: PowerShell script**
- Bulk update existing items
- Useful for many items
- Requires scripting knowledge

## Testing Your Workflow

Validate workflow behavior before rolling out.

### Test Case 1: New Item Creation

**Steps:**

1. **Create new Event Details item**
   - Page Builder or Content Editor
   - Name it: "Test Event"

2. **Check initial state**
   - Should be in "Draft" state
   - Verify in workflow panel

3. **Verify commands available**
   - Should see "Submit" command
   - No other commands visible

**Expected:** Item starts in Draft with Submit available.

### Test Case 2: Submit for Approval

**Steps:**

1. **Click Submit command**
   - Page Builder: Top toolbar Actions
   - Content Editor: REVIEW tab

2. **Check state change**
   - Should move to "Awaiting Approval"
   - Verify state changed

3. **Verify new commands**
   - Should see "Approve" and "Reject"
   - "Submit" no longer visible

**Expected:** Item in Awaiting Approval with new commands.

### Test Case 3: Approval and Publishing

**Steps:**

1. **Click Approve command**
   - Item should move to "Approved" state

2. **Check publishability**
   - Item should be publishable now
   - In publish queue

3. **Verify publishing**
   - Publish the item
   - Should publish successfully
   - Check live site if applicable

**Expected:** Item published and live.

### Test Case 4: Edit Published Content

**Steps:**

1. **Open published item**
   - Should be in "Approved" state
   - Version 1

2. **Make an edit**
   - Change any field
   - Save

3. **Check version behavior**
   - New version 2 should be created
   - Version 2 in "Draft" state
   - Version 1 still "Approved" and published

**Expected:** New version in Draft, original version unchanged.

### Test Case 5: Rejection

**Steps:**

1. **Create and submit new item**
   - Get it to "Awaiting Approval"

2. **Click Reject command**
   - Item should return to "Draft"

3. **Verify state**
   - Back in Draft
   - Submit command available again

**Expected:** Reject returns to Draft for revisions.

## Configuring Workflow in Page Builder

Page Builder provides visual workflow management.

### Assigning Workflow at Template Level

**Steps:**

1. **Open Page Builder**
2. **Click "Templates" menu**
   - Switches to templates mode
3. **Find your template**
   - Example: Event Details row
4. **Locate workflow column**
   - Shows current workflow or "None"
5. **Click to edit**
   - Select workflow from dropdown
6. **Save**

**Result:** Workflow assigned to template's Standard Values.

### Using Workflow Commands in Page Builder

**View current state:**
- Select item
- Workflow indicator shows current state
- Top right area

**Execute commands:**
- Top toolbar shows available "Actions"
- Actions are workflow commands
- Click to execute

**Switch versions:**
- Version dropdown
- See all versions and their states
- Switch between versions

## Common Workflow Patterns

### Pattern 1: Simple Approval

**States:**
- Draft
- Approved (Final)

**Commands:**
- Submit (Draft → Approved)

**Best for:**
- Small teams
- Low-risk content
- Quick turnaround needed

### Pattern 2: Two-Stage Review

**States:**
- Draft
- Review
- Approved (Final)

**Commands:**
- Submit (Draft → Review)
- Approve (Review → Approved)
- Reject (Review → Draft)

**Best for:**
- Medium-sized teams
- Single reviewer role
- Standard approval process

### Pattern 3: Multi-Stage Review

**States:**
- Draft
- Editorial Review
- Legal Review
- Approved (Final)

**Commands:**
- Submit (Draft → Editorial Review)
- Editorial Approve (Editorial → Legal)
- Legal Approve (Legal → Approved)
- Reject to Draft (any → Draft)

**Best for:**
- Large organizations
- Compliance requirements
- Multiple stakeholder approval

### Pattern 4: Scheduled Publishing

**States:**
- Draft
- Scheduled
- Published (Final)

**Commands:**
- Schedule (Draft → Scheduled)
- Publish Now (Scheduled → Published)

**Actions:**
- Time-based action publishes from Scheduled

**Best for:**
- Campaign coordination
- Time-sensitive content
- Marketing schedules

## Best Practices

### Keep It Simple

**Don't over-engineer:**
- Start with minimal states needed
- Add complexity only if required
- Test with real users first

**Too many states:**
- Slows down content production
- Confuses editors
- Creates bottlenecks

### Clear Naming

**Use obvious names:**
- "Draft" not "Initial"
- "Awaiting Approval" not "State 2"
- "Approved" not "Final"

**Benefits:**
- Reduces training time
- Self-documenting
- Less confusion

### Permission Planning

**Consider who can:**
- Create content (all editors)
- Submit for review (all editors)
- Approve content (managers only)
- Publish (limited users)

**Configure in Sitecore security:**
- Command-level permissions
- State-level permissions
- Role-based access

### Communication

**Document workflow:**
- Who does what at each stage
- Expected turnaround times
- Escalation procedures

**Train users:**
- How to submit content
- How to approve/reject
- What each state means

### Monitor and Adjust

**Track metrics:**
- How long in each state
- Rejection rates
- Bottlenecks

**Adjust as needed:**
- Simplify if too complex
- Add states if gaps identified
- Refine based on feedback

## Common Issues and Solutions

### Issue: Commands Not Appearing

**Possible causes:**
- User lacks permissions
- Item not in correct state
- Command misconfigured

**Solution:**
- Check user has workflow permissions
- Verify item's current state
- Ensure command's parent state is correct

### Issue: Can't Publish

**Possible causes:**
- Not in Final state
- Permissions issue
- Workflow not configured correctly

**Solution:**
- Move to Final state first
- Check publish permissions
- Verify Final checkbox on state

### Issue: New Items Not in Workflow

**Possible causes:**
- Workflow not assigned to Standard Values
- Template cache issue
- Existing items (not new)

**Solution:**
- Verify workflow in __Standard Values
- Clear cache if needed
- Create NEW items to test (existing won't be affected)

### Issue: Editing Creates Too Many Versions

**Cause:**
- Edit published content = new version in Draft

**Solution:**
- Expected behavior
- Train editors on version behavior
- Consider version cleanup strategy

## Key Takeaways

- Plan workflow structure before creating (states, commands, actions)
- Create workflow in /sitecore/System/Workflows
- Define states (mark Final states)
- Set Initial State on workflow
- Create commands under states with Next State
- Copy Publish action to Final state
- Assign via template's Standard Values
- Existing items need manual update or new versions
- Test thoroughly with all scenarios
- Keep workflows simple and clear
- Document and train users
- Monitor and adjust based on usage
- Use Page Builder for visual workflow management`,

    flashcards: [
      {
        id: "create-wf-1",
        question: "Where do you create workflows in Sitecore?",
        answer:
          "In the content tree at /sitecore/System/Workflows. Right-click to insert a new Workflow item.",
        difficulty: "easy",
      },
      {
        id: "create-wf-2",
        question: "What must you set on a workflow after creating it?",
        answer:
          "Set the 'Initial state' field to define which state new content starts in (usually Draft).",
        difficulty: "medium",
      },
      {
        id: "create-wf-3",
        question: "How do you make a state publishable?",
        answer:
          "Check the 'Final' checkbox on the state. Only states marked as Final allow publishing.",
        difficulty: "easy",
      },
      {
        id: "create-wf-4",
        question: "Where do you create commands in a workflow?",
        answer:
          "As child items under the source state. Right-click the state → Insert → Workflow Command.",
        difficulty: "medium",
      },
      {
        id: "create-wf-5",
        question: "What property must every command have?",
        answer:
          "Next State - defines where content goes when the command is executed.",
        difficulty: "medium",
      },
      {
        id: "create-wf-6",
        question: "How do you assign a workflow to all items from a template?",
        answer:
          "In the template's __Standard Values, click REVIEW tab → Initial command → Select the workflow → Save.",
        difficulty: "medium",
      },
      {
        id: "create-wf-7",
        question: "Why copy the Publish action to your Final state?",
        answer:
          "The Publish action automatically publishes items when they reach that state. It's a State Action that executes when content enters the Approved state.",
        difficulty: "hard",
      },
      {
        id: "create-wf-8",
        question:
          "Do existing items get workflow when you assign it to Standard Values?",
        answer:
          "No, existing items (current versions) aren't affected. Only new items or new versions of existing items will be in the workflow.",
        difficulty: "hard",
      },
      {
        id: "create-wf-9",
        question:
          "What happens when you edit content in an Approved (Final) state?",
        answer:
          "Sitecore creates a new version in the Initial state (Draft). The original published version stays in Approved state.",
        difficulty: "medium",
      },
      {
        id: "create-wf-10",
        question: "What's the recommended approach for workflow complexity?",
        answer:
          "Keep it simple - start with minimal states needed and add complexity only if required. Too many states slows production and confuses editors.",
        difficulty: "medium",
      },
    ],

    quizQuestions: [
      {
        id: "create-wf-quiz-1",
        question:
          "You created states Draft and Approved, but new items aren't starting in Draft. What's missing?",
        options: [
          "Need to mark Draft as Initial in the state",
          "Need to set 'Initial state' field on the workflow to point to Draft",
          "Need to rebuild the workflow cache",
          "Need to restart Sitecore",
        ],
        correctAnswer: 1,
        explanation:
          "Set the 'Initial state' field on the workflow item itself to point to your Draft state. This tells Sitecore where new content should start.",
        scenario: "New items not entering workflow correctly.",
      },
      {
        id: "create-wf-quiz-2",
        question:
          "Your Approved state exists but items can't be published from it. What's wrong?",
        options: [
          "Need to add Publish command",
          "Approved state needs 'Final' checkbox checked",
          "Need to configure publishing targets",
          "Workflow not saved properly",
        ],
        correctAnswer: 1,
        explanation:
          "Only states marked as Final (Final checkbox checked) allow publishing. Check the Final checkbox in your Approved state definition to make content publishable from that state.",
      },
      {
        id: "create-wf-quiz-3",
        question:
          "Where should the Submit command (Draft → Awaiting Approval) be created?",
        options: [
          "Under the workflow root",
          "Under the Draft state",
          "Under the Awaiting Approval state",
          "Under a Commands folder",
        ],
        correctAnswer: 1,
        explanation:
          "Commands are created as child items under their source state. Submit command moves FROM Draft, so it should be a child of the Draft state item.",
      },
      {
        id: "create-wf-quiz-4",
        question:
          "You assigned workflow to Event Details Standard Values. Existing Event Details items aren't in workflow. Why?",
        options: [
          "Workflow assignment failed",
          "Need to republish items",
          "Standard Values only affect new items/versions, not existing ones",
          "Need to clear template cache",
        ],
        correctAnswer: 2,
        explanation:
          "Workflow assignment via Standard Values is forward-looking. Existing items (current versions) aren't affected. Only new items or new versions created after assignment will be in workflow. Create new versions of existing items to bring them into workflow.",
      },
      {
        id: "create-wf-quiz-5",
        question:
          "What should you copy from Sample Workflow to auto-publish approved content?",
        options: [
          "The Approved state",
          "The Publish command",
          "The Publish action from Approved state",
          "The workflow configuration",
        ],
        correctAnswer: 2,
        explanation:
          "Copy the Publish action from Sample Workflow's Approved state to your workflow's Approved state. This State Action automatically publishes items when they enter the Approved state.",
      },
      {
        id: "create-wf-quiz-6",
        question:
          "You created Approve command but it's not visible to users. Most likely cause?",
        options: [
          "Command hasn't been saved",
          "Command is under wrong state",
          "Users lack workflow permissions",
          "Workflow cache needs clearing",
        ],
        correctAnswer: 2,
        explanation:
          "Commands are permission-based. Users must have appropriate workflow permissions to see and execute commands. Check role/user permissions for workflow command access. Also verify command is under correct state.",
      },
      {
        id: "create-wf-quiz-7",
        question:
          "How do you test that editing published content creates a new version in Draft?",
        options: [
          "Create item → Approve → Publish → Edit → Check version",
          "Just edit any item",
          "Need PowerShell script to test",
          "Check workflow logs",
        ],
        correctAnswer: 0,
        explanation:
          "Full test: Create item, approve it (moves to Approved/Final), publish it, then edit it. Check that a new version is created in Draft state while version 1 stays Approved. This validates the automatic versioning behavior.",
      },
      {
        id: "create-wf-quiz-8",
        question: "What's the best practice for workflow state names?",
        options: [
          "Use technical names (state_01, state_02)",
          "Use clear, obvious names (Draft, Awaiting Approval, Approved)",
          "Use short codes (D, AA, A)",
          "Use process-specific terms (INIT, REV, PUB)",
        ],
        correctAnswer: 1,
        explanation:
          "Use clear, obvious names that editors immediately understand: 'Draft', 'Awaiting Approval', 'Approved'. This is self-documenting, reduces training time, and prevents confusion. Avoid technical jargon or abbreviations.",
      },
      {
        id: "create-wf-quiz-9",
        question:
          "Your workflow has 7 states and editors complain it's too slow. What should you do?",
        options: [
          "Add more commands to speed transitions",
          "Simplify workflow - remove unnecessary states",
          "Increase server resources",
          "Add more approvers to parallelize",
        ],
        correctAnswer: 1,
        explanation:
          "Too many workflow states creates bottlenecks and slows content production. Simplify by removing unnecessary states. Start with minimal states needed and only add complexity if truly required. Test with real users.",
      },
      {
        id: "create-wf-quiz-10",
        question:
          "You want Event Details to use workflow but Event List shouldn't. How?",
        options: [
          "Assign workflow to both and disable for Event List",
          "Assign workflow to Event Details Standard Values only",
          "Can't have different workflows for templates",
          "Use item-level workflow assignment for each",
        ],
        correctAnswer: 1,
        explanation:
          "Assign workflow only to Event Details template's Standard Values. Don't assign it to Event List. Each template can have different workflow configuration (or none). This is the benefit of Standard Values - template-specific governance.",
      },
    ],
  },
  {
    id: "sitecore-webhooks",
    title: "SitecoreAI CMS Webhooks",
    description:
      "Integrating external systems with webhook actions and event handlers",
    estimatedTime: 18,

    content: `# SitecoreAI CMS Webhooks

## Understanding SitecoreAI CMS Webhooks

SitecoreAI CMS webhooks enable you to receive instant notifications about events and workflow actions. They also allow execution of external validation processes when item workflow states change.

### Important Distinction

**SitecoreAI CMS Webhooks (this lesson):**
- Events and workflow actions in the CMS
- Item saved, workflow state changes, etc.

**Experience Edge Webhooks (different):**
- Notifications about published content changes
- Triggers when content published to Edge
- Covered in Experience Edge lessons

**Don't confuse these two!** This lesson focuses on CMS webhooks only.

## Three Types of SitecoreAI CMS Webhooks

### 1. Webhook Submit Action

**Purpose:** Triggers when items change workflow state.

**Characteristics:**
- Fires when workflow commands execute
- Focuses primarily on workflow actions
- Enables workflow-based integrations
- Sends HTTP request to external endpoint

**Use Cases:**
- Notify project management tools (JIRA, Asana)
- Update dashboards with workflow status
- Log workflow transitions
- Integrate with approval systems

**Example:**
Send HTTP request to JIRA when content enters "Awaiting Approval" state.

### 2. Webhook Validation Action

**Purpose:** External services can approve/reject workflow state transitions.

**Characteristics:**
- Acts as gatekeeper for workflow transitions
- Can block state transitions based on external validation
- Waits for external system response
- Provides third-party quality control

**Use Cases:**
- Check content for compliance using external API
- Verify SEO requirements before approval
- Run automated accessibility checks
- Validate against brand guidelines

**Example:**
Check content for compliance issues using external API before allowing transition to "Approved" state. Block transition if issues found.

### 3. Webhook Event Handler

**Purpose:** Triggers on supported system events.

**Characteristics:**
- Broader than workflow - any system event
- Provides information about the event
- Fires automatically on configured events
- No blocking - informational only

**Supported Events:**
- **Item events:** item_added, item_copied, item_deleted, item_moved, item_renamed, item_saved, item_versionAdded
- **Item state events:** item_locked, item_unlocked, item_templateChanged, item_sortorderChanged
- **Publishing events:** publish_begin, publish_end, publish_fail, publish_statusUpdated
- **Clone events:** item_clonedAdded

**Use Cases:**
- Monitor specific template items for changes
- Sync content changes to external systems
- Track item deletions for audit
- Notify on publishing events

**Example:**
Monitor all Event Details items for saves, send notification to Slack channel.

## Implementing Webhook Submit Action

Let's implement a webhook submit action for our Event Approval Workflow.

### Scenario

**Goal:** Send notification to external system (JIRA) when editor submits Event Details for approval.

**Workflow:** Event Approval Workflow
**Command:** Submit (Draft → Awaiting Approval)
**Action:** Webhook Submit Action

### Prerequisites

**External endpoint:**
- Have a URL to send webhook to
- For testing: Use webhook.site (free service)
- For production: Your actual integration endpoint

**Endpoint example:**
https://webhook.site/YOUR-UNIQUE-ID

### Step 1: Create Webhook Submit Action

**In Content Editor:**

1. Navigate to your workflow:
   - \`/sitecore/System/Workflows/Event Approval Workflow/Draft/Submit\`

2. Right-click Submit command
   - Insert → Webhook Submit Action

3. Name it:
   - "Notify JIRA" (or descriptive name)

4. Save

### Step 2: Configure the Webhook

**Required fields:**

**URL field:**
- Enter your endpoint URL
- Example: \`https://webhook.site/20a057c3-b802-4178-a129-3582ead71534\`

**Enabled checkbox:**
- Check this to activate
- Unchecked webhooks don't fire

**Optional fields:**

**Authorization:**
- If endpoint requires authentication
- Bearer tokens, API keys, etc.
- Example: \`Bearer YOUR_TOKEN\`

**Custom Headers:**
- Additional HTTP headers if needed
- JSON format: \`{"X-Custom-Header": "value"}\`

**Save** after configuration.

### Step 3: Test the Webhook

**Create test scenario:**

1. **Create Event Details item**
   - Name: "Test Webhook Event"
   - Fill in some content

2. **Submit for approval**
   - Click Submit command
   - This triggers the webhook

3. **Check endpoint**
   - Go to webhook.site (or your endpoint)
   - Review the payload received
   - Verify data sent

### Understanding the Payload

**Webhook Submit Action sends:**

**Item information:**
- Item ID (GUID)
- Item name
- Item path
- Template information

**Workflow information:**
- Current state
- Previous state
- Command executed
- Workflow name

**User information:**
- Who executed the command
- Timestamp

**Example payload:**
json
{
  "itemId": "110d559f-dea5-42ea-9c1c-8a5df7e70ef9",
  "itemName": "Test Webhook Event",
  "itemPath": "/sitecore/content/Events/Climbing/Test Webhook Event",
  "templateName": "Event Details",
  "workflowState": "Awaiting Approval",
  "previousState": "Draft",
  "command": "Submit",
  "user": "sitecore\\admin",
  "timestamp": "2025-12-06T10:30:00Z"
}

## Use Cases and Patterns

### Use Case 1: JIRA Integration

**Scenario:** Create JIRA ticket when content submitted for approval.

**Setup:**
- Webhook Submit Action on Submit command
- JIRA REST API endpoint
- Payload creates ticket with item details

**Benefits:**
- Automatic ticket creation
- Tracks approval requests
- Links CMS items to JIRA

### Use Case 2: Slack Notifications

**Scenario:** Notify Slack channel when content approved.

**Setup:**
- Webhook Submit Action on Approve command
- Slack incoming webhook URL
- Payload formats message for Slack

**Benefits:**
- Real-time team notifications
- Visibility into publishing
- Celebrate approvals!

### Use Case 3: Approval Dashboard

**Scenario:** Update external dashboard with workflow status.

**Setup:**
- Webhook Submit Actions on all commands
- Dashboard API endpoint
- Dashboard displays workflow metrics

**Benefits:**
- Management visibility
- Bottleneck identification
- Performance tracking

### Use Case 4: External Validation

**Scenario:** Check content against brand guidelines before approval.

**Setup:**
- Webhook Validation Action on Approve command
- Brand guideline API
- API returns approve/reject decision

**Benefits:**
- Automated quality checks
- Consistent brand compliance
- Prevents non-compliant content

### Use Case 5: Content Sync

**Scenario:** Sync content changes to external CRM.

**Setup:**
- Webhook Event Handler on item_saved
- Filter by Event Details template
- CRM API endpoint

**Benefits:**
- Automatic data sync
- Single source of truth
- Reduced manual data entry

## Configuration Best Practices

### Security

**Use HTTPS:**
- Never send sensitive data over HTTP
- Require SSL for webhook endpoints

**Authenticate requests:**
- Use Authorization headers
- Validate tokens on receiving end
- Rotate keys regularly

**Validate payloads:**
- Receiving system should validate
- Check signatures if available
- Prevent spoofing

### Reliability

**Handle failures gracefully:**
- Webhook fires but endpoint may be down
- Don't block workflow if webhook fails
- Log errors for troubleshooting

**Timeout settings:**
- Don't wait forever for responses
- Set reasonable timeouts
- Validation Actions need special consideration

**Retry logic:**
- Consider retry mechanisms
- Exponential backoff
- Circuit breaker patterns

### Monitoring

**Log webhook calls:**
- Record successful calls
- Log failures with details
- Track response times

**Alert on failures:**
- Notify if webhooks failing consistently
- Could indicate integration problems
- Proactive issue resolution

**Dashboard metrics:**
- Webhook call volume
- Success/failure rates
- Response time trends

## Webhook Event Handler Example

### Monitoring Event Details Changes

**Goal:** Send notification whenever Event Details items are saved.

**Setup:**

1. **Create Webhook Event Handler**
   - \`/sitecore/System/Webhooks/Event Handlers\`
   - Insert → Webhook Event Handler
   - Name: "Monitor Event Details"

2. **Configure handler:**
   - **Event:** item_saved
   - **Template filter:** Event Details template
   - **URL:** Your endpoint
   - **Enabled:** Checked

3. **Test:**
   - Edit any Event Details item
   - Save it
   - Check endpoint for payload

**Payload includes:**
- Event type (item_saved)
- Item details
- Old values and new values (for saved items)
- User who made changes

## Webhook Validation Action Example

### External Content Validation

**Goal:** Validate content with external service before approval.

**Setup:**

1. **Create Webhook Validation Action**
   - Under Approve command in workflow
   - Name: "Validate Content"

2. **Configure action:**
   - **URL:** Validation service endpoint
   - **Timeout:** 30 seconds (must wait for response)
   - **Enabled:** Checked

3. **External service logic:**
   - Receives item data
   - Performs validation checks
   - Returns approve/reject decision
   - Includes explanation if rejected

4. **Behavior:**
   - If approved: State transition proceeds
   - If rejected: Transition blocked, user notified

**Example response from validation service:**
json
{
  "decision": "reject",
  "reason": "Content exceeds maximum length for social sharing"
}

## Differences Between Webhook Types

### Webhook Submit Action

**Timing:** After command execution
**Purpose:** Inform external systems
**Blocking:** No (fire and forget)
**Response:** Not required
**Use for:** Notifications, logging, integrations

### Webhook Validation Action

**Timing:** Before state transition
**Purpose:** Get approval/rejection from external system
**Blocking:** Yes (waits for response)
**Response:** Required (approve/reject)
**Use for:** Quality gates, compliance checks

### Webhook Event Handler

**Timing:** On system events
**Purpose:** Monitor CMS activity
**Blocking:** No (fire and forget)
**Response:** Not required
**Use for:** Broad monitoring, syncing, auditing

## Troubleshooting Webhooks

### Webhook Not Firing

**Check:**
- Enabled checkbox is checked
- URL is correct
- Event/command is actually executing
- Template filter (Event Handlers) matches

**Solution:**
- Verify configuration
- Test with simple endpoint (webhook.site)
- Check Sitecore logs for errors

### Endpoint Not Receiving

**Check:**
- Endpoint is reachable from Sitecore server
- Firewall allows outbound connections
- URL doesn't have typos
- Endpoint is actually running

**Solution:**
- Test endpoint independently
- Check network connectivity
- Review firewall rules

### Payload Is Empty or Wrong

**Check:**
- Item has expected data
- Event is correct type
- Webhook configuration complete

**Solution:**
- Review payload documentation
- Test with known-good scenario
- Check logs for payload details

### Validation Action Not Blocking

**Check:**
- Response format correct
- Timeout not exceeded
- Validation service returning decision

**Solution:**
- Verify response format
- Increase timeout if needed
- Test validation service independently

## Key Takeaways

- Three webhook types: Submit Action, Validation Action, Event Handler
- Submit Actions notify external systems of workflow changes
- Validation Actions allow external approval/rejection of transitions
- Event Handlers monitor broad system events
- Configure with URL, enabled flag, optional auth
- Webhooks send rich payloads with item/workflow data
- Use for integrations, notifications, validation, syncing
- Monitor webhook health and failures
- Secure endpoints with HTTPS and authentication
- Handle failures gracefully - don't break workflows
- Test thoroughly with real endpoints
- Document integrations for team
- Don't confuse with Experience Edge webhooks (different system)`,

    flashcards: [
      {
        id: "webhook-1",
        question: "What are the three types of SitecoreAI CMS webhooks?",
        answer:
          "Webhook Submit Action (workflow state changes), Webhook Validation Action (external approval/rejection), and Webhook Event Handler (system events like item_saved).",
        difficulty: "medium",
      },
      {
        id: "webhook-2",
        question: "What is a Webhook Submit Action used for?",
        answer:
          "To send notifications to external systems when workflow commands execute and items change state. Examples: notify JIRA, update dashboards, log transitions.",
        difficulty: "easy",
      },
      {
        id: "webhook-3",
        question: "What is a Webhook Validation Action used for?",
        answer:
          "To allow external services to approve or reject workflow state transitions. Acts as a gatekeeper - can block transitions based on external validation.",
        difficulty: "medium",
      },
      {
        id: "webhook-4",
        question: "What is a Webhook Event Handler used for?",
        answer:
          "To monitor system events (item_saved, item_deleted, publish_begin, etc.) and send notifications. Broader than workflow - covers any system event.",
        difficulty: "medium",
      },
      {
        id: "webhook-5",
        question: "Where do you create a Webhook Submit Action?",
        answer:
          "As a child item under a workflow command. Right-click the command → Insert → Webhook Submit Action.",
        difficulty: "medium",
      },
      {
        id: "webhook-6",
        question: "What two fields are required to configure a webhook?",
        answer:
          "URL field (endpoint to send to) and Enabled checkbox (must be checked to activate).",
        difficulty: "easy",
      },
      {
        id: "webhook-7",
        question: "Do Webhook Submit Actions block workflow execution?",
        answer:
          "No, they're fire-and-forget. The workflow proceeds regardless of webhook success/failure. They inform but don't block.",
        difficulty: "medium",
      },
      {
        id: "webhook-8",
        question: "Do Webhook Validation Actions block workflow execution?",
        answer:
          "Yes, they wait for external service response. The service can approve (allow transition) or reject (block transition) based on validation.",
        difficulty: "hard",
      },
      {
        id: "webhook-9",
        question:
          "What's the difference between SitecoreAI CMS webhooks and Experience Edge webhooks?",
        answer:
          "CMS webhooks trigger on CMS events (workflow, saves, etc.). Edge webhooks trigger when content is published to Experience Edge. Different systems, different purposes.",
        difficulty: "hard",
      },
      {
        id: "webhook-10",
        question: "What information does a webhook payload typically include?",
        answer:
          "Item information (ID, name, path, template), workflow information (state, command), user information (who, when), and event details.",
        difficulty: "medium",
      },
    ],

    quizQuestions: [
      {
        id: "webhook-quiz-1",
        question:
          "You want to notify JIRA when content is submitted for approval. Which webhook type?",
        options: [
          "Webhook Event Handler on item_saved",
          "Webhook Submit Action on Submit command",
          "Webhook Validation Action on Submit command",
          "Experience Edge webhook",
        ],
        correctAnswer: 1,
        explanation:
          "Webhook Submit Action on the Submit command (Draft → Awaiting Approval). This fires when the command executes and can notify external systems like JIRA.",
        scenario: "Integrating workflow with project management.",
      },
      {
        id: "webhook-quiz-2",
        question:
          "You want external service to check content compliance before approval. Which webhook type?",
        options: [
          "Webhook Submit Action - fire and forget",
          "Webhook Validation Action - can block transition",
          "Webhook Event Handler - monitor events",
          "Standard workflow action",
        ],
        correctAnswer: 1,
        explanation:
          "Webhook Validation Action waits for external service response and can block the state transition if validation fails. Perfect for quality gates and compliance checks before approval.",
      },
      {
        id: "webhook-quiz-3",
        question:
          "Your webhook is configured but not firing. What should you check FIRST?",
        options: [
          "Server firewall settings",
          "Enabled checkbox is checked",
          "External endpoint is running",
          "Sitecore version compatibility",
        ],
        correctAnswer: 1,
        explanation:
          "First check that the Enabled checkbox is checked. This is the most common issue - webhook is configured but not activated. Then verify URL, command execution, etc.",
      },
      {
        id: "webhook-quiz-4",
        question:
          "You created Webhook Submit Action but workflow is failing. What's likely wrong?",
        options: [
          "Webhook endpoint is down",
          "Nothing - Submit Actions don't block workflow",
          "Need to increase timeout",
          "Wrong webhook type",
        ],
        correctAnswer: 1,
        explanation:
          "Webhook Submit Actions are fire-and-forget - they don't block workflow. If workflow is failing, the issue is elsewhere (command configuration, permissions, etc.), not the webhook. Submit Actions shouldn't cause workflow failures.",
      },
      {
        id: "webhook-quiz-5",
        question: "Where is a Webhook Submit Action created?",
        options: [
          "Under the workflow root",
          "Under the target state",
          "Under the workflow command",
          "/sitecore/System/Webhooks",
        ],
        correctAnswer: 2,
        explanation:
          "Webhook Submit Actions are created as child items under the workflow command they should trigger from. If you want webhook on Submit command, create it under the Submit command item.",
      },
      {
        id: "webhook-quiz-6",
        question:
          "You want to monitor ALL Event Details saves, not just workflow changes. Which webhook?",
        options: [
          "Webhook Submit Action",
          "Webhook Validation Action",
          "Webhook Event Handler on item_saved with template filter",
          "Experience Edge webhook",
        ],
        correctAnswer: 2,
        explanation:
          "Webhook Event Handler with item_saved event and template filter for Event Details. This monitors all saves regardless of workflow. Submit/Validation Actions only trigger on workflow commands.",
      },
      {
        id: "webhook-quiz-7",
        question: "What security best practice should you follow for webhooks?",
        options: [
          "Use HTTP for faster performance",
          "Use HTTPS and authenticate requests",
          "Allow anonymous access for simplicity",
          "Store credentials in webhook URL",
        ],
        correctAnswer: 1,
        explanation:
          "Always use HTTPS (not HTTP) and authenticate requests using Authorization headers. Never send sensitive data over HTTP. Validate tokens on receiving end and rotate keys regularly.",
      },
      {
        id: "webhook-quiz-8",
        question:
          "Your Webhook Validation Action times out. What should you do?",
        options: [
          "Remove the validation - it's blocking workflow",
          "Increase timeout setting, optimize validation service",
          "Convert to Submit Action instead",
          "Disable the webhook",
        ],
        correctAnswer: 1,
        explanation:
          "Increase the timeout setting and optimize the validation service response time. Validation Actions must wait for responses, so ensure reasonable timeout and efficient external service. Don't remove valuable validation without investigating.",
      },
      {
        id: "webhook-quiz-9",
        question:
          "What happens if a Webhook Submit Action endpoint returns an error?",
        options: [
          "Workflow is blocked until fixed",
          "Workflow proceeds normally - fire and forget",
          "Item is rolled back",
          "User sees error message",
        ],
        correctAnswer: 1,
        explanation:
          "Webhook Submit Actions are fire-and-forget. Even if the endpoint returns an error or is unreachable, the workflow proceeds normally. This is by design - external integrations shouldn't break core workflow.",
      },
      {
        id: "webhook-quiz-10",
        question:
          "You want to track when Event Details items are published. Which webhook?",
        options: [
          "Webhook Submit Action on Approve command",
          "Webhook Event Handler on publish_end with template filter",
          "Webhook Validation Action on Final state",
          "Experience Edge webhook",
        ],
        correctAnswer: 1,
        explanation:
          "Webhook Event Handler with publish_end event and template filter for Event Details. This triggers when publishing completes for those items. Experience Edge webhooks are different (Edge publishing events, not CMS).",
      },
    ],
  },
];

// Courses - collections of sections
export const courses: Course[] = [
  {
    id: "sitecoreai-cms-for-developers",
    title: "SitecoreAI CMS for Developers",
    description:
      "Complete guide to building with SitecoreAI XM Cloud - from fundamentals to advanced APIs and content modeling",
    sectionIds: [
      "sitecoreai-cms-fundamentals",
      "key-architecture-components",
      "sites-and-collections",
      "deployment-fundamentals",
      "experience-edge-apis",
      "templates-content-modeling-intro",
      "defining-data-templates",
      "template-inheritance",
      "standard-values",
      "insert-options",
      "content-versioning",
      "sitecore-workflows",
      "creating-workflows",
      "sitecore-webhooks",
    ],
    estimatedHours: 5.5,
    level: "beginner",
  },
];
