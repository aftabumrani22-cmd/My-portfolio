# Aftab Ali Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. The site includes project case studies, skills, experience, achievements, services, and contact options.

## Quick start

Requirements: Node.js and npm.

```bash
npm ci
npm run dev
```

Vite prints the local development URL after the server starts.

## Common commands

```bash
npm run dev      # Start the local development server
npm run build    # Type-check and create the production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run Oxlint
```

## Project structure

```text
Portfolio/
├── public/                  # Static files served as-is
│   ├── Aftab-Ali-CV.pdf     # Downloadable CV used by the site
│   ├── profile.jpg          # Profile image used in the hero
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/          # Page sections and reusable UI
│   │   ├── icons/           # Social platform icons
│   │   └── ui/              # Shared components such as SectionHeading
│   ├── config/site.ts       # Personal details, contact links, navigation
│   ├── data/                # Projects, skills, experience, and other content
│   ├── hooks/               # Shared React hooks
│   ├── types/               # TypeScript data contracts
│   ├── App.tsx              # Page composition and scroll reveal setup
│   ├── index.css            # Theme tokens, theme styles, motion, global styles
│   └── main.tsx             # React application entry point
├── docs/
│   ├── design-system.md     # Design reference
│   └── source-materials/    # Original CV and profile image references
├── index.html               # Document metadata and font loading
├── package.json             # Scripts and dependencies
└── vite.config.ts           # Vite and Tailwind integration
```

`dist/` and `node_modules/` are generated locally. They are excluded from source control and hidden from the VS Code Explorer.

## Where to make changes

- **Name, bio, location, social links, email, WhatsApp, CV path, and navigation:** `src/config/site.ts`
- **Projects and project links:** `src/data/projects.ts`
- **Skills:** `src/data/skills.ts`
- **Experience:** `src/data/experience.ts`
- **Awards and certificates:** `src/data/achievements.ts`
- **Services and workflow:** `src/data/services.ts` and `src/data/process.ts`
- **Page section order:** `src/App.tsx`
- **Visual tokens, light/dark themes, and animations:** `src/index.css`
- **Shared UI primitives:** `src/components/ui/`

Replace the downloadable CV at `public/Aftab-Ali-CV.pdf` and the displayed photo at `public/profile.jpg` when updating those assets. Keep the originals in `docs/source-materials/` for reference.

## Contact form

Direct email and WhatsApp links are configured in `src/config/site.ts`. The contact form uses client-side validation. With `contact.formspreeId` empty, submission opens a prefilled email draft. To send submissions through Formspree, set that value to the form ID; no API key is required in the frontend.

## Accessibility and motion

The interface includes keyboard focus styles and reduced-motion handling. Scroll reveals and the skills ticker respect the visitor's `prefers-reduced-motion` setting. The theme toggle saves the selected theme in local storage and falls back to the operating-system preference.

## Production build

Run `npm run build`, then deploy the generated `dist/` directory to a static hosting provider. Vite's `npm run preview` command can be used to inspect the production output locally.
