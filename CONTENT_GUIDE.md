# Content Guide - Adding Learning Material

Complete guide for adding Sitecore XM Cloud learning content to the app.

## 📁 Where Content Lives

**File:** `lib/data.ts`

**Two main exports:**
1. `sections` - Array of learning modules
2. `courses` - Array of course collections

## 🏗️ Content Structure

### Section Type Definition

```typescript
interface Section {
  id: string;                    // Unique identifier (URL-friendly)
  title: string;                 // Display name
  description: string;           // Brief description (shown on cards)
  estimatedTime: number;         // Minutes for flash exposure
  content: string;               // Markdown content for Phase A
  flashcards: Flashcard[];       // Phase B cards
  quizQuestions: QuizQuestion[]; // Phase D questions
}
```

### Course Type Definition

```typescript
interface Course {
  id: string;           // Unique identifier
  title: string;        // Course name
  description: string;  // What the course covers
  sectionIds: string[]; // Array of section IDs in order
  estimatedHours: number; // Total course time
  level: 'beginner' | 'intermediate' | 'advanced';
}
```

## 📝 Adding a Section

### 1. Complete Section Template

```typescript
{
  id: "section-id",
  title: "Section Title",
  description: "Brief description for the section card",
  estimatedTime: 18, // minutes
  
  content: `# Main Title

## What is This Topic?
Brief introduction explaining the concept.

**Key point:** Bold important terms

### Core Concepts
- Bullet point 1
- Bullet point 2
- Bullet point 3

## How It Works
1. Numbered steps
2. For processes
3. That have order

### Important Details
More content organized with clear headings...

## Key Takeaways
- Summary point 1
- Summary point 2
- Summary point 3`,

  flashcards: [
    {
      id: "card-1",
      question: "What is [concept]?",
      answer: "Brief 1-2 sentence answer explaining the concept clearly.",
      difficulty: "easy"
    },
    {
      id: "card-2",
      question: "How does [feature] work?",
      answer: "Concise explanation of the mechanism or process.",
      difficulty: "medium"
    },
    {
      id: "card-3",
      question: "What's the difference between X and Y?",
      answer: "Clear comparison highlighting key distinctions.",
      difficulty: "hard"
    }
  ],

  quizQuestions: [
    {
      id: "quiz-1",
      question: "What should you do first when [situation]?",
      options: [
        "Incorrect but plausible option",
        "Correct answer",
        "Another plausible wrong option",
        "Common misconception"
      ],
      correctAnswer: 1,
      explanation: "Detailed explanation of why this is correct and why others are wrong.",
      scenario: "A content editor reports that changes aren't appearing on the live site after 10 minutes."
    }
  ]
}
```

### 2. Flash Exposure Content (Phase A)

The `content` field supports markdown with these features:

**Headings:**
```markdown
# H1 - Main title
## H2 - Major sections
### H3 - Subsections
```

**Emphasis:**
```markdown
**Bold text** for key terms
*Italic text* for subtle emphasis
```

**Lists:**
```markdown
- Unordered list item
- Another item
  - Nested item

1. Ordered list
2. Second item
3. Third item
```

**Code blocks:**
```markdown
\`inline code\` for commands or technical terms

\`\`\`javascript
// Code block with syntax highlighting
const example = "code";
\`\`\`
```

### 3. ADHD-Friendly Content Guidelines

✅ **Do:**
- Use frequent headings (every 3-4 paragraphs)
- Keep paragraphs to 2-3 lines maximum
- Use bullet points extensively
- Bold key terms and concepts
- Add visual breaks with headers
- Start with "What is X?" sections
- End with "Key Takeaways"

❌ **Don't:**
- Write long, dense paragraphs
- Bury important info in middle of text
- Use complex nested structures
- Skip visual organization

### 4. Flashcard Best Practices

**Structure:**
```typescript
{
  id: "unique-id",
  question: "Clear, specific question?",
  answer: "Concise 1-2 sentence answer",
  difficulty: "easy" | "medium" | "hard"
}
```

**Question Types:**

**Definition (Easy):**
```typescript
{
  id: "def-1",
  question: "What is Experience Edge?",
  answer: "A GraphQL API-based content delivery service with global CDN distribution.",
  difficulty: "easy"
}
```

**Process (Medium):**
```typescript
{
  id: "proc-1",
  question: "What happens when you publish content?",
  answer: "Content flows from CM instance to Experience Edge, gets cached on CDN, then rendering host fetches it via GraphQL.",
  difficulty: "medium"
}
```

**Comparison (Hard):**
```typescript
{
  id: "comp-1",
  question: "What's the difference between Editing Host and Rendering Host?",
  answer: "Editing Host displays the app within CMS for visual editing. Rendering Host is the live website users see, hosted externally.",
  difficulty: "hard"
}
```

