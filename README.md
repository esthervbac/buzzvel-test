# Luma

Luma is a responsive landing page concept for an online learning platform. It introduces practical, expert-led courses in design, technology, business, and creative fields, and guides visitors through featured courses, how the platform works, testimonials, and a contact section.

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4

## Requirements

- Node.js and npm

## Run locally

1. Clone the repository and move into the project directory.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

The page updates as you edit the source files.

Create a production build:

```bash
npm run build
```

To run the production build locally, start it after building:

```bash
npm run start
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/app/page.tsx` — assembles the landing page sections.
- `src/app/home/` — content for the hero, course categories, featured course, and other page sections.
- `src/app/components/` — shared interface components such as the header, footer, buttons, and contact form.
- `public/` — SVG illustrations and other static assets.

## Note

This project is a front-end landing page. The contact form and course links are presentation only; no backend submission or course enrollment is configured.

## Approximate time spent

- 21 hours in total

## AI tools used

- Gemini: helped me to adjust some complicated parts as the mobile version and the readme file.
