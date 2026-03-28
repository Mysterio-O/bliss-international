# Bliss International Product UI Architecture Plan

## 1. Objective

Build a mobile-first frontend ecosystem for Bliss International with:

- Public visitor website
- Unified portal entry
- Role-based dashboards for Admin, Teacher, Student, and Parent
- Light and dark themes aligned to the school logo
- Consistent, accessible design tokens using shadcn and semantic CSS variables

This plan uses Theme A as the global brand foundation and applies role colors only to contextual identity elements.

## 2. Core Design Principles

1. Brand-first, role-aware
- Keep 80-90% of UI in neutral and primary brand colors.
- Use role colors only for identity accents (chips, avatars, highlights, chart series, active nav markers).

2. Mobile-first execution
- Design smallest screen first, then scale to tablet and desktop.
- Keep interaction targets at 44px minimum.

3. Semantic tokens only
- Components consume semantic tokens (`background`, `foreground`, `primary`, `accent`, `muted`, `border`, `ring`, `chart-x`).
- Avoid hardcoded colors in components.

4. Accessibility and clarity
- Minimum AA contrast.
- Color is never the only status signal.

5. Restraint in motion
- Public pages can use expressive but soft motion.
- Dashboards use utility motion only.

## 3. Theme A Token Foundation

### 3.1 Base Brand Palette (Theme A)

- Brand background (light): `#F7FAFC`
- Brand surface (light): `#FFFFFF`
- Brand text (light): `#0B1C2E`
- Brand primary: `#2B5C88`
- Brand secondary: `#A3CB3F`
- Brand accent: `#F5A623`

- Brand background (dark): `#08121E`
- Brand surface (dark): `#102235`
- Brand text (dark): `#EAF2FB`
- Brand primary (dark mode): `#5E8FBC`
- Brand secondary (dark mode): `#B7D85C`
- Brand accent (dark mode): `#FFBC52`

### 3.2 Role Accent Tokens

- Admin: `#2B5C88`
- Teacher: `#2E8A72`
- Student: `#8FBE3F`
- Parent: `#D9921E`

Token names to add:

- `--role-admin`
- `--role-teacher`
- `--role-student`
- `--role-parent`

### 3.3 Role Accent Usage Rules

Allowed:
- Chips and tags
- Avatar rings or presence dots
- Active nav markers
- Dashboard highlights
- Chart data series

Not allowed:
- Global page backgrounds
- Large body text color
- Core form/control default states

## 4. Information Architecture (Mobile-first)

### 4.1 Public Marketing Site

Primary sections:
- Home
- About
- Academics
- Admissions
- News and Events
- Contact
- Portal Entry

### 4.2 Unified Portal Entry

Flow:
1. User signs in from Portal Entry
2. System resolves role
3. User is routed to role dashboard shell

### 4.3 Role Dashboard Ecosystem

Shared shell:
- Common nav and layout framework
- Shared data components and utility patterns

Role-specific modules:
- Admin: operations, approvals, institution overview
- Teacher: class management, assignments, attendance
- Student: schedule, tasks, grades, notices
- Parent: child progress, fee/alerts, school communication

## 5. UI Architecture and Layout System

### 5.1 App Shell by Breakpoint

Mobile:
- Top bar with quick actions
- Bottom navigation for primary destinations

Tablet/Desktop:
- Left sidebar for primary nav
- Top utility bar for search, profile, notifications, actions

### 5.2 Reusable Primitives

Design and build these as shared components:
- Cards
- Stat tiles
- Timeline
- Data table
- Announcement feed
- Assignment list

### 5.3 Layout Rhythm

- Spacing scale based on 4px increments
- Inputs/buttons radius: 8px
- Mobile cards radius: 12px to 16px

## 6. Accessibility Baseline

- WCAG AA minimum contrast for text and key controls
- Tap target minimum 44px x 44px
- Add text or icon cues in addition to color for all statuses
- Ensure keyboard focus states are visible in both light and dark themes

## 7. Motion Language

Public site:
- Soft entrance reveals for hero and section content
- Subtle hero gradient shift

Dashboards:
- Restrained utility transitions only
- No decorative motion in high-frequency workflows

Theme transitions:
- 180ms to 250ms cross-fade on color-variable changes

## 8. Technical Token Strategy in Current Stack

Current stack:
- Next.js app router
- Supabase
- shadcn with CSS variables

Implementation direction:
1. Keep semantic token map in `:root` (light) and `.dark` (dark).
2. Add role tokens once at global level.
3. Map shadcn variables to semantic intent.
4. Ensure components consume semantic utility classes only.
5. Do not place raw hex values inside component files.

## 9. Execution Plan (Phased)

### Phase 1: Foundations

Deliverables:
- Theme A semantic token map in light and dark
- Role token definitions
- Typography, spacing, radius standards documented

Acceptance criteria:
- All base UI surfaces render correctly in both themes
- No hardcoded colors in shared components

### Phase 2: Public Site Architecture

Deliverables:
- Public IA routes scaffolded
- Mobile-first responsive section layouts
- Portal Entry page and CTA patterns

Acceptance criteria:
- Navigation works on mobile and desktop
- Visual hierarchy aligns with Theme A

### Phase 3: Shared Dashboard Shell

Deliverables:
- Shared app shell (mobile bottom nav, desktop sidebar)
- Global top utility bar
- Shared primitives (cards, tables, timeline, feeds)

Acceptance criteria:
- Shell adapts cleanly across breakpoints
- Components are theme-safe and token-driven

### Phase 4: Role Dashboards

Deliverables:
- Admin, Teacher, Student, Parent dashboard home screens
- Role accent applied only to allowed elements

Acceptance criteria:
- Role identity is visible but controlled
- 80-90% of surfaces remain neutral plus brand-primary

### Phase 5: Accessibility and Motion Pass

Deliverables:
- Contrast and focus-state verification
- 44px target audit on touch interactions
- Motion polish pass (public expressive, dashboard restrained)

Acceptance criteria:
- AA contrast baseline met
- Keyboard and touch usability validated

## 10. Component Color Governance

Use a simple governance rule in code reviews:

- Check 1: Is this color from a semantic token?
- Check 2: If role color is used, is it in an allowed accent area?
- Check 3: Does this state still communicate without color alone?

## 11. Initial Build Order Recommendation

1. Finalize token map and role tokens in global styles
2. Build public header, footer, navigation patterns
3. Build portal entry and role-routing UX
4. Build shared dashboard shell and primitives
5. Build each role dashboard page using same component system
6. Run accessibility and motion refinement pass

## 12. Definition of Done

This architecture is complete when:

- Theme A is implemented in light and dark using semantic tokens
- Role accents are constrained to approved context only
- Public site and all dashboard shells are mobile-first responsive
- Shared primitives are reused across all role dashboards
- Accessibility baseline and motion rules are implemented and verified