**Guidelines:**
- Aim for 8-12 flashcards per section
- Mix difficulty: 40% easy, 40% medium, 20% hard
- Keep answers under 50 words
- Test one concept per card
- Use active voice

### 5. Quiz Question Best Practices

**Structure:**
```typescript
{
  id: "quiz-id",
  question: "Scenario-based question?",
  options: ["A", "B", "C", "D"],
  correctAnswer: 1, // 0-based index
  explanation: "Why correct and teaching moment",
  scenario: "Optional real-world context"
}
```

**Example - Scenario-Based:**
```typescript
{
  id: "quiz-deploy-1",
  question: "Your deployment failed during the Build phase. Where should you look first?",
  options: [
    "Cloud Portal settings",
    "Deployment logs in Deploy app",
    "GitHub repository",
    "Vercel dashboard"
  ],
  correctAnswer: 1,
  explanation: "Deployment logs show detailed error messages for each phase. Look for 'Error' entries in the Build phase - they'll show compiler errors, npm failures, or configuration issues.",
  scenario: "The deployment failed and you need to diagnose the problem quickly."
}
```

**Example - Conceptual:**
```typescript
{
  id: "quiz-api-1",
  question: "Which API should you use to access published content for a production website?",
  options: [
    "Preview API (shows drafts)",
    "Delivery API (published content from Edge)",
    "Authoring API (content management)",
    "Admin API (configuration)"
  ],
  correctAnswer: 1,
  explanation: "Delivery API is designed for production use, accessing only published content from Experience Edge with high performance and global CDN distribution. Preview API is for development/testing and shows all content including drafts."
}
```

**Guidelines:**
- 10-12 questions per section minimum
- Use real-world scenarios when possible
- Make all options plausible
- Explain why wrong answers are wrong
- Teach in the explanation
- Vary question types (troubleshooting, best practices, concepts)

## 🎯 Creating Courses

### Basic Course

```typescript
{
  id: "fundamentals-course",
  title: "XM Cloud Fundamentals",
  description: "Essential concepts and architecture",
  sectionIds: [
    "cms-fundamentals",
    "architecture-components",
    "deployment-basics"
  ],
  estimatedHours: 2,
  level: "beginner"
}
```

### Course Organization Tips

1. **Logical Flow** - Order sections from basic to advanced
2. **Estimated Time** - Sum section times and add 20% for practice
3. **Level Setting** - Beginner, Intermediate, or Advanced
4. **Prerequisites** - Note required knowledge in description

## 📚 Content Examples

### Example 1: Technical Feature

```typescript
{
  id: "experience-edge",
  title: "Experience Edge & GraphQL",
  description: "Content delivery API and global CDN",
  estimatedTime: 20,
  
  content: `# Experience Edge & GraphQL

## What is Experience Edge?
Experience Edge is Sitecore's **globally distributed content delivery platform** powered by GraphQL.

### Key Features
- **CDN Distribution** - Content cached globally
- **GraphQL API** - Flexible query language
- **High Performance** - Sub-second response times
- **Automatic Scaling** - Handles traffic spikes

## How It Works
1. Content published from CM instance
2. Edge receives and caches content
3. Front-end queries via GraphQL
4. CDN serves cached content globally

## GraphQL Benefits
- Request exactly the fields you need
- Single endpoint for all content
- Strongly typed schema
- Efficient data fetching

### API Endpoints

**Preview API:**
- Access all content including drafts
- Used for development/testing
- Connects directly to CM

**Delivery API:**
- Published content only
- Production use
- Served from Edge CDN

## Key Takeaways
- Edge replaces traditional CD servers
- GraphQL provides flexible content access
- Two APIs for different use cases
- Global CDN ensures fast delivery`,

  flashcards: [
    {
      id: "edge-1",
      question: "What is Experience Edge?",
      answer: "A globally distributed GraphQL API-based content delivery platform with CDN caching.",
      difficulty: "easy"
    },
    {
      id: "edge-2",
      question: "What's the difference between Preview API and Delivery API?",
      answer: "Preview API shows all content including drafts for development. Delivery API shows only published content from Edge for production.",
      difficulty: "medium"
    },
    {
      id: "edge-3",
      question: "Why use GraphQL over REST?",
      answer: "GraphQL lets you request exactly the fields you need in a single query, reducing over-fetching and round trips.",
      difficulty: "medium"
    }
  ],

  quizQuestions: [
    {
      id: "edge-quiz-1",
      question: "Your production website needs to fetch published content. Which API should you use?",
      options: [
        "Preview API",
        "Delivery API from Experience Edge",
        "Authoring and Management API",
        "Admin API"
      ],
      correctAnswer: 1,
      explanation: "Delivery API is designed for production, accessing published content from Edge with CDN caching and global distribution. Preview API is for development only.",
      scenario: "Building a Next.js app that will serve millions of users."
    }
  ]
}
```

