# Quick Start Guide 🚀

## Try It Now!

### 1. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 2. Explore the Sample Section

I've included a **complete sample section** called "XM Cloud Overview" with:

- ✅ Full flash exposure content
- ✅ 7 flashcards (easy/medium/hard)
- ✅ 8 scenario-based quiz questions

**Try all 4 phases:**

1. **Go to Sections** → Click "XM Cloud Overview"
2. **Phase A**: Click "Start Phase" for Flash Exposure
   - Timer starts automatically (20 min)
   - Just skim, don't try to memorize
   - Mark complete when done
3. **Phase B**: Click "Start Phase" for Flashcards
   - Click cards to flip
   - Review multiple times
4. **Phase C**: Teach-Back (manual)
   - Try explaining the concepts in your own words
5. **Phase D**: Click "Start Phase" for Quiz
   - Scenario-based questions
   - Immediate feedback

### 3. Check Your Progress

- Click **Progress** in the nav bar
- See completion percentage
- Track what you've studied

## Adding Your Content

### Method 1: Edit Existing Placeholders

1. Open `lib/data.ts`
2. Find the placeholder sections (Content Modeling, Pages & Components)
3. Replace with your Sitecore XM Cloud content

### Method 2: Add New Sections

1. Open `lib/data.ts`
2. Copy the "XM Cloud Overview" section as a template
3. Modify the content, flashcards, and quiz questions
4. Add to the `sections` array

### Example:

```typescript
{
  id: 'my-new-section',
  title: 'My Topic',
  description: 'What this covers',
  estimatedTime: 15,
  icon: '🎯',
  content: `# Your content here...`,
  flashcards: [
    {
      id: 'card-1',
      question: 'Question?',
      answer: 'Answer',
      difficulty: 'medium'
    }
  ],
  quizQuestions: [
    {
      id: 'quiz-1',
      question: 'Question?',
      options: ['A', 'B', 'C', 'D'],
      correctAnswer: 0,
      explanation: 'Why it\'s correct',
      scenario: 'Real situation (optional)'
    }
  ]
}
```

## Content Tips for ADHD Learning

### ✅ DO:

- **Short paragraphs** (2-3 lines max)
- **Clear headings** (use ##, ###)
- **Bullet points** (easier to scan)
- **Bold key terms**
- **Visual breaks** with headers
- **One concept per flashcard**
- **Real scenarios in quizzes**

### ❌ DON'T:

- Long walls of text
- Complex sentences
- Too many flashcards per section (aim for 5-10)
- Definition-only quiz questions (use scenarios!)

## Recommended Section Topics

Based on Sitecore XM Cloud certification:

1. ✅ **XM Cloud Overview** (done - sample included!)
2. **Content Modeling** - Templates, fields, inheritance
3. **Pages & Components** - Visual editing, component library
4. **XM Cloud Deploy** - CI/CD, GitHub, deployment
5. **Sitecore Edge** - CDN, caching, performance
6. **Experience Edge** - GraphQL, querying content
7. **JSS & Headless** - Next.js integration
8. **Content Hub** - DAM, media management
9. **Workflows** - Publishing, approval
10. **Security & Roles** - Permissions, users

## Where to Get Content

### Official Sitecore Resources:

- Sitecore Learning (learning.sitecore.com)
- XM Cloud documentation
- Sitecore certification guides
- Community forums

### How to Convert:

1. Copy documentation text
2. Break into short sections with headers
3. Extract 5-10 key questions → flashcards
4. Create 8-12 scenario questions → quiz
5. Add to `lib/data.ts`

## Need Help?

See `CONTENT_GUIDE.md` for:

- Detailed content structure
- Flashcard best practices
- Quiz question examples
- Complete code examples

## Pro Tips

### For Learning:

- ⏰ Use actual timer for Flash Exposure
- 🔁 Review flashcards 3+ times
- 🎮 Retake quizzes until 100%
- 📊 Check progress daily for motivation

### For Content Creation:

- Start with official Sitecore docs
- Ask ChatGPT to help generate flashcards
- Use real troubleshooting scenarios for quizzes
- Test your sections yourself first

## What's Next?

1. **Try the sample section** (XM Cloud Overview)
2. **Complete all 4 phases** to see how it works
3. **Add your first content** (pick an easy topic)
4. **Build your full curriculum** (10-15 sections)
5. **Master Sitecore XM Cloud!** 🎓

---

**Questions?** Check the README.md or CONTENT_GUIDE.md

**Ready to learn?** Run `npm run dev` and start with the XM Cloud Overview section!
