# Aftab Ali — Full

## Mission
Create implementation-ready, token-driven UI guidance for Aftab Ali — Full that is optimized for consistency, accessibility, and fast delivery across documentation site.

## Brand
- Product/brand: Aftab Ali — Full
- URL: https://www.aftabali.site/
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Inter`, `font.family.stack=Inter, system-ui, -apple-system, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=25.6px`
- Typography scale: `font.size.xs=12.48px`, `font.size.sm=12.8px`, `font.size.md=13.2px`, `font.size.lg=13.33px`, `font.size.xl=13.6px`, `font.size.2xl=13.76px`, `font.size.3xl=14.08px`, `font.size.4xl=14.4px`
- Color palette: `color.text.primary=#f8fafc`, `color.text.secondary=#94a3b8`, `color.text.tertiary=#38bdf8`, `color.border.strong=#ffffff`, `color.surface.base=#000000`, `color.surface.raised=#0f172a`, `color.surface.strong=#07090e`
- Spacing scale: `space.1=3.2px`, `space.2=4px`, `space.3=5.6px`, `space.4=7.2px`, `space.5=8px`, `space.6=8.8px`, `space.7=9.6px`, `space.8=10.4px`
- Radius/shadow/motion tokens: `radius.xs=12px`, `radius.sm=12.8px`, `radius.md=13.6px`, `radius.lg=16px`, `radius.xl=20px`, `radius.2xl=32px`, `radius.step7=50px`, `radius.step8=999px` | `shadow.1=rgba(0, 0, 0, 0.5) 0px 10px 30px -15px`, `shadow.2=rgba(56, 189, 248, 0.35) 0px 4px 20px 0px`, `shadow.3=rgba(0, 0, 0, 0.5) 0px 10px 30px -10px`, `shadow.4=rgba(56, 189, 248, 0.3) 0px 4px 15px 0px` | `motion.duration.instant=200ms`, `motion.duration.fast=250ms`, `motion.duration.normal=300ms`, `motion.duration.slow=350ms`, `motion.duration.slower=800ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: buttons (35), links (31), cards (13), lists (7), inputs (3), navigation (1).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
