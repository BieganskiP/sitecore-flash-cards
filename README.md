# SitecoreAI Learning - ADHD-Friendly Learning App 🚀

A comprehensive learning application for mastering Sitecore XM Cloud, built specifically for ADHD learners using the **Tiered Learning Loop** methodology.

## ✨ Features

### 🎯 4-Phase Learning System

1. **Phase A: Flash Exposure** (15-20 min)

   - Skim content for structure
   - Built-in timer to prevent overload
   - No memorization required

2. **Phase B: Active Recall Flashcards**

   - Interactive flip cards
   - Difficulty levels (easy/medium/hard)
   - Track reviewed cards

3. **Phase C: Teach-Back**

   - Guided prompts to explain concepts
   - Reinforces understanding

4. **Phase D: Scenario-Based Quiz**
   - Real-world scenarios
   - Immediate feedback
   - Detailed explanations

### 📊 Progress Tracking

- Section completion tracking
- Quiz scores
- Phase completion status
- Local storage (no login required)

### 🎨 ADHD-Friendly Design

- Clear visual hierarchy
- Short, focused sessions
- Immediate feedback
- Progress visualization
- Dark mode support

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start learning!

## 📝 Adding Content

### Quick Start

1. Open `lib/data.ts`
2. Find the `sections` array
3. Add your Sitecore XM Cloud content following the structure

### Example Section

```typescript
{
  id: 'my-section',
  title: 'My Section Title',
  description: 'Brief description',
  content: `# Content here...`,
  flashcards: [
    {
      id: 'card-1',
      question: 'Your question?',
      answer: 'Your answer',
      difficulty: 'medium'
    }
  ],
  quizQuestions: [
    {
      id: 'quiz-1',
      question: 'Your question?',
      options: ['A', 'B', 'C', 'D'],
      correctAnswer: 0,
      explanation: 'Why it\'s correct',
      scenario: 'Real-world scenario (optional)'
    }
  ],
  estimatedTime: 15,
  icon: '📖'
}
```

### Detailed Guide

See **[CONTENT_GUIDE.md](CONTENT_GUIDE.md)** for:

- Complete content structure
- Flashcard best practices
- Quiz question examples
- ADHD-friendly content tips
- Recommended section topics

## 🎯 How to Use

### For Learners

1. **Start with any section** that interests you
2. **Complete all 4 phases** in order
3. **Take breaks** between phases if needed
4. **Repeat flashcards** multiple times
5. **Track your progress** on the Progress page

### ADHD Tips

- ⏰ Set a timer for Flash Exposure (15-20 min max)
- 🔁 Review flashcards in short bursts
- ✅ Celebrate completing each phase
- 📊 Check progress page for motivation
- 🎮 Treat quiz mode as a game

## 🛠️ Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Local Storage** - Progress tracking

## 📂 Project Structure

```
├── app/
│   ├── page.tsx              # Home page
│   ├── sections/
│   │   ├── page.tsx         # Sections list
│   │   └── [id]/page.tsx    # Section detail with phases
│   └── progress/page.tsx    # Progress tracking
├── components/
│   ├── Navigation.tsx       # Main nav bar
│   ├── SectionCard.tsx      # Section preview cards
│   ├── FlashcardView.tsx    # Flashcard interface
│   └── QuizView.tsx         # Quiz interface
├── lib/
│   ├── types.ts             # TypeScript types
│   ├── data.ts              # Content data (edit here!)
│   └── storage.ts           # Local storage utilities
└── CONTENT_GUIDE.md         # How to add content
```

## 🎓 Learning Methodology

This app implements the **Tiered Learning Loop**, specifically designed for ADHD learners:

- **No overwhelm**: Short, focused sessions
- **Active engagement**: Flashcards over passive reading
- **Immediate rewards**: Instant feedback and progress
- **Structured approach**: Clear phases to follow
- **Visual clarity**: Clean design with clear hierarchy

## 🤝 Contributing

To add Sitecore XM Cloud content:

1. Review the `CONTENT_GUIDE.md`
2. Edit `lib/data.ts`
3. Add sections with content, flashcards, and quizzes
4. Test locally
5. Share your sections!

## 📝 License

This is a personal learning project for Sitecore XM Cloud certification preparation.

## 🙏 Acknowledgments

Built for ADHD learners who want to master Sitecore XM Cloud without the cognitive overload of traditional learning methods.
