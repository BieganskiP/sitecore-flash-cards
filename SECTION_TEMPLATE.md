# Section Template

Copy this template into `lib/data.ts` to create a new section.

## 📋 Template

```typescript
{
  id: 'section-url-slug',
  title: 'Section Display Title',
  description: 'One-line description shown on cards',
  estimatedTime: 15,  // minutes for flash exposure
  icon: '📖',  // emoji icon
  
  content: `# Section Title

## Main Topic 1

Brief intro paragraph (2-3 lines max).

### Subtopic
- Bullet point 1
- Bullet point 2
- Bullet point 3

### Another Subtopic
**Key term**: Definition or explanation.

## Main Topic 2

Content here...

## Key Takeaways
- Main point 1
- Main point 2
- Main point 3`,

  flashcards: [
    {
      id: 'section-card-1',
      question: 'Clear, specific question?',
      answer: 'Concise answer (1-2 sentences)',
      difficulty: 'easy'  // 'easy' | 'medium' | 'hard'
    },
    {
      id: 'section-card-2',
      question: 'Another question?',
      answer: 'Another answer',
      difficulty: 'medium'
    }
    // Add 5-10 total flashcards
  ],

  quizQuestions: [
    {
      id: 'section-quiz-1',
      question: 'Scenario-based question?',
      options: [
        'Option A',
        'Option B (correct)',
        'Option C',
        'Option D'
      ],
      correctAnswer: 1,  // index (0-based)
      explanation: 'Why B is correct and others are wrong',
      scenario: 'Real-world situation description (optional)'
    }
    // Add 8-12 total quiz questions
  ]
}
```

## 📝 Checklist

### Content Section (Phase A)
- [ ] Clear main title (# heading)
- [ ] 3-5 main topics (## headings)
- [ ] Subtopics as needed (### headings)
- [ ] Short paragraphs (2-3 lines)
- [ ] Bullet points for lists
- [ ] Bold key terms
- [ ] 15-20 min reading time

### Flashcards (Phase B)
- [ ] 5-10 flashcards total
- [ ] Mix of easy/medium/hard
- [ ] One concept per card
- [ ] Clear, specific questions
- [ ] Concise answers (1-2 sentences)
- [ ] Focus on "What", "Why", "When"
- [ ] Unique IDs

### Quiz Questions (Phase D)
- [ ] 8-12 questions total
- [ ] Scenario-based (not just definitions)
- [ ] 4 options per question
- [ ] Clear correct answer
- [ ] Detailed explanation
- [ ] Real-world scenarios
- [ ] Unique IDs

## 💡 Content Ideas by Topic

### Architecture/Overview Topics
- What is [component]?
- How does [process] work?
- When to use [feature]?
- Key differences between X and Y?

### Technical Topics
- How to configure [setting]?
- What happens when [action]?
- Troubleshooting [issue]
- Best practices for [task]

### Scenario Ideas for Quizzes
- "A content editor reports..."
- "Your deployment failed because..."
- "A client wants to..."
- "The website is showing..."
- "Your team needs to..."

## 🎯 ADHD-Friendly Guidelines

### Content Writing
✅ Use headings liberally
✅ 2-3 line paragraphs max
✅ Bullet points > long sentences
✅ Bold important terms
✅ Break up with visual structure

❌ Avoid walls of text
❌ Don't use complex sentences
❌ Don't explain everything at once

### Flashcard Writing
✅ One concept only
✅ Direct questions
✅ Short answers
✅ Mix difficulties

❌ Avoid multi-part questions
❌ Don't write long answers
❌ Don't make them too easy or too hard

### Quiz Writing
✅ Real scenarios
✅ Clear questions
✅ Explain why (in explanation)
✅ Make wrong answers plausible

❌ Avoid trick questions
❌ Don't use "all of the above"
❌ Don't make it obvious

## 🚀 Quick Start

1. **Copy the template** above
2. **Replace** placeholder text with your content
3. **Paste** into `lib/data.ts` sections array
4. **Test** by running `npm run dev`
5. **Iterate** based on how it feels

## 📚 Example Sections to Create

### Beginner Sections
- XM Cloud Overview ✅ (sample included)
- Content Modeling Basics
- Pages Essentials
- First Deployment

### Intermediate Sections  
- Advanced Templates
- Component Development
- GraphQL Queries
- Workflows & Publishing

### Advanced Sections
- Performance Optimization
- Custom Integrations
- Security Best Practices
- Troubleshooting Guide

---

**Remember:** The best content is content that teaches! Start simple and iterate.

