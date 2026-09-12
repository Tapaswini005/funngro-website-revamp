```text
# Funngro Website Revamp

A modern and responsive website redesign for Funngro, created as part of the Funngro Website Revamp assignment.

The website connects two audiences — Teens looking for real project opportunities and Companies looking for young talent — through a clean and user-friendly experience.

## Features

- Modern dark-themed UI
- Responsive design for desktop, tablet, and mobile
- Mobile hamburger navigation
- Hero section with clear calls-to-action
- Platform statistics section
- How It Works section
- Dedicated Teen and Company sections
- Featured project opportunities
- Final call-to-action section
- Responsive footer
- SEO-friendly metadata
- Reusable React components
- Hover effects and interactive UI elements

## Pages

### Home

**Route:** `/`

The homepage includes:

- Hero section
- Platform statistics
- How It Works
- Teen and Company sections
- Featured Projects
- Final CTA
- Footer

### Teens & Companies

**Route:** `/audience`

This page explains the two sides of the Funngro platform:

- `/audience#teens`
- `/audience#companies`

## Tech Stack

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Next.js App Router
- Geist Font
- ESLint
- Git & GitHub

## Project Structure

```text
funngro-revamp/
│
├── app/
│   ├── audience/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Navbar.tsx
│   ├── StatsSection.tsx
│   ├── HowItWorks.tsx
│   ├── AudienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── CTASection.tsx
│   └── Footer.tsx
│
├── public/
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Tapaswini005/funngro-website-revamp.git
```

### 2. Go to the project folder

```bash
cd funngro-website-revamp
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the website

Open the following URL in your browser:

```text
http://localhost:3000
```

## Production Build

To create a production build:

```bash
npm run build
```

To run the production version:

```bash
npm start
```

## Responsive Design

The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

The navigation automatically changes to a hamburger menu on smaller screens, and the hero section adapts to different screen sizes.

## SEO

SEO-friendly metadata has been added using the Next.js Metadata API.

This includes:

- Page titles
- Meta descriptions
- Keywords
- Open Graph metadata

## Design

The website follows a modern visual style inspired by Funngro's branding.

The design uses:

- Dark navy backgrounds
- Green accent colors
- High-contrast typography
- Rounded cards
- Subtle borders
- Gradients and shadows
- Clear call-to-action buttons
- Responsive layouts

## Assignment

This project was created for the Funngro Website Revamp assignment.

The goal was to create a two-page website experience for Teens and Companies while demonstrating frontend development, responsive design, component-based architecture, and SEO implementation.

## Author

Frontend website project built using Next.js, React, TypeScript, and Tailwind CSS.