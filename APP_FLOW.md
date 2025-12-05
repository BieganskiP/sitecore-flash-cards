# 🗺️ App Flow & User Journey

## 📱 Navigation Structure

```
Home (/)
├── Learn about methodology
├── See 4 learning phases
└── [Start Learning] → Sections

Sections (/sections)
├── Browse all sections
├── See progress on each
└── [Click Section] → Section Detail

Section Detail (/sections/[id])
├── View section info
├── See all 4 phases
├── [Start Phase A] → Flash Exposure
├── [Start Phase B] → Flashcards
├── Teach-Back (manual)
└── [Start Phase D] → Quiz

Progress (/progress)
├── View overall stats
├── See per-section progress
└── [Click Section] → Section Detail
```

## 🎯 Learning Journey

### Step 1: Home Page

**What you see:**

- Welcome message
- Explanation of 4 phases
- Why it works for ADHD
- Pro tips
- "Start Learning" button

**Actions:**

- Click "Start Learning" → Goes to Sections

---

### Step 2: Sections List

**What you see:**

- Grid of section cards
- Each card shows:
  - Icon & title
  - Description
  - Estimated time
  - Progress bar (if started)
  - Flashcard/quiz count

**Actions:**

- Click any section card → Goes to Section Detail

---

### Step 3: Section Detail (Main Hub)

**What you see:**

- Section header with icon
- Description
- 4 phase cards with "Start Phase" buttons

**Actions:**

- **Phase A**: Click "Start Phase" → Flash Exposure mode
- **Phase B**: Click "Start Phase" → Flashcard mode
- **Phase C**: Read teach-back prompt (manual)
- **Phase D**: Click "Start Phase" → Quiz mode

---

### Step 4a: Flash Exposure Mode

**What you see:**

- 20-minute countdown timer
- Full content with formatting
- Back button
- "Mark as Complete" button

**Flow:**

