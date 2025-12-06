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
\`\`\`bash
npm run start:connected
\`\`\`

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
\`\`\`json
{
  "sc_apikey": "YOUR-API-TOKEN"
}
\`\`\`

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
\`\`\`graphql
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
\`\`\`

### Using Variables

**Declare variables:**
\`\`\`graphql
query GetItem($path: String!) {
  item(path: $path) {
    name
    id
  }
}
\`\`\`

**In Variables panel:**
\`\`\`json
{
  "path": "/sitecore/content/home"
}
\`\`\`

### Layout Query

**Get page layout:**
\`\`\`graphql
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
\`\`\`

### Site Query

**Get site info:**
\`\`\`graphql
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
\`\`\`

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
\`\`\`graphql
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
\`\`\`

**Update fields:**
\`\`\`graphql
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
\`\`\`

**Delete item:**
\`\`\`graphql
mutation {
  deleteItem(
    input: {
      path: "/sitecore/content/old-page"
    }
  ) {
    success
  }
}
\`\`\`

### Publishing Operations

**Publish item:**
\`\`\`graphql
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
\`\`\`

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
\`\`\`
Authorization: Bearer <token>
\`\`\`

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
\`\`\`json
{
  "executionMode": "OnEnd",
  "url": "https://your-build-system.com/webhook",
  "headers": {
    "Authorization": "Bearer token"
  }
}
\`\`\`

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
];

// Courses - collections of sections
export const courses: Course[] = [
  {
    id: "sitecoreai-cms-for-developers",
    title: "SitecoreAI CMS for Developers",
    description:
      "Complete guide to building with SitecoreAI XM Cloud - from fundamentals to advanced APIs",
    sectionIds: [
      "sitecoreai-cms-fundamentals",
      "key-architecture-components",
      "sites-and-collections",
      "deployment-fundamentals",
      "experience-edge-apis",
    ],
    estimatedHours: 2.5,
    level: "beginner",
  },
];