### Example 2: Process/Workflow

```typescript
{
  id: "deployment-process",
  title: "Deployment Process",
  description: "Understanding the 3-stage deployment pipeline",
  estimatedTime: 15,
  
  content: `# Deployment Process

## Three Deployment Stages
Every deployment follows the same 3-stage process.

### Stage 1: Provisioning
**What happens:** Infrastructure setup

- Allocate resources (servers, databases)
- Configure environment settings
- Set up services (Edge, auth)

**Think:** "Setting up the foundation"

### Stage 2: Build
**What happens:** Code compilation

- Compile Next.js front-end
- Process serialization files
- Install dependencies
- Package assets

**Think:** "Preparing the package"

### Stage 3: Deployment
**What happens:** Go live

- Deploy built artifacts
- Apply environment variables
- Connect services
- Warm up CM instance
- Rebuild indexes

**Think:** "Flipping the switch"

## Monitoring Deployments

**Check deployment logs:**
1. Deploy app → Select project
2. Select environment
3. Actions (...) → View logs
4. Review each phase

## Common Issues

**Build failures:**
- Syntax errors in code
- Missing dependencies
- Configuration problems

**Deployment errors:**
- Invalid environment variables
- Service connection issues
- Permission problems

## Key Takeaways
- Three stages: Provision → Build → Deploy
- Logs show progress and errors
- Each stage has specific purposes
- Monitor logs for troubleshooting`,

  flashcards: [
    {
      id: "deploy-1",
      question: "What are the three deployment stages?",
      answer: "Provisioning (infrastructure setup), Build (code compilation), and Deployment (going live).",
      difficulty: "easy"
    },
    {
      id: "deploy-2",
      question: "Where do you find deployment logs?",
      answer: "Deploy app → Project → Environment → Actions (...) → View deployment logs.",
      difficulty: "easy"
    },
    {
      id: "deploy-3",
      question: "What happens during the Build stage?",
      answer: "Code compilation, dependency installation, content serialization, and asset packaging.",
      difficulty: "medium"
    }
  ],

  quizQuestions: [
    {
      id: "deploy-quiz-1",
      question: "Your deployment failed during Build. What's the most likely cause?",
      options: [
        "Infrastructure provisioning issue",
        "Code compilation error or missing dependency",
        "Network connectivity problem",
        "Environment variable misconfiguration"
      ],
      correctAnswer: 1,
      explanation: "Build phase failures are typically caused by code issues: syntax errors, missing npm packages, or compilation problems. Check the build logs for error details.",
      scenario: "Deployment worked last week but fails now after code changes."
    }
  ]
}
```

## 🔍 Testing Your Content

### Checklist

- [ ] Section ID is unique
- [ ] Title is clear and descriptive
- [ ] Estimated time is realistic (15-25 min typical)
- [ ] Content uses headings and bullets
- [ ] Key terms are bolded
- [ ] Flashcards are 8-12 per section
- [ ] Difficulty mix is balanced
- [ ] Quiz has 10+ questions
- [ ] Quiz explanations teach concepts
- [ ] All IDs are unique
- [ ] TypeScript has no errors

### Test Locally

```bash
# Start dev server
npm run dev

# Check:
# 1. Section appears in list
# 2. Flash exposure content displays correctly
# 3. Flashcards flip properly
# 4. Quiz questions work
# 5. Progress saves
```

## 💡 Tips for Great Content

### Writing Flash Exposure Content

1. **Start with "What is X?"** - Define the topic clearly
2. **Use the inverted pyramid** - Most important info first
3. **Break into chunks** - Headers every 3-4 paragraphs
4. **Bold key terms** - Makes scanning easier
5. **End with takeaways** - Summarize main points

### Writing Flashcards

1. **One concept per card** - Don't combine topics
2. **Use active voice** - "What does X do?" not "What is done by X?"
3. **Avoid "list" answers** - Keep answers focused
4. **Test understanding** - Not just memorization
5. **Progress in difficulty** - Easy → Medium → Hard

### Writing Quizzes

1. **Use scenarios** - "A content editor reports..."
2. **Make distractors plausible** - Not obviously wrong
3. **Teach in explanations** - Don't just say "wrong"
4. **Cover edge cases** - Not just happy path
5. **Test application** - Not just recall

## 🚀 Publishing Your Content

Once you've added content to `lib/data.ts`:

1. **Test locally** with `npm run dev`
2. **Verify all functionality** works
3. **Check for TypeScript errors**
4. **Build** with `npm run build`
5. **Deploy** to your hosting platform

## 📞 Need Help?

If you're stuck:
- Check existing sections in `lib/data.ts` for examples
- Review TypeScript types in `lib/types.ts`
- Test in small chunks (one section at a time)
- Use console for error messages

---

Happy content creating! 📚✨
