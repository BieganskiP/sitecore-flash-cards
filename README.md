# SitecoreAI Learning - ADHD-Friendly Learning App 🚀

A comprehensive learning application for mastering Sitecore XM Cloud, built specifically for ADHD learners using the **Tiered Learning Loop** methodology.

## ✨ Features

### 🎯 4-Phase Learning System

1. **Phase A: Flash Exposure** (15-20 min)

   - Skim content for structure with built-in timer
   - No memorization required - just get familiar
   - Prevents cognitive overload

2. **Phase B: Active Recall Flashcards**

   - Interactive flip cards for active learning
   - Difficulty levels (easy/medium/hard)
   - Track reviewed cards

3. **Phase C: Teach-Back**

   - Guided prompts to explain concepts
   - Reinforces understanding through teaching

4. **Phase D: Scenario-Based Quiz**
   - Real-world scenarios from actual Sitecore work
   - Immediate feedback with explanations
   - Score tracking and completion status

### 📊 Progress Tracking

- Section completion tracking
- Quiz scores and performance
- Phase completion status
- Local storage (no login required)

### 🎨 ADHD-Friendly Design

- Clear visual hierarchy
- Short, focused sessions
- Immediate feedback
- Progress visualization
- Dark mode support
- Mobile responsive

### 🌗 Theme Support

- Light mode
- Dark mode
- System theme detection
- Persistent preference

### 📚 Multi-Course Support

- Organize sections into courses
- Course-level progress tracking
- Flexible learning paths

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd sitecore-flash-cards

# Install dependencies
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start learning!

### Build for Production

```bash
npm run build
npm start
```

## 📝 Adding Content

### Quick Start

All content lives in `lib/data.ts`. You'll work with two main arrays:

1. **`sections`** - Individual learning modules
2. **`courses`** - Collections of related sections

### Adding a New Section

```typescript
// In lib/data.ts, add to the sections array:
{
  id: "my-section-id",
  title: "My Section Title",
  description: "Brief description for the card",
  estimatedTime: 18, // minutes for flash exposure

  content: `# Section Title

## Key Concepts
- Point 1
- Point 2

## Details
More content here...`,

  flashcards: [
    {
      id: "card-1",
      question: "What is X?",
      answer: "X is a thing that does Y",
      difficulty: "easy"
    }
  ],

  quizQuestions: [
    {
      id: "quiz-1",
      question: "In this scenario, what should you do?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: 1, // index of correct option (0-based)
      explanation: "Why option B is correct...",
      scenario: "A content editor reports that..." // optional
    }
  ]
}
```

### Creating a Course

```typescript
// In lib/data.ts, add to the courses array:
{
  id: "my-course-id",
  title: "My Course Name",
  description: "What this course covers",
  sectionIds: [
    "section-1-id",
    "section-2-id",
    "section-3-id"
  ],
  estimatedHours: 3,
  level: "beginner" // or "intermediate" or "advanced"
}
```

### Detailed Content Guide

See **[CONTENT_GUIDE.md](CONTENT_GUIDE.md)** for:

- Complete content structure and TypeScript types
- Flashcard best practices
- Quiz question writing tips
- ADHD-friendly content guidelines
- Markdown formatting options
- Example sections

## 🎯 How to Use

### For Learners

1. **Browse courses** on the Sections page
2. **Select a section** that interests you
3. **Complete all 4 phases** in order for best retention
4. **Take breaks** between phases if needed
5. **Repeat flashcards** multiple times for mastery
6. **Track progress** on the Progress page

### ADHD Tips

- ⏰ **Respect the timer** - 15-20 min max for Flash Exposure
- 🔁 **Review flashcards** in short bursts (5-10 cards at a time)
- ✅ **Celebrate wins** - Each completed phase is an achievement
- 📊 **Use Progress page** for motivation and dopamine hits
- 🎮 **Gamify quizzes** - Try to beat your previous score
- 🚫 **Don't skip phases** - The order matters for retention
- 💪 **Teach-back is powerful** - Explaining cements understanding

## 🛠️ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **React Markdown** - Markdown rendering
- **Lucide React** - Icon system
- **Local Storage** - Client-side progress tracking

## 📂 Project Structure

