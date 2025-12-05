// Initial data structure - sections will be populated by the user later
import { Section, LearningPhase } from "./types";

export const learningPhases: LearningPhase[] = [
  {
    id: "flash-exposure",
    name: "Phase A: Flash Exposure",
    description: "Skim for structure (15-20 min max) - no memorization needed",
    icon: "⚡",
  },
  {
    id: "flashcards",
    name: "Phase B: Active Recall",
    description: "Review flashcards for quick retention",
    icon: "🎯",
  },
  {
    id: "teach-back",
    name: "Phase C: Teach-Back",
    description: "Explain concepts in your own words",
    icon: "💬",
  },
  {
    id: "quiz",
    name: "Phase D: Quiz Mode",
    description: "Test with scenario-based questions",
    icon: "🎮",
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
    icon: "🎯",

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
    icon: "🏗️",

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
];