1. Timer starts automatically
2. Skim content (don't memorize!)
3. Timer counts down
4. When done, click "Mark as Complete"
5. Returns to Section Detail

**Progress saved:** Flash Exposure completed ✓

---

### Step 4b: Flashcard Mode

**What you see:**

- Progress bar (X of Y cards)
- Large flashcard (click to flip)
- Question → Click → Answer + difficulty
- Previous/Next buttons

**Flow:**

1. Read question
2. Think of answer
3. Click card to flip
4. See answer + difficulty level
5. Click "Next" to continue
6. Last card: "Complete" button
7. Returns to Section Detail

**Progress saved:** Flashcards reviewed ✓

---

### Step 4c: Teach-Back (Manual)

**What you see:**

- Instructions to explain concepts
- Suggestions for practice

**Flow:**

1. Read the prompt
2. Try explaining to someone or writing it
3. No system tracking (manual phase)
4. When done, move to Quiz

**Progress saved:** None (manual phase)

---

### Step 4d: Quiz Mode

**What you see:**

- Progress bar (Question X of Y)
- Scenario box (if present)
- Question text
- 4 answer options
- Score counter

**Flow:**

1. Read scenario (if present)
2. Read question
3. Select an answer
4. Click "Submit Answer"
5. See if correct/incorrect
6. Read explanation
7. Click "Next Question"
8. Last question: Shows final score
9. Returns to Section Detail

**Progress saved:** Quiz score (%) ✓

---

### Step 5: Progress Page

**What you see:**

- Overall stats:
  - Overall progress %
  - Sections completed
  - Sections started
- Per-section progress bars
- Last studied dates
- Phase completion status

**Actions:**

- Click any section → Goes to Section Detail
- Click "Reset Progress" → Clears all data

---

## 🎮 Interactive Elements

### Flashcard Interaction

```
┌─────────────────────────┐
│   ❓ Question           │
│                         │
│  What is XM Cloud?      │
│                         │
│ [Click to reveal]       │
└─────────────────────────┘
        ⬇️ CLICK
┌─────────────────────────┐
│   💡 Answer             │
│                         │
│  A cloud-native SaaS    │
│  content management...  │
│                         │
│      [medium] 🟡        │
└─────────────────────────┘
```

### Quiz Interaction

```
1. Read scenario (yellow box)
2. Read question
3. Select answer (blue highlight)
4. Click "Submit"
5. See result:
   ✓ Correct → Green
   ✗ Wrong → Red
6. Read explanation
7. Click "Next"
```

### Timer Interaction

```
⏰ Flash Exposure Timer
   19:45 remaining
   ⬇️ counts down
⏰ Flash Exposure Timer
   00:00 remaining
   ✓ Time's up! (green box)
```

## 📊 Progress System

### What Gets Tracked

```javascript
{
  sectionId: "xm-cloud-overview",
  flashExposureCompleted: true,      // Phase A done
  flashcardsReviewed: 7,             // # of cards seen
  quizScore: 85,                     // % score
  completed: true,                   // Quiz passed (≥70%)
  lastStudied: Date                  // Timestamp
}
```

### Completion Calculation

```
Overall Progress = (Completed Sections / Total Sections) × 100%

Section Progress:
- Flash Exposure done = +33%
- Flashcards reviewed = +33%
- Quiz taken = +34%
Total = 100%
```

### Storage Location

- Browser localStorage
- Key: `sitecore-learning-progress`
- Persists across sessions
- Per-device only (not synced)

---

## 🎨 Visual Indicators

### Progress Bars

```
████████░░░░░░░░░░ 40%
Blue fill = completed
Gray background = remaining
```

### Phase Status

```
○ Not started (gray)
✓ Completed (green)
```

### Difficulty Badges

```
🟢 easy   (green)
🟡 medium (yellow)
🔴 hard   (red)
```

### Quiz Results

```
✓ Correct   (green border)
✗ Incorrect (red border)
```

---

## 🔄 State Management

### Page States

Each section detail page can be in one of 5 states:

1. **Main View** - See all 4 phases
2. **Flash Exposure View** - Reading content
3. **Flashcard View** - Reviewing cards
4. **Teach-Back** - Manual (no special view)
5. **Quiz View** - Taking quiz

### Navigation

- Each mode has "Back" button
- Returns to Section Detail (Main View)
- Progress saved automatically

---

## 💾 Data Persistence

### When Data Saves

- ✅ Flash Exposure completed → Saves immediately
- ✅ Each flashcard viewed → Updates count
- ✅ Quiz completed → Saves score
- ✅ Progress page → Reads from storage
- ✅ Section cards → Show latest progress

### What Happens If...

**You close the browser?**
→ Progress saved (in localStorage)

**You clear browser data?**
→ Progress lost (can reset manually)

**You use a different device?**
→ Separate progress (not synced)

**You use incognito mode?**
→ Progress not saved

---

## 🎯 Recommended Flow

### First Time User

1. Read Home page (understand methodology)
2. Go to Sections
3. Pick "XM Cloud Overview" (sample)
4. Do Phase A (Flash Exposure)
5. Do Phase B (Flashcards)
6. Try Phase D (Quiz)
7. Check Progress page
8. Pick next section

### Regular Study Session

1. Go to Sections or Progress
2. Pick incomplete section
3. Complete next phase
4. Check progress
5. Move to next section

### Review Session

1. Go to Progress page
2. Find sections studied days ago
3. Review flashcards again
4. Retake quiz for 100%

---

## 🚀 Getting Maximum Value

### For Learning

- ✅ Complete all phases in order
- ✅ Don't skip phases
- ✅ Review flashcards multiple times
- ✅ Retake quizzes until 100%
- ✅ Take breaks between phases

### For Content Creation

- ✅ Add sections gradually
- ✅ Test each section yourself
- ✅ Iterate based on experience
- ✅ Use real Sitecore scenarios
- ✅ Keep content ADHD-friendly

---

## 📱 Mobile Experience

The app is fully responsive:

- ✅ Touch-friendly flashcards
- ✅ Readable on small screens
- ✅ Navigation collapses to icons
- ✅ Cards stack vertically
- ✅ All features work on mobile

---

## 🎓 Success Metrics

**You're making progress when:**

- ✅ Progress bars fill up
- ✅ Quiz scores improve
- ✅ Concepts feel familiar
- ✅ You can explain topics (teach-back)
- ✅ Section cards show completion

**You've mastered a topic when:**

- ✅ All phases completed
- ✅ Quiz score ≥ 90%
- ✅ Can teach it to someone
- ✅ Remember key concepts days later

---

**Ready?** Run `npm run dev` and start exploring! 🚀