```
sitecore-flash-cards/
├── app/
│   ├── page.tsx                    # Dashboard/home page
│   ├── layout.tsx                  # Root layout with navigation
│   ├── sections/
│   │   ├── page.tsx               # Course/sections list
│   │   └── [id]/page.tsx          # Section detail with all phases
│   ├── progress/page.tsx          # Progress tracking dashboard
│   └── settings/page.tsx          # Theme and preferences
├── components/
│   ├── Navigation.tsx             # Sidebar navigation
│   ├── SectionCard.tsx            # Section preview cards
│   ├── FlashcardView.tsx          # Flashcard flip interface
│   ├── QuizView.tsx               # Quiz with scoring
│   ├── ScrollToTop.tsx            # Scroll button
│   ├── ThemeProvider.tsx          # Theme management
│   └── TipsWrapper.tsx            # Conditional tips display
├── lib/
│   ├── types.ts                   # TypeScript type definitions
│   ├── data.ts                    # ⭐ CONTENT GOES HERE
│   ├── storage.ts                 # LocalStorage utilities
│   ├── contexts/
│   │   └── SettingsContext.tsx    # Settings state management
│   └── hooks/
│       └── useSettings.ts         # Settings hook
├── CONTENT_GUIDE.md               # How to add content
└── README.md                       # This file
```

## 🎓 Learning Methodology

This app implements the **Tiered Learning Loop (TLL)**, specifically optimized for ADHD learners:

### Why TLL Works for ADHD

1. **Short Sessions** - 15-20 minute bursts prevent overwhelm and maintain focus
2. **Active Engagement** - Flashcards and quizzes beat passive reading every time
3. **Immediate Rewards** - Instant feedback provides dopamine hits
4. **Structured Approach** - Clear phases eliminate decision fatigue
5. **Visual Clarity** - Clean design with obvious next steps
6. **Progress Tracking** - Visual progress provides motivation
7. **Scenario-Based** - Real-world examples make information stick

### The Science

- **Flash Exposure** primes your brain's pattern recognition
- **Active Recall** (flashcards) strengthens memory pathways
- **Teach-Back** forces deep processing and identifies gaps
- **Scenario Quizzes** build practical application skills

## ⚙️ Configuration

### Settings

Access via the Settings page or gear icon:

- **Theme** - Light, Dark, or System
- **Show Tips** - Toggle helpful learning tips throughout the app

### Customization

All styling uses Tailwind CSS classes. Key files:

- `app/globals.css` - Global styles and theme variables
- Component files - Tailwind classes inline

## 🤝 Contributing Content

To add Sitecore XM Cloud content:

1. Review **[CONTENT_GUIDE.md](CONTENT_GUIDE.md)** for structure and best practices
2. Edit **`lib/data.ts`**
3. Add sections with content, flashcards, and quizzes
4. Organize sections into courses
5. Test locally with `npm run dev`
6. Share your sections with the community!

### Content Quality Guidelines

✅ **Do:**

- Keep Flash Exposure content scannable (headings, bullets)
- Write clear, specific flashcard questions
- Base quiz questions on real scenarios
- Provide detailed explanations
- Aim for 8-12 flashcards per section
- Include 10-12 quiz questions per section

❌ **Don't:**

- Write long paragraphs in Flash Exposure
- Make flashcard answers longer than 2 sentences
- Use ambiguous quiz questions
- Skip explanations in quiz answers

## 🐛 Troubleshooting

### Content not showing?

- Check `lib/data.ts` for syntax errors
- Ensure section IDs are unique
- Verify course `sectionIds` match actual section IDs

### Progress not saving?

- Check browser localStorage is enabled
- Try clearing site data and restarting

### Build errors?

- Run `npm install` to ensure dependencies are up to date
- Check for TypeScript errors in `lib/data.ts`

## 📝 License

This is a personal learning project for Sitecore XM Cloud certification preparation.

## 🙏 Acknowledgments

Built for ADHD learners who want to master Sitecore XM Cloud without the cognitive overload of traditional learning methods.

### Special Thanks

- The ADHD community for insights on learning challenges
- Sitecore for their comprehensive XM Cloud documentation
- The Next.js team for an amazing framework

---

**Happy Learning! 🎉** Remember: Small, consistent progress beats overwhelming study sessions every time.
