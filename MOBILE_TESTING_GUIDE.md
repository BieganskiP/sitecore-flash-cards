# Mobile Responsive Testing Guide

## How to Test the Responsive Design

### Using Browser DevTools

#### Chrome/Edge DevTools
1. Open the application in Chrome or Edge
2. Press `F12` or right-click and select "Inspect"
3. Click the "Toggle device toolbar" icon (📱) or press `Ctrl+Shift+M` (Windows) / `Cmd+Shift+M` (Mac)
4. Select different devices from the dropdown:
   - iPhone SE (375px) - Small mobile
   - iPhone 14 Pro (393px) - Standard mobile
   - iPad Mini (768px) - Tablet
   - iPad Air (820px) - Large tablet
5. Test in both portrait and landscape orientations

#### Firefox DevTools
1. Open the application in Firefox
2. Press `F12` or right-click and select "Inspect Element"
3. Click "Responsive Design Mode" or press `Ctrl+Shift+M` (Windows) / `Cmd+Opt+M` (Mac)
4. Test various screen sizes using the dimension controls

### Key Test Points

#### 1. Navigation (All Pages)
- **Mobile (< 1024px)**:
  - [ ] Fixed header appears at top
  - [ ] Hamburger menu icon visible
  - [ ] Clicking hamburger opens slide-out menu
  - [ ] Menu items are touch-friendly
  - [ ] Overlay closes menu when clicked
  - [ ] Navigation items work correctly
  
- **Desktop (≥ 1024px)**:
  - [ ] Fixed sidebar on left
  - [ ] No mobile header visible
  - [ ] Content has proper left margin

#### 2. Dashboard Page (`/`)
- **Mobile**:
  - [ ] Stats cards stack vertically (1 column)
  - [ ] "4-Phase Learning System" cards show 1 column
  - [ ] "Quick Actions" card appears below phases
  - [ ] "Pro Tips" card displays properly
  - [ ] "Why This Works" grid shows 1 column
  - [ ] All text is readable without zooming
  
- **Tablet (640-1023px)**:
  - [ ] Stats show 2 columns
  - [ ] Phase cards show 2 columns
  - [ ] "Why This Works" shows 2 columns
  
- **Desktop (≥ 1024px)**:
  - [ ] Stats show 3 columns
  - [ ] Sidebar layout appears
  - [ ] "Why This Works" shows 3 columns

#### 3. Sections Page (`/sections`)
- **Mobile**:
  - [ ] Header stacks vertically
  - [ ] Course selector full width
  - [ ] Course info card stacks vertically
  - [ ] Section cards show 1 column
  - [ ] All content is readable
  
- **Tablet**:
  - [ ] Header shows side-by-side
  - [ ] Section cards show 2 columns
  
- **Desktop**:
  - [ ] Section cards show 3 columns

#### 4. Progress Page (`/progress`)
- **Mobile**:
  - [ ] Stats cards stack (1 column)
  - [ ] Section progress cards stack properly
  - [ ] Progress indicators are visible
  - [ ] Reset buttons stack vertically
  - [ ] Badge text wraps appropriately
  
- **Tablet & Desktop**:
  - [ ] Stats show 2-3 columns
  - [ ] Reset buttons side-by-side

#### 5. Section Detail Page (`/sections/[id]`)
- **Mobile**:
  - [ ] Content clears mobile header (proper top padding)
  - [ ] Section header stacks vertically
  - [ ] Phase cards show full-width buttons
  - [ ] Tips sidebar appears below content
  - [ ] "Start Phase" buttons are full width
  
- **Desktop**:
  - [ ] Tips sidebar on right side
  - [ ] Proper two-column layout

#### 6. Flash Exposure View
- **Mobile**:
  - [ ] Timer bar stacks vertically
  - [ ] Content article is readable
  - [ ] Proper top padding clears header
  - [ ] Tips show below content
  
- **Desktop**:
  - [ ] Timer shows horizontal layout
  - [ ] Tips sidebar on right

#### 7. Flashcard View
- **Mobile**:
  - [ ] Card height appropriate (280px)
  - [ ] Progress bar visible at top
  - [ ] Card text is readable
  - [ ] "Click to flip" text adjusted for mobile ("Tap to reveal")
  - [ ] Navigation buttons stack/full-width
  - [ ] Tips appear below cards
  - [ ] Card flip animation works smoothly
  
- **Desktop**:
  - [ ] Card height larger (380px)
  - [ ] Tips sidebar on right
  - [ ] Buttons side-by-side

#### 8. Quiz View
- **Mobile**:
  - [ ] Question cards properly sized
  - [ ] Answer options touch-friendly
  - [ ] Scenario boxes readable
  - [ ] Explanation cards properly formatted
  - [ ] Buttons stack vertically
  - [ ] Tips appear below quiz
  
- **Desktop**:
  - [ ] Tips sidebar visible
  - [ ] Proper layout spacing

### Common Issues to Check

#### Typography
- [ ] No text too small to read on mobile (minimum 12px)
- [ ] Headings scale appropriately
- [ ] Line heights are comfortable
- [ ] No text overflow or truncation issues

#### Spacing
- [ ] Proper padding on all sides (not touching edges)
- [ ] Adequate spacing between elements
- [ ] Cards have breathing room
- [ ] No elements overlapping

#### Touch Targets
- [ ] All buttons at least 44x44px
- [ ] Links are easy to tap
- [ ] No accidental taps on nearby elements
- [ ] Hamburger menu icon easy to tap

#### Layout
- [ ] No horizontal scrolling at any breakpoint
- [ ] Content properly contained
- [ ] Grids don't break
- [ ] Images/icons scale properly

#### Performance
- [ ] Page loads quickly on 3G simulation
- [ ] Animations are smooth
- [ ] No layout shift during load
- [ ] Menu opens/closes smoothly

### Orientation Testing
Test in both portrait and landscape modes:
- [ ] Portrait: Content stacks properly
- [ ] Landscape: Layout adjusts appropriately
- [ ] No broken layouts in either orientation

### Specific Device Testing Recommendations

#### iPhone SE (375px width)
- Smallest common mobile device
- Test that everything still works at this size

#### Standard Smartphones (390-430px)
- iPhone 14, Pixel, Samsung Galaxy
- Should be the primary mobile target

#### Tablets (768-1024px)
- iPad, Android tablets
- Should use 2-column layouts where appropriate

### Quick Visual Checks

Open each page and verify:
1. No horizontal scrollbar
2. Navigation works (hamburger on mobile, sidebar on desktop)
3. All text is readable without zooming
4. All buttons are clickable/tappable
5. Cards and sections have proper spacing
6. Icons and images scale correctly
7. No content cutoff or overlap

### Testing Complete When...
- [ ] All pages tested at mobile (375px)
- [ ] All pages tested at tablet (768px)
- [ ] All pages tested at desktop (1024px+)
- [ ] Navigation works on all breakpoints
- [ ] All interactive elements work
- [ ] No console errors
- [ ] Build succeeds
- [ ] Lint passes
