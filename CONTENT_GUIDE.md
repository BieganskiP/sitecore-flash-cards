# Content Guide - Adding Sitecore XM Cloud Materials

This guide explains how to add your Sitecore XM Cloud learning content to the app.

## 📁 File Location

All content is stored in `lib/data.ts` in the `sections` array.

## 📝 Section Structure

Each section requires:

```typescript
{
  id: 'unique-section-id',           // URL-friendly identifier
  title: 'Section Title',            // Display name
  description: 'Brief description',  // Shown on section cards
  content: `Full content here`,      // Phase A: Flash Exposure content
  flashcards: [],                    // Phase B: Flashcards
  quizQuestions: [],                 // Phase D: Quiz questions
  estimatedTime: 20,                 // Minutes for flash exposure
  icon: '📖'                         // Emoji icon
}
```

## ✨ Adding Flash Exposure Content (Phase A)

The `content` field supports markdown-like formatting:

```typescript
content: `# Main Title

## Subsection
Key concepts here...

### Important Points
- Point 1
- Point 2
- Point 3

## Another Section
More content...

**Bold text** for emphasis
*Italic text* for subtle emphasis`
```

### ADHD-Friendly Content Tips:
- Use clear headings (##, ###)
- Keep paragraphs short (2-3 lines max)
- Use bullet points extensively
- Bold key terms
- Add visual breaks with headers

## 🎯 Adding Flashcards (Phase B)

Flashcards follow this structure:

```typescript
flashcards: [
  {
    id: 'card-1',
    question: 'What does Sitecore Edge do?',
    answer: 'Edge is a CDN that caches and delivers your published content globally with low latency.',
    difficulty: 'medium'  // 'easy' | 'medium' | 'hard'
  },
  {
    id: 'card-2',
    question: 'What is the difference between Pages and Components?',
    answer: 'Pages is the editing interface where content editors work. Components are reusable UI building blocks that make up pages.',
    difficulty: 'easy'
  }
]
```

### Flashcard Best Practices:
- Keep questions clear and specific
- Answers should be 1-2 sentences max
- Aim for 5-10 cards per section
- Mix difficulty levels
- Focus on "What", "Why", and "When" questions

## 🎮 Adding Quiz Questions (Phase D)

Quiz questions support scenarios:

```typescript
quizQuestions: [
  {
    id: 'quiz-1',
    question: 'What should you do first when Pages fails to sync with Edge?',
    options: [
      'Contact Sitecore support immediately',
      'Check the deployment status in XM Cloud Deploy',
      'Clear your browser cache',
      'Restart the Pages application'
    ],
    correctAnswer: 1,  // Index of correct option (0-based)
    explanation: 'Always check XM Cloud Deploy first to verify the deployment completed successfully. The issue is often with the build/deploy process.',
    scenario: 'A content editor reports that changes made in Pages are not appearing on the live website after 10 minutes.' // Optional
  },
  {
    id: 'quiz-2',
    question: 'Which field type would you use for a multi-line text editor with rich text formatting?',
    options: [
      'Single-Line Text',
      'Multi-Line Text',
      'Rich Text',
      'General Link'
    ],
    correctAnswer: 2,
    explanation: 'Rich Text fields provide a WYSIWYG editor with formatting options like bold, italic, lists, and links.'
  }
]
```

### Quiz Best Practices:
- Use scenario-based questions (real-world situations)
- Provide 4 options per question
- Include detailed explanations
- Make wrong answers plausible but clearly incorrect
- Aim for 8-12 questions per section

## 📋 Complete Example

Here's a complete section example:

```typescript
{
  id: 'sitecore-edge',
  title: 'Sitecore Edge',
  description: 'Global content delivery and caching with CDN',
  estimatedTime: 15,
  icon: '🌐',
  content: `# Sitecore Edge

## What is Edge?
Edge is Sitecore's global CDN (Content Delivery Network) that caches and delivers your published content.

## Key Features
- **Global CDN**: Content served from locations worldwide
- **Automatic Caching**: Published content cached automatically
- **Low Latency**: Sub-second response times
- **High Availability**: 99.9% uptime SLA

## How It Works
1. Content published from XM Cloud
2. Edge receives and caches content
3. Users request pages
4. Edge serves cached content instantly

## Important Notes
- Cache updates within minutes of publishing
- Purge cache manually if needed
- Edge connector required for integration`,

  flashcards: [
    {
      id: 'edge-1',
      question: 'What is Sitecore Edge?',
      answer: 'A global CDN that caches and delivers published Sitecore content with low latency.',
      difficulty: 'easy'
    },
    {
      id: 'edge-2',
      question: 'How long does it take for Edge to update after publishing?',
      answer: 'Typically within a few minutes, but you can manually purge the cache if needed.',
      difficulty: 'medium'
    },
    {
      id: 'edge-3',
      question: 'What is the uptime SLA for Sitecore Edge?',
      answer: '99.9% uptime SLA',
      difficulty: 'hard'
    }
  ],

  quizQuestions: [
    {
      id: 'edge-quiz-1',
      question: 'Your content was just published but isn\'t showing on the website. What should you check first?',
      options: [
        'Edge CDN cache status',
        'Publishing workflow status',
        'Browser cache',
        'Edge connector configuration'
      ],
      correctAnswer: 1,
      explanation: 'First verify the content was actually published successfully. Then check Edge cache if publishing completed.',
      scenario: 'A content editor published an important update 5 minutes ago but visitors are still seeing old content.'
    }
  ]
}
```

## 🚀 Adding Your Content

1. Open `lib/data.ts`
2. Find the `sections` array
3. Replace placeholder sections or add new ones
4. Follow the structure above
5. Save the file
6. The app will automatically use your new content!

## 💡 Tips for ADHD-Friendly Content

### Flash Exposure (Phase A):
- Heavy use of headings and subheadings
- Short paragraphs (max 3 lines)
- Bullet points over long sentences
- Bold key terms
- Clear visual hierarchy

### Flashcards (Phase B):
- One concept per card
- Direct, simple questions
- Concise answers (1-2 sentences)
- Mix easy/medium/hard

### Quiz (Phase D):
- Real-world scenarios
- Clear, unambiguous questions
- Detailed explanations
- Teach in the explanation

## 🎯 Recommended Section Topics

Based on Sitecore XM Cloud certification, consider these sections:

1. **Getting Started** - Overview, architecture, key concepts
2. **Content Modeling** - Templates, fields, inheritance
3. **Pages & Components** - Editing interface, component library
4. **XM Cloud Deploy** - CI/CD, GitHub integration, deployment
5. **Sitecore Edge** - CDN, caching, performance
6. **Content Hub** - DAM integration, media management
7. **Headless & JSS** - Next.js, React, API integration
8. **Experience Edge** - GraphQL, querying content
9. **Workflows** - Content approval, publishing
10. **Security & Roles** - User management, permissions

## 📊 Progress Tracking

The app automatically tracks:
- Flash Exposure completion
- Flashcard reviews
- Quiz scores
- Overall section completion

All data is stored in browser localStorage.

